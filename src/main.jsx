import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GlobalContextProvider from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <QueryClientProvider client={new QueryClient()}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </GlobalContextProvider>
);
