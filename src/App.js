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
import Form from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: {},
        show: false,
        searchFor: 0,
        display: data,
    }
  }

    showCard = (key) => {
      this.setState({show: true});

      const chosen = data.filter((obj) => {
        return obj.num === key;
        }
      )

      this.setState({selected: chosen[0]});
    }

    hideCard = () =>{
      this.setState({show: false})
    }

    searchFilter = (event) => {
      
      const phrase = event.target.value;
    
       const search = data.filter((animal) => {
        return animal.horns.includes(phrase);
      })

      if(phrase === 'all'){
        this.setState({display: data})
      }else{
        this.setState({display: search})
      }

    }

  render(){
    return (
      <>
      <Header></Header>

        <Form>
          <Form.Group class='test' controlId='drop'>

            <Form.Select onChange={this.searchFilter}>
              <option value='all'>Filter By number of horns...</option>
              <option value='4'>4 horns</option>
              <option value='2'>2 horns</option>
              <option value='1'>1 horn</option>
            </Form.Select>

          </Form.Group>
        </Form>

        <Carousel>
            {this.state.display.map((animal, index) => {
            
                let newCartoon = <HornedBeast src={animal.imgUrl} title={animal.title} likes={animal.likes} showCard={this.showCard} id={animal.num} />;

                return <Carousel.Item key={index} data-bs-interval="false" data-pause="hover">{newCartoon}</Carousel.Item>;
            })}
        </Carousel>


        <HornedModal show={this.state.show} onHide={this.hideCard} selected={this.state.selected} heading={this.state.selected.title} description={this.state.selected.descriptions} img={this.state.selected.imgUrl}/>
        <Footer />
      </>
    )
  }
}

export default App;
