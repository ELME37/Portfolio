import React, { useState, useEffect } from 'react';
import './wheel.scss';
import Skill from '../skill/Skill';

export default function Wheel({ skills, title, type, styles ='', onSkillHover, onSkillLeave }) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 300) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    if (!skills) {
        return null;
    }

    const numberOfSkills = skills.length;

  return (
    <div className={`wheel ${styles} ${isActive ? 'active' : ''}`} style={{ '--numberOfSkills': numberOfSkills }}>
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
