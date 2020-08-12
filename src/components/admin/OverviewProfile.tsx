import {useAuth0} from "../../contexts/auth0-context";
import {Grid, Typography} from "@material-ui/core";
import * as React from "react";

export const Profile = () => {

  const {isLoading, user} = useAuth0();

  return (
    <Grid container spacing={10}>
      <Grid item xs={4}>
        <img src={user.picture} alt="Profile" width={100}/>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4">{user.name}</Typography>
        <Typography>{user.email}</Typography>
      </Grid>
    </Grid>
  );
};