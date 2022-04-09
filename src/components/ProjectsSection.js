import React from 'react'
import SectionTitle from './SectionTitle'
import {Swiper} from 'swiper/react';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';

export default function ProjectsSection() {
  return (
    <div>
     <div className="container">
         <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects_allItems">
            <Swiper>
            {projects.map((project, index) => {
              // eslint-disable-next-line array-callback-return
              if (index >= 5) return;
                return (
                  <ProjectItem /> 
                )
            })}
            </Swiper>

        </div>
     </div>
    </div>
  )
}
