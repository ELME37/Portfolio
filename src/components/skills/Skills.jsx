import React, { useState, useEffect, useMemo } from 'react';
import './skills.scss';
import jo from'./jo.png'
import Wheel from '../../components/wheel/Wheel';
import Layout from '../../components/layout/Layout';
import Modal from '../modal/Modal';
import Circle from '../circle/circle';

export default function Skills() {

  const [skillData, setSkillData] = useState([]);
  const [hoveredSkillTitle, setHoveredSkillTitle] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWheelIndex, setCurrentWheelIndex] = useState(0);
  const [isWheelActive, setIsWheelActive] = useState(false);

  const [wheelData, setWheelData] = useState({
    title: '',
    skills: [],
    type: '',
    styles: '',
  });

  const circlesData = useMemo(() => [
    {
      id: 'savoirFaire',
      title: 'Savoir Faire',
      skills: skillData.savoirFaire,
      styles: 'savoirFaire',
      type: 'savoirFaire',
    },
    {
      id: 'outils',
      title: 'Outils',
      skills: skillData.outils,
      styles: 'outils',
      type: 'outils',
    },
    {
      id: 'adevelopper',
      title: 'A développer',
      skills: skillData.adevelopper,
      styles: 'adevelopper',
      type: 'adevelopper',
    },
    {
      id: 'savoirEtre',
      title: 'Savoir Etre',
      skills: skillData.savoirEtre,
      styles: 'savoirEtre',
      type: 'savoirEtre',
    },
    {
      id: 'langagesetframeworks',
      title: 'Langages et Frameworks',
      skills: skillData.langagesetframeworks,
      styles: 'langagesetframeworks',
      type: 'langagesetframeworks',
    },
  ], [skillData]);

  const handleCircleClick = (id) => {
    const selectedCircle = circlesData.find((circle) => circle.id === id);
    setWheelData(selectedCircle);
    toggleModal();
  };

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
  handleToggleClick()
};

const handleToggleClick = () => {
  setIsWheelActive(false)
  setTimeout(() => {
    setIsWheelActive(true);
  }, 800);
}

const handleNextWheel = () => {
  setCurrentWheelIndex((prevIndex) =>
    prevIndex === circlesData.length - 1 ? 0 : prevIndex + 1
  );
};

const handlePrevWheel = () => {
  setCurrentWheelIndex((prevIndex) =>
    prevIndex === 0 ? circlesData.length - 1 : prevIndex - 1
  );
};

useEffect(() => {
  const selectedCircle = circlesData[currentWheelIndex];
  setWheelData(selectedCircle);
}, [currentWheelIndex, circlesData]);


  useEffect(() => {
    fetch('/skills.json')
      .then(response => response.json())
      .then(data => { setSkillData(data) })
      .catch(error => console.error(error))
  }, []);

  const handleSkillHover = (title, type) => {
    setHoveredSkillTitle(title);
    setIsHovered(true);
  };

  const handleSkillLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='skills' id='skills'>
      <Layout>
        <div className='skills__info'>
            <h2 className='skills__title'><span className='skills__hook blue'>&lt;</span> Compétences <span className='skills__hook red'>/&gt;</span></h2>
        </div>
        <div className='skills__jo'>
          <img src={jo} alt="anneaux jo" />
            <Circle styles='circle--blue' circleStyles='plus--top' title='Savoir Faire' isTop={true} 
            toggleModal={() => handleCircleClick("savoirFaire")}/>,
            <Circle styles='circle--black' circleStyles='plus--top' title='Outils'isTop={true} 
            toggleModal={() => handleCircleClick("outils")}/>
            <Circle styles='circle--red' circleStyles='plus--top' title='A développer' isTop={true}
            toggleModal={() => handleCircleClick("adevelopper")}/>
            <Circle styles='circle--yellow' circleStyles='plus--bottom' title='Savoir Etre' isTop={false}
            toggleModal={() => handleCircleClick("savoirEtre")}/>
            <Circle styles='circle--green' circleStyles='plus--bottom' title='Langages et Frameworks' isTop={false} 
          toggleModal={() => handleCircleClick("langagesetframeworks")}/>
        </div>
        <div className='skills__wheels'>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} toggleModal={toggleModal} styles='modal--skills'>
            <div className='modal__infos'>
              {isHovered ? (
                  <p> <span className='skills__hook blue'>&lt;</span> {hoveredSkillTitle} <span className='skills__hook red'>/&gt;</span></p>
              ) : (
                  <h3 className='modal__title'><span className='skills__hook blue'>&lt;</span> {wheelData.title} <span className='skills__hook red'>/&gt;</span></h3>
              )}
            </div>
            <Wheel
              title={wheelData.title}
              skills={wheelData.skills}
              styles={wheelData.styles}
              onSkillHover={handleSkillHover}
              onSkillLeave={handleSkillLeave}
              type={wheelData.type}
              currentIndex={currentWheelIndex}
              isWheelActive={isWheelActive}
            />
            <div className='modal__button--skills'>
                <button className='arrow--left' onClick = {() =>{handlePrevWheel(); handleToggleClick()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                </button>
                <button className='arrow--right' onClick = {() =>{handleNextWheel(); handleToggleClick()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </button>
              </div>
          </Modal>
        )}
        </div>
        <div className='skills__citation'>
          <svg className='citation__svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" /></svg>
          <p className='citation__texte'>"À l'instar d'un athlète aux Jeux Olympiques, nous porterons votre projet vers la médaille d'or."</p>
          <svg className='citation__svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" /></svg>
        </div>
      </Layout>
    </div>
  );
};
