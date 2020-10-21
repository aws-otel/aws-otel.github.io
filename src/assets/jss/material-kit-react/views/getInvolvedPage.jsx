import { container } from "assets/jss/material-kit-react.jsx";

const getInvolvedPageStyle = theme => ({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem"
    }
  },
  subtitle: {
    fontSize: "1.313rem",
    margin: "10px 0 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    minHeight: "60vh",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  coloredBackground: {
    backgroundColor: "#ededed"
  },
  buttonStyle: {
    width: "120px",
    color: "white",
    backgroundColor: "#425CC7",
    "&:hover": {
      backgroundColor: "#E3E7F7",
      color: "#425CC7",
    },
  },
});

export default getInvolvedPageStyle;
