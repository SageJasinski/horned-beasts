import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likes,
            description: this.props.description
        }
    }

    handleClicked = () => {
        // for(let i = 0; i <= newArr.length; i++){
            this.setState({likes: this.state.likes + '❤️'})
        // };
    }

    render(){
        return(
            <>
                <h2>{this.props.title}</h2>
                <img
                    className="d-block w-20"
                    src={this.props.src}
                    title={this.props.title}
                    alt={this.props.alt}
                    height={this.props.height}
                />
                <p>{this.state.description}</p>
                <p className="heart">{this.state.likes}</p>
                <Button variant="primary" onClick={this.handleClicked}>Like</Button>
            </>
        )
    }
}

export default HornedBeast;
