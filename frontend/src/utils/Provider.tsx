// app/providers.jsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import UserAuth from "./UserAuth";

const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserAuth>{children}</UserAuth>
    </QueryClientProvider>
  );
};
export default Provider;
