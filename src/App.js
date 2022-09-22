import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header';
// import Main from './Main';
import Footer from './Footer';
// import imgUrl from './assets/data.json';
import data from './assets/data.json';
import HornedBeast from './Hornedbeast';

import Carousel from 'react-bootstrap/Carousel';
import HornedModal from './BeastModal.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: {"title": "Test"},
        show: false
    }
  }

    showCard = (key) => {
      this.setState({show: true});

      let newArr = [];

      data.filter((obj) => {
         if (obj.num === key){
          newArr.push(obj);
         }
         return newArr;
      });

      this.setState({selected:newArr[0]});
      console.log(this.state.selected);
    }

    hideCard = () =>{
      this.setState({show: false})
    }

  render(){
    return (
      <>


      <h2>Cartoon</h2>
        <Carousel>
            {data.map((animal, index) => {
              if(animal.id === "cartoon"){
                let newCartoon = <HornedBeast src={animal.imgUrl} title={animal.title} description={animal.descriptions} likes={animal.likes} />;
                return <Carousel.Item key={index}>{newCartoon}</Carousel.Item>;
              }
              return console.log('linter')
            })}
        </Carousel>

        <h2>Disney</h2>
        <Carousel>
        {data.map((animal, index) => {
              if(animal.id === "disney"){
                let newDisney = <HornedBeast src={animal.imgUrl} title={animal.title} description={animal.descriptions} likes={animal.likes} showCard={this.showCard}/>;
                return <Carousel.Item key={index} data-bs-interval="false" data-pause="hover">{newDisney}</Carousel.Item>;
              }
              return console.log('linter')
        })}
        </Carousel>

        <HornedModal show={this.state.show} onHide={this.hideCard} selected={this.state.selected} heading={this.state.selected.title}/>
        <Footer />
      </>
    )
  }
}

export default App;
