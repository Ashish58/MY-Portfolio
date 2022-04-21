import { v4 as uuidv4 } from 'uuid';
import textutils from '../images/textutils.jpg';
import quoteImg from '../images/quote.png';
import hearticon from '../images/heart.jpg';
import AshishImg from '../images/Ashish.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Text-Utils',
    desc:
      'It is an utility website made using react which counts the number of characters and words, converts the word into upper or lower case.',
    img: textutils,
  },
  {
    id: uuidv4(),
    name: "Ashish Portfolio",
    desc:'The portfolio is made using ReactJs.',
    img: AshishImg,
  },
  
  {
    id: uuidv4(),
    name: 'Heart_Disease_Prediction',
    desc:'A machine learning model to classify if the patient is at risk of heart attack or not based on the given data of a patient.',
    img: hearticon,
  },
  
  {
    id: uuidv4(),
    name: 'My-Quote',
    desc:'A simple React.js app that displays and shares famous quotes',
    img: quoteImg,
  },
];

export default projects;
