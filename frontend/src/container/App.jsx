import React from "react";
import App from "screens";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import theme from "core/theme";
import store from "common/store";
import firebase from "core/firebase";

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default () => (
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);
