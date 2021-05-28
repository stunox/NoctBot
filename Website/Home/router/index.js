const router = require('express').Router();
const api = require('../routes');

const {
    client
} = require('../../../index');
const {
    getMutualGuilds,
    sortGuilds,
    getAdminGuilds,
    sortUsers
} = require('../util/utils');
const {
    getBotGuilds
} = require('../util/api');
const {
    getGuildUsers
} = require('../../../util/guild');
const {
    Guild
} = require("../../../models/main");
const { validateGuild } = require('../util/utils');

router.use('/api', api);
router.get('/', async (req, res) => {
    res.render('index', {
        user: (await client.users.resolve(req.user ? req.user.userID : null)),
        client,
        req, res,
    });
})
router.get('/login', async (req, res) => {
    if (req.user) res.redirect('/dashboard');
    else res.redirect('/api/auth/discord/redirect');
});
router.get('/commands', async (req, res) => {
    res.render('commands', {
        client,
        subtitle: 'Commands',
        req,
        res,
        // categories: [{
        //         name: 'Auto Mod',
        //         icon: 'fas fa-gavel'
        //     },
        //     {
        //         name: 'Economy',
        //         icon: 'fas fa-coins'
        //     },
        //     {
        //         name: 'General',
        //         icon: 'fas fa-star'
        //     },
        //     {
        //         name: 'Music',
        //         icon: 'fas fa-music'
        //     }
        // ],
        commands: await client.commands.map(cmd => cmd.help).filter(cmd => cmd.category !== 'admin').filter(cmd => cmd.enable),
        categories: client.categories.map(c => ({name: c, icon: 'fas fa-coins'})),
        user: (await client.users.resolve(req.user ? req.user.userID : null)),
        console
    })
})
router.get('/leaderboard', async (req, res) => {
    if (!req.user) return res.render('errors/401');
    const guilds = (await sortGuilds(await getAdminGuilds(req.user.guilds), await getMutualGuilds(req.user.guilds)));
    res.render('leaderboard/index', {
        client,
        res,
        req,
        guilds,
        type: 'leaderboard',
        user: (await client.users.resolve(req.user ? req.user.userID : null)),
    })
})
router.get('/leaderboard/:id', validateGuild, async (req, res) => {
    if (!req.user) return res.render('errors/401');
    const guilds = (await sortGuilds(await getAdminGuilds(req.user.guilds), await getMutualGuilds(req.user.guilds)));
    res.render('leaderboard/show', {
        guild: (await client.guilds.resolve(req.params.id)),
        dbUsers: (await client.getGuildUsers(req.params)),
        client,
        res,
        req,
        guilds,
        user: (await client.users.resolve(req.user ? req.user.userID : null)),
        type: 'leaderboard'
    })
})
router.get('/leaderboard/:id/:module', validateGuild, async (req, res) => {
    if (!req.user) return res.render('errors/401');
    const { module } = req.params;
    const modules = ['level', 'economy'];
    if (!modules.includes(module.toLowerCase())) return res.render('errors/404');
    const guilds = (await sortGuilds(await getAdminGuilds(req.user.guilds), await getMutualGuilds(req.user.guilds)));
    let users = await client.getGuildUsers(req.params);
    const sortedUsersLevel = await users.sort((a, b) => a.level < b.level ? 1 : -1);
    const sortedUsers = sortedUsersLevel.sort((a, b) => a.XP < b.XP ? 1 : -1)
    await res.render(`leaderboard/${module.toLowerCase()}`, {
        guild: (await client.guilds.resolve(req.params.id)),
        dbUsers: sortedUsers,
        client,
        res,
        req,
        user: (await client.users.resolve(req.user ? req.user.userID : null)),
        type: 'leaderboard',
        guilds
    })
})
router.get('/dashboard', async (req, res) => {
    if (!req.user) return res.render('errors/401');
    const guilds = (await sortGuilds(await getAdminGuilds(req.user.guilds), await getMutualGuilds(req.user.guilds)))
    res.render('dashboard/index', {
        user: (await client.users.resolve(req.user ? req.user.userID : null)),
        guilds,
        client,
        res, req,
        type: 'dashboard'
    })
});

router.get('/dashboard/:id', validateGuild, async (req, res) => {
    if (!req.user) return res.render('errors/401');
    const userGuilds = await getAdminGuilds(req.user.guilds);
    const {
        id
    } = req.params
    const guilds = (await sortGuilds(userGuilds, await getMutualGuilds(userGuilds)));
    // if (!guilds.length) return res.render('errors/custom', {
    //     h1txt: 'Huh',
    //     p1txt: 'There are nothing to see here.',
    //     btnhref1: '/',
    //     btntxt1: 'Return Home'
    // })
    const guild = client.guilds.resolve(id);
    const settings = await client.getGuild(guild);
    res.render('dashboard/show', {
        // savedGuild: await guilds.get(req.params.id),
        // savedLog: await logs.get(req.params.id),
        guild,
        users: client.users,
        player: res.locals.player,
        user: (await client.users.resolve(req.user.userID)),
        // key: res.cookies.get('key')
        guilds,
        client,
        req, res,
        settings,
        type: 'dashboard'
    })
});

router.put('/dashboard/:id/:module', validateGuild, async (req, res) => {
    if (!req.user) return res.render('errors/401');
    const guilds = (await sortGuilds(await getAdminGuilds(req.user.guilds), await getMutualGuilds(req.user.guilds)));
    try {
        const {
            id,
            module
        } = req.params;

        const savedGuild = await Guild.findOne({ guildID: id });

        savedGuild[module] = req.body;
        await savedGuild.save();

        res.redirect(`/dashboard/${id}`);
    } catch {
        res.render('errors/400');
    }
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.get('/info', checkAuth, (req, res) => {
    if (!req.user) return res.render('errors/401');
    res.json(req.user);
});

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.render('errors/401');
}

module.exports = router;