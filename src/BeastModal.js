import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class HornedModal extends React.Component {
  render(){
    return (
      <>
      <Modal show={this.props.show} onHide={this.props.onHide}>

        <Modal.Header closeButton></Modal.Header>
        
        <Modal.Title><p>{this.props.heading}</p></Modal.Title>
    
        <Modal.Body>
          <img src={this.props.img} alt={this.description}></img>
          <p>{this.props.description}</p>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>Exit</Button>
        </Modal.Footer>
      </Modal>
      </>
      );
    }
  }

  export default HornedModal;
