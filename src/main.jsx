import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle/index.jsx";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  //React.StrictMode - Faz varias validações em tempo de desenvolvimento (não vai para produção)
    // custo: renderiza duas vezes
  <React.StrictMode>
    <GlobalStyle />
    {/* Precisa instalar o react-redux para linkar ( provedor) */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
