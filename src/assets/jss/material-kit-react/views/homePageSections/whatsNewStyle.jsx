import { title } from "assets/jss/material-kit-react.jsx"

const whatsNewStyle = {
  section: {
    padding: "40px 0",
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
    color: "#999",
    textAlign: "left",
  },
  buttonStyle: {
    width: "200px",
    fontSize: "0.7rem",
    color: "#425CC7",
    "&:hover": {
      backgroundColor: "#E3E7F7",
      color: "#425CC7",
    },
  },
  linkStyle: {
    textDecoration: "none !important",
  }
}

export default whatsNewStyle
