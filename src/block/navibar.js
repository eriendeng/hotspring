import React from "react";
import Logo from "../component/logo";
import Navi from "../component/navi";
require("./navibar.css");

export default () => {
    return(
        <div className="navibar">
            <Logo />
            <Navi />
        </div>
    )
}