import React, { useState, useEffect } from 'react';
import './projects.scss';
import Layout from '../layout/Layout';
import Card from '../card/Card';

export default function Projects() {
    const [projectsData, setProjectsData] = useState([]);
  
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {setProjectsData(data)})
      .catch(error => console.error(error))
  }, []);

  return (
    <div className="projects" id="projects">
      <Layout>
        <div className="projects__info">
          <h2 className="projects__title">
            <span className="skills__hook blue">&lt;</span> Projets{' '}
            <span className="skills__hook red">/&gt;</span>
          </h2>
        </div>
        <div className="gallery">
            {projectsData.map(project => (
                <Card key={project.id} id={project.id} image={project.image} title={project.title} job={project.job} />
            ))}
        </div>
        <div className='projects__citation'>
            <p>Ensemble, faisons que votre idée devienne un projet concret !</p>
        </div>
      </Layout>
    </div>
  );
}