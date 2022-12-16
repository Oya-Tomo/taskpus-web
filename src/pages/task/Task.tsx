import React from "react";
import { Menu } from "../../components/";
import style from "./Task.module.scss";

const Task = () => {
    return (
        <div className={style["page"]}>
            <Menu />
            <main className={style["contents"]}>
                <div>
                    <div>
                        <h1>Tasks</h1>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Task;
