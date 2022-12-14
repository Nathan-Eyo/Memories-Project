import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import{getPosts} from './action/posts'
import Post from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './styles';

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  

  return (
   <Container maxWidth ="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/PART_1_and_2/client/src/images/memories.png" alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
                <Post/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
   </Container>
  );
}

export default App;
