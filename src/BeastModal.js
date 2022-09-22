import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class HornedModal extends React.Component {
    render(){
      return (
        <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.heading}</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>{this.props.description}</Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>Exit</Button>
          </Modal.Footer>
        </Modal>
        </>
      );
    }
  }

  export default HornedModal;
