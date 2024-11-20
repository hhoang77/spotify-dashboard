import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer theme="colored" autoClose={2000} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
