import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";

export default function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="first" label="firstComp" sx={{ color: "black" }} />
          <NavItem to="second" label="secondComp" sx={{ color: "black" }} />
          <NavItem to="life-cycle" label="LifeCycle" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
