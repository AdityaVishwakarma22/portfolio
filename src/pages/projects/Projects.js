import React from 'react'
import './Projects.css'
import p1 from '../../assest/p1.jpg'

const Projects = () => {
  return (
    <section className='projects section' id='project'>
        <div>Projects</div>
        <div className='card-container'>
            <div className='card'>
                <div className='image'>
                    <img src={p1} alt='project'/>
                </div>
                <div>Description</div>
            </div>
            <div className='card'>
                <div className='image'>
                    <img src={p1} alt='project'/>
                </div>
                <div>Description</div>
            </div>
            <div className='card'>
                <div className='image'>
                    <img src={p1} alt='project'/>
                </div>
                <div>Description</div>
            </div>
                
        </div>
    </section>
  )
};

export default Projects;
