import React from "react";
import { Menu } from "../../components/";
import style from "./Task.module.scss";

const Task = () => {
    return (
        <div className={style["page"]}>
            <Menu />
            <main className={style["contents"]}>
                <h1>Tasks</h1>
            </main>
        </div>
    );
};

export default Task;
