// Wheel.js
import React from 'react';
import './wheel.scss';
import Skill from '../skill/Skill';

export default function Wheel({ skills, title, type, styles ='', onSkillHover, onSkillLeave }) {

    if (!skills) {
        return null;
    }

  const totalSkills = skills.length;
  const angleStep = 360 / totalSkills;

  return (
    <div className= {`wheel__container ${styles}`}>
      <h3 className='wheel__title'>{title}</h3>
      <div className='wheel'>
        {skills.map((skill, index) => {
          const rotation = angleStep * index;
          return (
            <Skill 
              key={skill.id}
              title={skill.title} 
              image={skill.image} 
              style={{ transform: `rotate(${rotation}deg) translateY(-120px)` }} 
              onSkillHover={onSkillHover}
              onSkillLeave={onSkillLeave}
              type={type}
              styles='skill--wheel'
            />
          );
        })}
      </div>
    </div>
  );
}
