import { title } from "assets/jss/material-kit-react.jsx";

const howItWorksStyle = {
  section: {
    padding: "20px 20px",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  gridItem: {
    paddingTop: "30px"
  },
  buttonStyle: {
    width: "120px",
    color: "#425CC7",
    "&:hover": {
      backgroundColor: "#E3E7F7",
      color: "#425CC7",
    },
  },
  linkStyle: {
    textDecoration: "none !important",
  }
};

export default howItWorksStyle;
