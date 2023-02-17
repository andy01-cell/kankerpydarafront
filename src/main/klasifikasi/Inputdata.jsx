import React from "react";
import { TextField } from "@material-ui/core";

export default function Inputdata(props) {
  const { name, label, type, error = null, onChange,value } = props;
  return (
    <TextField
      variant="outlined"
      size="small"
      label={label}
      name={name}
      onChange={onChange}
      type={type}
      value = {value}
      {...(error && { error: true, helperText: error })}
    />
  );
}
