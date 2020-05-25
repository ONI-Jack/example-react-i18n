import React from "react";
import logo from "./logo.svg";
import "./i18n";
import "./App.css";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const onClickTranEn = () => {
    i18n.changeLanguage("en");
  };

  const onClickTranTh = () => {
    i18n.changeLanguage("th");
  };

  return (
    <div className="App">
      <p>{t("title")}</p>

      <p>{t("description.part1")}</p>

      <p>{t("home.buttonHome")}</p>
      <button type="button" onClick={onClickTranEn}>
        EN
      </button>
      <button type="button" onClick={onClickTranTh}>
        TH
      </button>
    </div>
  );
}

export default App;
