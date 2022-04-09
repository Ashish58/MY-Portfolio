import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png'
export default function ProjectItem() {
  return (
    <div>
        <Link to="/projects" className='projectItem_img'>
            <img src={projectImg} alt="project img" />
        </Link>
    </div>
  )
}
