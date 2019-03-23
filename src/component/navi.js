import React from "react";
require("./navi.css");

class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey:1,
        }
    }
    changeActiveKey = (activeKey) => {
        this.setState({activeKey: activeKey});
    };
    render() {
        return (
            <div className="navi">
                <p><a href="#" onClick={this.changeActiveKey.bind(this, 1)} style={this.state.activeKey===1?{color: "#1ba19d"}:null}>Yechine首页</a></p>
                <p><a href="#" onClick={this.changeActiveKey.bind(this, 2)} style={this.state.activeKey===2?{color: "#1ba19d"}:null}>公司简介</a></p>
                <p><a href="#" onClick={this.changeActiveKey.bind(this, 3)} style={this.state.activeKey===3?{color: "#1ba19d"}:null}>人才招聘</a></p>
                <p><a href="#" onClick={this.changeActiveKey.bind(this, 4)} style={this.state.activeKey===4?{color: "#1ba19d"}:null}>公告通知</a></p>
                <p><a href="#" onClick={this.changeActiveKey.bind(this, 5)} style={this.state.activeKey===5?{color: "#1ba19d"}:null}>联系我们</a></p>
            </div>
        )
    }
}

export default Navi;