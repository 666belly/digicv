import React from "react";
import {
  FaReact,
  FaGithub,
  FaFigma,
  FaPython,
  FaCode,
  FaDatabase,
  FaMicrochip
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiRaspberrypi,
  SiPostman
} from "react-icons/si";

import "../components/Style/skills.css";


function Skills() {

  const skillGroups = [

    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML", icon: SiHtml5 },
      ]
    },


    {
      title: "Backend",
      skills: [
        { name: "C#", icon: FaCode },
        { name: ".NET", icon: FaCode },
        { name: "ASP.NET", icon: FaCode },
        { name: "SQL", icon: FaDatabase },   
        { name: "Python", icon: FaPython },
        { name: "MicroPython", icon: FaPython }

      ]
    },


    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: FaGithub },
        { name: "Figma", icon: FaFigma },
        { name: "Postman", icon: SiPostman }
      ]
    },


    {
      title: "Other",
      skills: [
        { name: "Raspberry Pi", icon: SiRaspberrypi },
        { name: "IoT", icon: FaMicrochip }
      ]
    }

  ];


  return (

    <section id="skills">


      <div className="skills-layout">


        <div className="skills-title">

          <h2 id="skills-heading">
            Skills
          </h2>

        </div>



        <div className="skills-grid">


          {skillGroups.map((group) => (

            <div 
              className="skill-group" 
              key={group.title}
            >


              <h3>
                {group.title}
              </h3>



              <div className="group-grid">


                {group.skills.map((skill) => {


                  const Icon = skill.icon;


                  return (

                    <div
                      className="skill-card"
                      key={skill.name}
                      title={skill.name}
                    >

                      <span className="skill-icon">
                        <Icon />
                      </span>


                      <span className="skill-name">
                        {skill.name}
                      </span>


                    </div>

                  );

                })}


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default Skills;