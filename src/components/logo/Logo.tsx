import React from "react";
import logo from "./logo.svg";
import style from "./Logo.module.scss";

const Logo: React.FC = () => {
    return <img className={style["logo"]} src={logo} alt="logo" />;
};

export default Logo;
