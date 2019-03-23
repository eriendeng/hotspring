import React from "react";
require("./search.css");

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText:""
        };
        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
    }
    search = () => {
       console.log("search: "+this.state.inputText)
    };
    onChange = (value) => {
        this.setState({
            inputText: value,
        })
    };

    render () {
        const {searchName, tips, margin} = this.props;
        return (
            <div className="search" style={{marginBottom:margin}}>
                <button>
                    <svg
                        style={{marginTop:"12px"}}
                        width="0.741cm" height="0.847cm">
                        <image  x="0px" y="0px" width="21px" height="24px" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAQAAAC/gH7DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjAxcNOyjXtQLrAAABYklEQVQ4y4XSMUgCcRTH8Z9JggVJUEgOLi7REASh1RJEW4REQ7Q0FK1BS0hTQ1DQEE1BkGNBU00tSTVEUU3VJgQOKUSDDl0p6bfhtLvT095/uXv3+XPv//7PgxpiQDMaU1AFPetMV6oRnCvEERXs8UDM/OaEg+QAgwNmGWWKTTLAN/P1NEgWuCBky/nZAYqMO2kSuMZHfVHbQAa/lQjzwxfhBii8vABLVmIFOHaBQiwA521/LRqRlJJ7XEoasmhAUq4JfZPUa9GCpK4mtEfSh0XT1SLcIirp1So9BmTpcD3WKbBhT9wAuy4wDhj02VNRSsA6HgecpACs1s/AMhXgljidCC/DJCkDh43jkgBK1YnKUwbAIGH+xw7nqJAmwhqP1Q1p9qyrtnfgkzz91bd2uvE7j1d7iPBOkYkmM2CjAZ6AxVbQpD5SwFZraNJ94KSum640Adw1uVDHalNB95qWoX/jFz6142kqq2o9AAAAAElFTkSuQmCC" />
                    </svg>
                    <p>{searchName}</p>
                </button>
                <input placeholder={tips}/>
            </div>
        )
    }

}
export default Search;