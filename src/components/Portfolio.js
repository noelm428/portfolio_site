import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../project1.jpg";
import project2 from "../project2.jpg";
import project3 from "../project3.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,

    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="240"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Klicking it Chuck Norris
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio ea dolore repellat vitae assumenda id sunt recusandae
                  ipsam atque mollitia, minima, soluta sint modi doloribus
                  qualias! Sunt, pariatur necessitatibus.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/noelm428/Klicking-it-with-Chuck-Norris"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://noelm428.github.io/Klicking-it-with-Chuck-Norris/"
                target="_blank"
              >
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="240"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Spindle and Yarn
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio ea dolore repellat vitae assumenda id sunt recusandae
                  ipsam atque mollitia, minima, soluta sint modi doloribus
                  qualias! Sunt, pariatur necessitatibus.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/noelm428/spindle_yarn_frontend"
                target="_blank"
              >
                GitHub
              </Button>

              <Button
                size="small"
                color="primary"
                href="https://spindlexyarn1.herokuapp.com/"
                target="_blank"
              >
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="240"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Plantsman
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio ea dolore repellat vitae assumenda id sunt recusandae
                  ipsam atque mollitia, minima, soluta sint modi doloribus
                  qualias! Sunt, pariatur necessitatibus.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/noelm428/plantsman"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://plantsman.herokuapp.com/plants"
                target="_blank"
              >
                Live demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
