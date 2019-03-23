import React from "react";
require("./menu.css");

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeKey: 2,
            menuList: ["尖端科技", "网络研讨会", "食药资讯", "最新应用"],
        };
    }
    change = (key) => {
        this.setState({
            activeKey: key
        })
    };
    render() {
        return (
            <div className="menu">
                {this.state.menuList.map((menu, index) => {
                    return (
                        <div
                            className={index === this.state.activeKey-1 ? "active" : "inactive"}
                            onClick={this.change.bind(this, index+1)}
                        >
                            {menu}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Menu;