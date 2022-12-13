import React, { MouseEventHandler } from "react";
import style from "./IconButton.module.scss";

type IconButtonProps = {
    icon: React.ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
    return (
        <div className={style["base"]} tabIndex={0} onClick={onClick}>
            <div className={style["line"]}>{icon}</div>
        </div>
    );
};

export default IconButton;
