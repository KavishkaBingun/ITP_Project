import React, { Component } from 'react';
import Card from './cardsUI';
import './pagereservation.css';
import lunch from '../../images/lunch.jpg';
import dinner from './../../images/dinner.jpg';
import birthday from './../../images/birthday.jpg';
import anniversary from './../../images/anniversary.jpg';
import Private from './../../images/private.jpg';
import wedding from './../../images/wedding.jpg';
import Header from "../../components/Header";
import Footer from '../../components/Footer';

class Cards extends Component {
  render() {
    return (
        <div>
            <Header/>
      <div className="container" id='container'>
        
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-center">Tables for Your Special Events</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4" id='col-md-4'>
            <Card
              imgsrc={lunch}
              title="Lunch"
              text="4 Person per table"
              text1="Price per table - 500/="
              text2="Price for decorations - 1000/="
            />
          </div>

          <div className="col-md-4" id='col-md-4'>
            <Card
              imgsrc={dinner}
              title="Dinner"
              text="4 person per table"
              text1="Price per table - 600/="
              text2="Price for decorations - 1000/="
            />
          </div>

          <div className="col-md-4" id='col-md-4'>
            <Card
              imgsrc={Private}
              title="Private"
              text="2 Person per table"
              text1="Price per table - 1000/="
              text2="Price for special decorations - 5000/="
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h4 className="text-center">Hall for Your Special Events</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4" id='col-md-4'>
            <Card
              imgsrc={birthday}
              title="Birthday Party"
              text="8 Person per table"
              text1="Price per table - 2000/="
              text2="Price for decorations - 5000/="
            />
          </div>

          <div className="col-md-4" id='col-md-4'>
            <Card
              imgsrc={anniversary}
              title="Anniversary Party"
              text="8 Person per table"
              text1="Price per table - 2000/="
              text2="Price for decorations - 5000/="
            />
          </div>

          <div className="col-md-4" id='col-md-4'>
            <Card
              imgsrc={wedding}
              title="Wedding"
              text="10 Person per table"
              text1="Price per table - 10000/="
              text2="Price for decorations - 50000/="
            />
          </div>
        </div>
        
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Cards;
