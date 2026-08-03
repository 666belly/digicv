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
        { name: "Bootstrap", icon: SiBootstrap }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "C#", icon: FaCode },
        { name: ".NET", icon: FaCode },
        { name: "ASP.NET", icon: FaCode },
        { name: "SQL", icon: FaDatabase }
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
        { name: "Python", icon: FaPython },
        { name: "MicroPython", icon: FaPython },
        { name: "IoT", icon: FaMicrochip }
      ]
    }
  ];

  return (
    <section id="skills" aria-labelledby="skills-heading" className="skills-compact-root">
      <div className="skills-compact-inner">
        <header className="skills-compact-header">
          <h2 id="skills-heading">Skills</h2>
        </header>

        <div className="skills-compact-grid" role="list">
          {skillGroups.map((group) => (
            <div className="skills-compact-group" key={group.title}>
              <h3 className="group-title">{group.title}</h3>
              <div className="group-grid" role="list">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <button
                      key={skill.name}
                      className="skill-card"
                      tabIndex={0}
                      title={skill.name}
                      aria-label={skill.name}
                      onClick={() => {}}
                    >
                      <span className="skill-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </button>
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