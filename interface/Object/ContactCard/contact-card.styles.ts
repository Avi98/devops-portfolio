import { styled } from "@/theme/stitches.config"

export const StyledContactCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: "$lg",
  boxShadow: "$md",
  padding: "20px",
  bg: "$bg",
  color: "$text",
  backgroundImage: "url('/bgk/insights.svg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "fit-content",
  border: "1px solid",
  borderColor: "rgba(228, 202, 255, 0.2)",
  width: "307px",
  maxWidth: "307px",
  "&:hover": {
    outline: "webkit-focus-ring-color auto 1px",
    borderColor: "rgba(228, 202, 255, 0.5)",
    cursor: "pointer",
  },

  "& .contact-card__avatar": {
    border: "1px solid",
    borderColor: "rgba(228, 202, 255, 0.2)",
    borderRadius: "50%",
    marginTop: "20px",
  },
  "& .contact-card__name": {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "0px",
  },
  "& .contact-card__title": {
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: "-0.02rem",
    marginBottom: "0px",
    color: "$accents8",
    textAlign: "center",
  },
  "& .contact-card__phone": {
    fontSize: "1rem",
    fontWeight: 400,
    letterSpacing: "-0.02rem",
    marginBottom: "0px",
    color: "$accents8",
  },

  ".social-card__social-links": {
    display: "flex",
    color: "$text",
    padding: 0,
    margin: 0,
    "& li": {
      margin: "0 $md",
    },
  },
})
