import React from "react";
import Search from "../component/seach";
require("./banner.css");



class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword: ["灭菌器", "离心管","手套", "pH计", "活性口罩", "滤纸", "胶头", "三脚架"],
            keywordHtml: [],
        }
    }

    componentDidMount = () => {
        this.loadKeyword();
    };
    //
    loadKeyword = () => {
        let arr = this.state.keyword;
        let result = [];
        for (let i=0; i<arr.length; i++){
            result.push(<p><a href="#">{arr[i]}</a></p>);
            if (i !== arr.length-1){
                result.push(<p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>);
            }
        }
        this.setState({keywordHtml: result})
    };

    render () {
        return (
            <div className="banner">
                <Search searchName="全部搜索" tips="请输入您要搜索的产品分类、型号" margin="1%"/>
                <Search searchName="名称搜索" tips="请输入您要搜索的产品名称" margin="0.7%"/>
                <div className="hot">
                    <p>HOT关键词： </p>{this.state.keywordHtml}
                </div>
            </div>
        )
    }
}

export default Banner;