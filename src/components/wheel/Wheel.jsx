import React, { useState, useEffect } from 'react';
import './wheel.scss';
import Skill from '../skill/Skill';

export default function Wheel({ skills, title, type, styles ='', onSkillHover, onSkillLeave }) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
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

    const handleToggleClick = () => {
      setIsActive(!isActive);
    };

    const numberOfSkills = skills.length;

  return (
    <div className={`wheel ${styles} ${isActive ? 'active' : ''}`} style={{ '--numberOfSkills': numberOfSkills }}>
      <h3 className='wheel__title'>{title}</h3>
      <div className="toogle" onClick={handleToggleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
      </div>
        
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
