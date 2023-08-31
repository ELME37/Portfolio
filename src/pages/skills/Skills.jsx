import React, { useState, useEffect } from 'react';
import './skills.scss';
import Wheel from '../../components/wheel/Wheel';
import Layout from '../../components/layout/Layout';

export default function Skills () {

    const [skillData, setSkillData] = useState([]);
    const [hoveredSkillTitle, setHoveredSkillTitle] = useState(null);
    const [hoveredSkillType, setHoveredSkillType] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch('/skills.json')
      .then(response => response.json())
      .then(data => {setSkillData(data)})
      .catch(error => console.error(error))
  }, []);

  const handleSkillHover = (title, type) => {
    setHoveredSkillTitle(title);
    setHoveredSkillType(type);
    setIsHovered(true);
  };

  const handleSkillLeave = () => {
    setIsHovered(false);
  };

    return (
        <div className='skills' id='skills'>
          <Layout>
            <div className='skills__info'>
          {isHovered ? (
            <p> <span className='skills__type'>{hoveredSkillType}</span> : <span className='skills__hook'>&lt;</span> {hoveredSkillTitle} <span className='skills__hook'>/&gt;</span></p>
          ) : (
            <h1 className='skills__title'><span className='skills__hook blue'>&lt;</span> Compétences <span className='skills__hook red'>/&gt;</span></h1>
          )}
          </div>
                <div className='wheels'>
                    <div className='wheels__part1'>
                        <Wheel title="Savoir-Faire" skills={skillData.savoirFaire} styles='savoirFaire' onSkillHover={handleSkillHover} onSkillLeave={handleSkillLeave} type='Savoir Faire'/>
                        <Wheel title="Outils" skills={skillData.outils} styles='outils'  onSkillHover={handleSkillHover} onSkillLeave={handleSkillLeave} type='Outils'/>
                        <Wheel title="A développer" skills={skillData.adevelopper} styles='adevelopper'  onSkillHover={handleSkillHover} onSkillLeave={handleSkillLeave} type='A développer'/>
                    </div>
                    <div id='target--projects'></div>
                    <div className="wheels__part2">
                        <Wheel title="Savoir-Etre" skills={skillData.savoirEtre} styles='savoirEtre'  onSkillHover={handleSkillHover} onSkillLeave={handleSkillLeave} type='Savoir Etre'/>
                        <Wheel title="Langages et Frameworks" skills={skillData.langagesetframeworks} styles='langagesetframeworks'  onSkillHover={handleSkillHover} onSkillLeave={handleSkillLeave} type='Langages et Frameworks'/>
                    </div>
                </div>
                <div className='citation'>
                    <svg className='citation__svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>
                    <p className='citation__texte'>"À l'instar d'un athlète aux Jeux Olympiques, nous porterons votre projet vers la médaille d'or."</p>
                    <svg className='citation__svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>
                </div>
          </Layout>
        </div>
    );
};
