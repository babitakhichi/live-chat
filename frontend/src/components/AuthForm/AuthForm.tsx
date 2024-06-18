"use client";
import React, { FC, useState, useContext } from "react";
import * as Components from "./AuthStyle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./auth.css";
import userContext from "../../utils/userContext";
import OpenNotification from "../shared/Notification";
import { login, signup } from "../../services";
import { AUTH, loginInfo, signupInfo } from "../../constant";
import { useRouter } from "next/navigation";
const AuthForm: FC = () => {
  const [signIn, toggle] = useState<boolean>(true);
  const { setAlert } = useContext(userContext);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [signupInfo, setSignupInfo] = useState<signupInfo>({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    email: "",
    password: "",
  });
  const redirection = (token: string) => {
    localStorage.setItem("token", token);
    queryClient.refetchQueries([AUTH]);
    router.push("/dashboard");
  };

  const handleLogin = useMutation(login, {
    onSuccess: (res) => {
      setAlert({
        isOpen: true,
        title: res.message,
        type: "success",
      });
      redirection(res.token);
    },
    onError: (err: any) =>
      setAlert({
        isOpen: true,
        title: err.response.data,
        type: "failure",
      }),
  });

  const handleSignup = useMutation(signup, {
    onSuccess: (res) => {
      setAlert({
        isOpen: true,
        title: res.message,
        type: "success",
      });
      redirection(res.token);
    },
    onError: (err: any) =>
      setAlert({
        isOpen: true,
        title: err.response.data,
        type: "failure",
      }),
  });

  const onChange = (event: React.SyntheticEvent): void => {
    const { name, value } = event.target as HTMLButtonElement;
    signIn
      ? setLoginInfo({ ...loginInfo, [name]: value })
      : setSignupInfo({ ...signupInfo, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    signIn ? handleLogin.mutate(loginInfo) : handleSignup.mutate(signupInfo);
  };
  return (
    <Components.Container>
      <OpenNotification />
      <Components.SignUpContainer signingin={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            value={signupInfo?.fullname}
            name="fullname"
            onChange={onChange}
            required
          />
          <Components.Input
            type="email"
            placeholder="Email"
            value={signupInfo?.email}
            onChange={onChange}
            name="email"
            required
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={signupInfo?.password}
            name="password"
            onChange={onChange}
            required
          />
          <Components.Input
            type="password"
            placeholder="Confirm password"
            name="confirmpassword"
            value={signupInfo?.confirmpassword}
            onChange={onChange}
            required
          />
          <Components.Button
            type="submit"
            // onClick={(e: React.MouseEvent<HTMLElement>) => {
            //   e.preventDefault();
            //   handleSignup.mutate(signupInfo)
            // }}
          >
            Sign Up
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingin={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            value={loginInfo?.email}
            name="email"
            onChange={onChange}
            required
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={loginInfo?.password}
            name="password"
            onChange={onChange}
            required
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button
            type="submit"
            // onClick={(e: React.MouseEvent<HTMLElement>) => {
            //   e.preventDefault();
            //   handleLogin.mutate(loginInfo)
            // }}
          >
            Sign In
          </Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingin={signIn}>
        <Components.Overlay signingin={signIn}>
          <Components.LeftOverlayPanel signingin={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingin={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default AuthForm;
