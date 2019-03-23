import React, { Component } from 'react';
import Header from "./block/header"
import Navibar from "./block/navibar";
import Sidebar from "./block/sidebar";
import Banner from "./block/banner";
import Information from "./block/information";
import Footer from "./block/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Navibar />
          <Sidebar />
          <Banner/>
          <Information />
          <Footer />
          <p style={{
              textAlign:"center",
              color:"#a2a2a2",
              fontSize:"0.8em"
          }}
          >Author Erien@97516719@qq.com</p>
      </div>
    );
  }
}

export default App;
