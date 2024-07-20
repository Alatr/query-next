"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface ReactQueryClientProviderProps {
  children: ReactNode;
}

export const ReactQueryClientProvider: FC<ReactQueryClientProviderProps> = (
  props
): React.ReactNode => {
  const { children } = props;
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
