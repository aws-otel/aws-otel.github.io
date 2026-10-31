const footerStyle = theme => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "10px 20px",
    backgroundColor: "#ededed"
  },
  sectionTop: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
    padding: "10px 10px 0"
  },
  sectionBottom: {
    textAlign: "center",
    fontSize: "12px",
    padding: "10px 0"
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
});

export default footerStyle;
