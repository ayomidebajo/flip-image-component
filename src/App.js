import React, { Component } from "react";
// import classNames from 'classnames';

import "./App.css";

class App extends Component {
  componentDidMount() {
    setInterval(this.picChanger, 5000);
  }
  state = {
    ispressed: false,
    pics: [
      "https://picsum.photos/id/237/800/350",
      "https://picsum.photos/id/1001/800/350",
      "https://picsum.photos/id/1010/800/350",
      "https://picsum.photos/id/1018/800/350",
    ],
    currentImage: 0,
  };

  onClick = (e) => {
    // for (let i = 0; i < this.state.pics.length; i++) {
    //   if 
    // }

   console.log('clicked');
   this.setState({
     isPressed: true
   })
   
  };

  // onClickPrev = (e) => {
  //   if (this.state.currentImage < this.state.pics.length + 1) {
  //     this.setState({
  //       currentImage: this.state.currentImage - 1
  //     });
  //   } else {
  //     this.setState({
  //       currentImage:0
  //     })
  //   }
  //   return this.currentImage

  // }

  picChanger = () => {
    if (this.state.currentImage < this.state.pics.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  };

  render() {
    return (
      <div className="app--container">
        <div className="image--container">
          <div className="img">
            <img src={this.state.pics[this.state.currentImage]} alt="random" />
          </div>
          <div className="dots">
            <span onClick={this.onClick} className="dot">1</span>
            <span onClick={this.onClick} className="dot">2</span>
            <span onClick={this.onClick} className="dot">3</span>
            <span onClick={this.onClick} className="dot">4</span>
          </div>
          {/* <a href="#" onClick={this.onClickPrev} className='fade prev'>
              &#10094;
            </a>

            <a href="#" onClick={this.onClickNext} className='fade next'>
            &#10095; 
            </a> */}
        </div>
      </div>
    );
  }
}

export default App;
