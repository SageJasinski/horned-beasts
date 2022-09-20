import React from "react";
import HornedBeast from './Hornedbeast.js';
import unicorn from './Unicorn.png'
import moose from './moose.png'

class Main extends React.Component {
    render(){
        return(
        <>
            <HornedBeast
                title="One Horned Beast"
                src={unicorn}
                alt='Unicorn'
                description='A unicorn'
            />
            <HornedBeast
            title="Two horned beast"
            src={moose}
            alt='It`s a moose'
            description="A moose"
            />
        </>
        )
    }
}

export default Main;
