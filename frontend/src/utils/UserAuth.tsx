"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { auth } from "../services";
import UserContext from "./userContext";
import Cookies from "js-cookie";
import { AUTH } from "../constant";
import { Spinner } from "flowbite-react";

const UserAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const router = useRouter();

  const [alert, setAlert] = useState({
    isOpen: false,
    title: "",
    type: "",
  });

  const {
    data: user,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: auth,
    queryKey: [AUTH],
    retry: false,
    onError: () => {
      router.push("auth");
      Cookies.set("token", "");
    },
    onSuccess: () => router.push("dashboard"),
  });
  console.log("isLoading", isLoading);
  const userLogout = () => {
    localStorage.removeItem("token");
    refetch();
    router.replace("auth");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogout,
        alert,
        setAlert,
      }}
    >
      {isLoading ? ( 
        <div className="flex items-center justify-center h-screen">
          <Spinner
            color="failure"
            aria-label="Pink spinner example"
            size="xl"
          />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  ); 
};

export default UserAuth;
