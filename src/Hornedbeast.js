import React from "react";

class HornedBeast extends React.Component{
    render(){
        return(
            <>
                <h2>{this.props.title}</h2>
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    height={this.props.height}
                />
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;
