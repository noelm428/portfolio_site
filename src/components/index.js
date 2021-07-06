import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";

import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.7",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Header />
      {
        <Particles
          canvasClassName={classes.particlesCanva}
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: false,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                strole: {
                  width: 1,
                  color: "tomato",
                },
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 0.1,
                  sync: true,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: true,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },

              modes: {
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
              },
            },
          }}
        />
      }
      <br />
    </>
  );
};

export default Home;
