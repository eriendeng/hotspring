import React from "react";
import QrCode from "../component/qrcode";

require("./sidebar.css");
class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          showQR: false,
        };
    }

    showOrHide = () => {
        this.setState({
            showQR: !this.state.showQR
        })
    };
    top = () => {
        let scrollToTop = window.setInterval(function() {
            let pos = window.pageYOffset;
            if ( pos > 0 ) {
                window.scrollTo( 0, pos - 20 );
            } else {
                window.clearInterval( scrollToTop );
            }
        }, 2);
    };

    render () {
        return (
            <div className="sidebar">
                {this.state.showQR && <QrCode />}
                <div className="menu">
                    <div className="qrcode" onClick={this.showOrHide}/>
                    <div className="contact" />
                    <div className="top"  onClick={this.top}/>
                </div>
            </div>

        )
    }
}

export default Sidebar;