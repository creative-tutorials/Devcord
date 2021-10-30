import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./ReduxStore";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import ServerState from "./State/serverState";
const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <ServerState>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV === "development" ? (
            <ReactQueryDevtools />
          ) : null}
          <App />
        </QueryClientProvider>
      </Provider>
    </ServerState>
  </React.StrictMode>,
  document.getElementById("root")
);
