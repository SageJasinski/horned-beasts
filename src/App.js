import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
// import Main from './Main';
import Footer from './Footer';
// import imgUrl from './assets/data.json';
import data from './assets/data.json';
import HornedBeast from './Hornedbeast';

import Carousel from 'react-bootstrap/Carousel';
import HornedModal from './BeastModal.js';
import { Form } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: {},
        show: false,
        searchFor: 0,
        // card: {},
    }
  }

    showCard = (key) => {
      this.setState({show: true});

      const chosen = data.filter((obj) => {
        return obj.num === key;
        }
      )

      this.setState({selected: chosen[0]});
      // console.log(this.state.selected);
    }

    hideCard = () =>{
      this.setState({show: false})
    }

    searchFilter = (event) => {
      event.preventDefault();

      const phrase = event.target.drop.value;

      const search = data.filter((animal) => {
         return animal.id.includes(phrase.toLowerCase);
    })


    }

  render(){
    return (
      <>
      <Header></Header>
        <Form onSubmit={this.searchFilter}>
          <Form.Group controlId='drop'>
              <Form.Label>
                Search by type:
              </Form.Label>

              <Form.Select>
              </Form.Select>
          </Form.Group>
        </Form>
        <Carousel>
            {data.map((animal, index) => {
              if(animal.id === "cartoon"){
                let newCartoon = <HornedBeast src={animal.imgUrl} title={animal.title} likes={animal.likes} showCard={this.showCard} id={animal.num} />;
                return <Carousel.Item key={index} data-bs-interval="false" data-pause="hover">{newCartoon}</Carousel.Item>;
              }
              return console.log('linter')
            })}
        </Carousel>

        <h2>Disney</h2>
        <Carousel>
        {data.map((animal, index) => {
              if(animal.id === "disney"){
                let newDisney = <HornedBeast src={animal.imgUrl} title={animal.title} likes={animal.likes} showCard={this.showCard} id={animal.num} />;
                return <Carousel.Item key={index} data-bs-interval="false" data-pause="hover">{newDisney}</Carousel.Item>;
              }
              return console.log('linter')
        })}
        </Carousel>

        <HornedModal show={this.state.show} onHide={this.hideCard} selected={this.state.selected} heading={this.state.selected.title} description={this.state.selected.descriptions} img={this.state.selected.imgUrl}/>
        <Footer />
      </>
    )
  }
}

export default App;
