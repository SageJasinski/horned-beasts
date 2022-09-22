import React from "react";
// import HornedBeast from './Hornedbeast.js';
import HornedModal from './BeastModal.js';

class Main extends React.Component {
    
  render() {
    return (
      <>
      <HornedModal show={this.state.show} hide={this.hideCard} selected={this.state.selected} />
      </>
    );
  }
}

export default Main;
