import React from "react";
import { OctopusIconButton } from "../octopus";
import { MdPerson, MdSettings, MdTask } from "react-icons/md";
import style from "./Menu.module.scss";
import Logo from "../logo/Logo";

const Menu = () => {
    return (
        <nav className={style["menu"]}>
            <div className={style["logo"]}>
                <Logo />
            </div>
            <div className={style["division"]}>
                <div></div>
            </div>
            <div className={style["item"]}>
                <OctopusIconButton icon={<MdTask />} />
            </div>
            <div className={style["item"]}>
                <OctopusIconButton icon={<MdPerson />} />
            </div>
            <div className={style["item"]}>
                <OctopusIconButton icon={<MdSettings />} />
            </div>
        </nav>
    );
};

export default Menu;
