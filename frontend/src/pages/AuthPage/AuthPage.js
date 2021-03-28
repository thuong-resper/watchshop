import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { checkValidity, updateObject } from "../../shared/utility";
import { auth } from "../../store/actions/index";
import classes from "./Auth.module.css";

const Auth = (props) => {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Address",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });
  const [isSignup, setIsSignup] = useState(true);

  const authState = useSelector((state) => state.auth);
  const { loading, error, token, authRedirectPath } = authState;

  const dispatch = useDispatch();

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //   if (token !== null) {
  //     history.push(redirect);
  //   }
  // }, [history, token, redirect]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true,
      }),
    });
    setAuthForm(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(auth(authForm.email.value, authForm.password.value, isSignup));
  };

  const switchAuthModeHandler = (prevState) => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  if (loading) {
    form = <SimpleBackdrop />;
  }

  let errorMessage = null;
  if (error) {
    errorMessage = (
      <Typography variant="body1" color="secondary" gutterBottom>
        {error.message}
      </Typography>
    );
  }

  let authRedirect = null;
  if (token) {
    authRedirect = <Redirect to={authRedirectPath} />;
  }

  return (
    <div className={classes.Auth}>
      {authRedirect}
      {errorMessage}
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success">Submit</Button>
      </form>
      <Button btnType="Danger" clicked={switchAuthModeHandler}>
        Switch To {isSignup ? "Sign In" : "Sign Up"}
      </Button>
    </div>
  );
};

export default Auth;
