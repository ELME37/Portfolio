import React from 'react';
import './wheel.scss';
import Skill from '../skill/Skill';

export default function Wheel({ skills, title, type, styles ='', onSkillHover, onSkillLeave, isWheelActive }) {

    if (!skills) {
        return null;
    }

    const numberOfSkills = skills.length;

  return (
    <div className={`wheel ${styles} ${isWheelActive ? 'active' : 'inactive'}`} style={{ '--numberOfSkills': numberOfSkills }}>
      <h3 className='wheel__title'>{title}</h3>
        
        {skills.map((skill, index) => {
          return (
            <Skill 
              key={skill.id}
              title={skill.title} 
              image={skill.image} 
              style={{ "--i":skill.id }} 
              onSkillHover={onSkillHover}
              onSkillLeave={onSkillLeave}
              type={type}
              styles='skill--wheel'
            />
          );
        })}

    </div>
  );
}
