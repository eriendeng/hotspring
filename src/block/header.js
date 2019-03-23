import React from "react";
import Telephone from "../component/telephone";
import Email from "../component/email";
import User from "../component/user";
require("./header.css");

export default  () => {
    return (
        <div className="header">
            <Telephone />
            <Email />
            <p style={{marginRight:"8%"}}>欢迎来到热泉港!</p>
            <User />
            <p style={{marginRight:"1%"}}><a href="#">登录</a></p>
            <p><a href="#">注册</a></p>
        </div>
    )

}