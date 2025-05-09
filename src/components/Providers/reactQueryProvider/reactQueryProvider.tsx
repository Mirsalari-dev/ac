"use client";

import React, { FC, PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: (failureCount, error) => {
            if (error instanceof AxiosError) {
              const status = error.response?.status;
              if (status && status < 500) {
                return false;
              }
            }
            return failureCount < 3;
          },
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
