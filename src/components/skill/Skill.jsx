import React from 'react';
import './skill.scss';

export default function Skill({ id, title, image, style, onSkillHover, onSkillLeave, type, styles='' }) {
    const handleSkillHover = () => {
        if (onSkillHover) {
            onSkillHover(title, type);
        }
      };

      function leaveSkill() {
        if (onSkillLeave) {
          onSkillLeave();
        }
      }

    return (
        <div className={`skill ${styles}`} style={style} title={title} onMouseEnter={handleSkillHover} onMouseLeave={leaveSkill}>
            <img className='skill__image' src={image} alt={title} />
            <span className='skill__title'>{title}</span>
        </div>
    );
}
