// import React from 'react';
import { styled } from "@mui/material/styles";

export const Message = ({ title }) => {
  const Appearance = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "black",
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#57575779",
    fontSize: "1.1em",
    marginTop: "200px",
  }));

  return <Appearance>{title}</Appearance>;
};
