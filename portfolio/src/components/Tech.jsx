import React from 'react'
import { styles } from '../style'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { css, docker, figma, git, html, javascript, mongodb, nodejs, reactjs, redux, tailwind, threejs, typescript } from '../assets/assets'


const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        technologies.map((Technology)=>{
          return(
            <div className="w-28 h-28 " key={Technology.name}>
              <BallCanvas icon={Technology.icon}/>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default SectionWrapper(Tech, " ")