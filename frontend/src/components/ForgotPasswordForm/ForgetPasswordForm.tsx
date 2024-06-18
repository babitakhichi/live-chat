"use client";
import React, { FC } from "react";
import * as Components from "../AuthForm/AuthStyle";
import "../AuthForm/auth.css";
const ForgetPasswordForm: FC = () => {
  return (
    <Components.Container>
      <Components.SignUpContainer>
        <Components.Form>
          <Components.Title>Forgot Password</Components.Title>
          <p className="text-sm text-muted-foreground my-2">
            Enter your email to reset your password
          </p>
          <Components.Input type="email" placeholder="Email" />

          <Components.Button
            className="mt-3"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              e.preventDefault();
              console.log("jsjs");
            }}
          >
            Submit
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.OverlayContainer>
        <Components.Overlay>
          <Components.LeftOverlayPanel>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton>Sign In</Components.GhostButton>
          </Components.LeftOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default ForgetPasswordForm;
