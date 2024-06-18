"use client";
import React, { FC } from "react";
import * as Components from "../AuthForm/AuthStyle";
import "../AuthForm/auth.css";
const ResetPasswordForm: FC = () => {
  return (
    <Components.Container>
      <Components.SignUpContainer>
        <Components.Form>
          <Components.Title>Reset Password</Components.Title>
          <p className="text-sm text-muted-foreground my-2">
            The password should have atleast 6 characters
          </p>
          <Components.Input type="password" placeholder="New Password" />
          <Components.Input type="password" placeholder="Confirm Password" />

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

export default ResetPasswordForm;
