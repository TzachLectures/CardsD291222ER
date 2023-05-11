import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Joi from "joi";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import { useEffect } from "react";
import { login } from "../services/usersApiService";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProvider";

export default function LoginPage() {
  const { user } = useUser();
  const { handleLogin } = useUsers();
  const { data, errors, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }
  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Login Form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={rest.validateForm}
        to={ROUTES.ROOT}
      >
        <Input
          label="email"
          name="email"
          data={data}
          error={errors.email}
          onChange={rest.handleChange}
        />
        <Input
          label="password"
          name="password"
          data={data}
          error={errors.password}
          onChange={rest.handleChange}
          type="password"
        />
      </Form>
    </Container>
  );
}
