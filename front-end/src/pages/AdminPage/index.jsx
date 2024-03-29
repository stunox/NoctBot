import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getUserDetails } from "../../graphql/queries/getGuildConfig";
import { Box, Button } from "@chakra-ui/react";
import "./index.css";
import { CommandCreateForm } from "../../components/CommandForm";
import { createCommandMutation } from "../../graphql/mutations/updatePrefix";

export function AdminPage(props) {
  const { loading } = useQuery(getUserDetails);

  const [createCmdMutation] = useMutation(createCommandMutation);
  const createCommand = (values) => {
    console.log(values);
    createCmdMutation({
      variables: {
        ...values,
      },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  if (!loading) {
    return (
      <Box className="admin-page-root">
        <CommandCreateForm createCommand={createCommand} />
        <Button>
          Test
        </Button>
      </Box>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
