import React from 'react';
import './skill.scss';

export default function Skill({ id, title, image, style, onSkillHover, onSkillLeave, type }) {
    const handleSkillHover = () => {
        if (onSkillHover) {
            onSkillHover(title, type);; // Appeler la fonction de gestion du survol avec le titre du skill
        }
      };

      function leaveSkill() {
        onSkillLeave();
      }

    return (
        <div className="skill" style={style} title={title} onMouseEnter={handleSkillHover} onMouseLeave={leaveSkill}>
            <img className='skill__image' src={image} alt={title} />
            <span className='skill__title'>{title}</span>
        </div>
    );
}
