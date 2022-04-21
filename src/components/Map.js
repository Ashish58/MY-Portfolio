import React from 'react';
import Styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles=Styled.div`
background:url(${MapImg}) no-repeat center/cover;
min-height:400px;
  .container{
    position:relative;
    min-height:500px;
  }
  .map_card{
    position:absolute;
    right:36%;
    bottom:15%;
    padding:2rem;
    background:var(--deep-dark);
    max-width:300px;
    width:100%;
    border-radius:12px;
  }
  .map_card_heading{
    font-size:3rem;
    margin-bottom:1rem;
  }

  .map_card_Link{
    display:inline-block;
    font-size:1.6rem;
    margin-top:3rem;
    text-decoration:underline;
  }
  @media only screen and (max-width: 920px) {
    background-position: 80% center;
    .map_card{
      right:32%;
      bottom:15%;
      width:67%;
      border-radius:12px;
  }
  }
  @media only screen and (max-width: 414px) {
    background-position: 50% center;
      .map_card{
        right:15%;
        bottom:9%;
        width:67%;
        border-radius:12px;
    }
    .container{
      min-height:400px;
  }
`;

export default function Maps() {
  return (
    <MapStyles>
        <div className="container">
          <div className="map_card">
            <h3 className="map_card_heading">
            Here is me
            </h3>
            <PText>Gaighat,Udayapur,Nepal</PText>
            <a href='https://www.google.com/maps/@26.7872243,86.6359848,14.77z'
             target="_blank"
             rel='noreferrer'
             className='map_card_Link'>
              Open in Google Map
            </a>
          </div>
        </div>
    </MapStyles>
  )
}
