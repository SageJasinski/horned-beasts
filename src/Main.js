import React from "react";
import HornedBeast from './Hornedbeast.js';
// import unicorn from './Unicorn.png'
// import moose from './moose.png'

class Main extends React.Component {
    render(){
        const hornImg = this.props.imgUrl;
        return(
        <>
            <HornedBeast src/>
            <HornedBeast
            title="Two horned beast"
            alt='It`s a moose'
            description="A moose"
            />
        </>
        )
    }
}

export default Main;
