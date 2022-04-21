import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import {MdDesktopMac,MdCode,MdPhonelinkSetup} from 'react-icons/md';

const ServicesItemStyles=styled.div`
padding:10rem 0;
.services_allItems{
  display:flex;
  gap:10rem;
  justify-content:space-between;
  margin-top:5rem;
}
@media only screen and (max-width:768px){
  .services_allItems{
    flex-direction:column;
    max-width:350px;
    margin:0 auto;
    margin-top:5rem;
    gap:5rem;
  }
}
`;

export default function Services() {
  return (
    <ServicesItemStyles>
      <div className="container">
      <SectionTitle heading="Services" 
        subheading="What i will do for you" />
        <div className="services_allItems">
            <ServicesSectionItem 
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I do ui/ux design for the website to get a unique look."
            />
            <ServicesSectionItem
            icon={<MdCode/>}
            title="Web Development"
            desc="I aslo develop the webisite.I create high performance website with blazing fast speed."
             />

            <ServicesSectionItem 
            icon={<MdPhonelinkSetup/>}
            title="App Dev"
            desc="I develop mobile application.I create mobile app with ete catching ui"
            />
      </div>
      </div>
    </ServicesItemStyles>
  )
}
