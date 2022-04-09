import React from "react";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/about-sec-img.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
padding:10rem 0;
.container{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    text-align:left;
}
.aboutSection_left,
.aboutSection_right{
    flex:1;
}
.section-title{
    text-align:left;
   
}
.para{
    margin-top:2rem;
    margin-left:0;
}
.aboutSection_button{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:2rem;
    margin-top:2rem;
}
@media only screen and(max-width:950px){
    .aboutSection_left{
        flex:4;
    }
    .aboutSection_right{
        flex:3;
    }
}
@media only screen and (max-width:768px){
.container{
    flex-direction:column;
    text-align:center;
}
.aboutSection_left,
.aboutSection_right{
    width:100%;
}
.aboutSection_right{
    margin-top:3rem;
}
.section-title{
    text-align:center;
}
.para{
    margin:0 auto;
    margin-top:2rem;
}
.aboutSection_button{
    flex-direction:column;
    gap:0;
    .button-wrapper,
    a{
        width:100%;
        text-align:center;
    }
    }
}
`;
export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle
            className="section-title"
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a full-stack web developer who loves to design and develop
            beautiful websites.
            I have been coding for over a year and enjoying
            every part of my journey.
          </PText>
          <div className="aboutSection_button">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection_right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
