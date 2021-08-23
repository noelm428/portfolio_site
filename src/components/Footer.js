import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FormatAlignJustifyOutlinedIcon from "@material-ui/icons/FormatAlignJustifyOutlined";
const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<FormatAlignJustifyOutlinedIcon />}
        href=""
        target="_blank"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/noelm428/"
        target="_blank"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
        href="https://github.com/noelm428"
        target="_blank"
      />
    </BottomNavigation>
  );
};
export default Footer;
