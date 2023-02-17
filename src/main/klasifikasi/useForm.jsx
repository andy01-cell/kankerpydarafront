import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(datavalue, validateOnChange = false, validate) {
  const [state, setState] = useState(datavalue);
  const [errors, setErrors] = useState({});

  const onHandledChanged = (e) => {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
    if (validateOnChange) validate({ [name]: state });
  };

  const resetForm = () => {
    setState(datavalue);
    setErrors({});
  };

  return {
    state,
    setState,
    errors,
    setErrors,
    onHandledChanged,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
