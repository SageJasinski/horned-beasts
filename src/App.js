import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import imgUrl from './assets/data.json';
import data from './assets/data.json';
import HornedBeast from './Hornedbeast';
// import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class App extends React.Component {
  render(){
    return (
      <>
      <Header />
      <h2>Cartoon</h2>
        <Carousel>
            {data.map((animal, index) => {
              if(animal.id == "cartoon"){
                let newCartoon = <HornedBeast src={animal.imgUrl} title={animal.title} description={animal.descriptions} likes={animal.likes} />;
                return <Carousel.Item key={index}>{newCartoon}</Carousel.Item>;
              }
            })}
        </Carousel>
        <h2>Disney</h2>
        <Carousel>
        {data.map((animal, index) => {
              if(animal.id == "disney"){
                let newDisney = <HornedBeast src={animal.imgUrl} title={animal.title} description={animal.descriptions} likes={animal.likes} />;
                return <Carousel.Item key={index} data-bs-interval="false" data-pause="hover">{newDisney}</Carousel.Item>;
              }
        })}
        </Carousel>
        <Footer />
      </>
    )
  }
}

export default App;
