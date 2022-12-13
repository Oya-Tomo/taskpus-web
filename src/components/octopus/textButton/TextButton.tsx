import React, { MouseEventHandler } from "react";
import style from "./TextButton.module.scss";

type TextButtonProps = {
    text: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const TextButton: React.FC<TextButtonProps> = ({ text, onClick }) => {
    return (
        <div className={style["base"]} tabIndex={0} onClick={onClick}>
            <div className={style["line"]}>{text}</div>
        </div>
    );
};

export default TextButton;
