import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import CV from '../assets/data/CV.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }
    .about_info_heading {
      font-size: 3rem;
    }
  }
  a{
    margin-top: 2rem;
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: black;
    }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about_subheading">
                Hi, I am <span>Ashish Anand</span>
              </p>
              <h2 className="about_heading">A Full-Stack Web Developer</h2>
              <div className="about_info">
                <PText>
                  I am from Udaypur,Nepal. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a href={CV} download>
                  Download CV
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about_info_items">
            <div className="about_info_item">
              <h1 className="about_info_heading">Education</h1>

              <AboutInfoItem
                title="School:"
                items={['Udayasi English Higher Secondary School']}
              />
              <AboutInfoItem
                title="College:"
                items={['Capital College & Research Center']}
              />
              <AboutInfoItem
                title="University:"
                items={['Kalinga Institute of Industrial Technology']}
              />
            </div>
            <div className="about_info_item">
              <h1 className="about_info_heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd:"
                items={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd:"
                items={['Node', 'Express', 'MongoDB']}
              />
              <AboutInfoItem
                title="Design:"
                items={['Photoshop']}
              />
            </div>
            <div className="about_info_item">
              <h1 className="about_info_heading">Experiences</h1>

              <AboutInfoItem
                title="Intern:"
                items={['Internship at FinTech Company']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
