const footerStyle = theme => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "20px 80px",
    backgroundColor: "#ededed"
  },
  sectionTop: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 10px"
  },
  sectionBottom: {
    textAlign: "center",
    padding: "15px 0"
  },
  col: { 
    margin: "0 15px", 
    width: "25%" 
  },
  link: {
    color: "#425CC7",
    textDecoration: "none !important",
    backgroundColor: "transparent",
    fontWeight: "normal",
    fontSize: "12px",
    "&:hover": {
      color: "#2F428E",
    },
  },
  verticalSpacing: {
    margin: "5px 0"
  },
  [theme.breakpoints.down("sm")]: {
    sectionTop: { 
      flexDirection: "column" 
    },
    col: { 
      textAlign: "center", 
      width: "100%",
      margin: "0" 
    }
  }  
});

export default footerStyle;
