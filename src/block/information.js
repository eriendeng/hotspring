import React from "react";
import Title from "../component/title";
import Menu from "../component/menu";
import Detail from "../component/detail";
require("./information.css");

export default () => {
    return (
        <div className="information">
            <Title />
            <div className="box">
                <Menu />
                <Detail />
            </div>
        </div>
    )
}