import React from "react";
import '../components/Style/projects.css';

function Projects() {

  const projects = [
    {
      title: "GPT-SW3",
      description:
        "Exploring AI and language models with a focus on Nordic language technology.",
      tech: [
        "Python",
        "AI",
        "Machine Learning"
      ],
      github:
        "https://github.com/pixabel/GPT-SW3"
    },

    {
      title: "InnoviaHub",
      description:
        "A full stack application focused on collaboration, innovation and digital solutions.",
      tech: [
        "React",
        "TypeScript",
        ".NET"
      ],
      github:
        "https://github.com/pixabel/InnoviaHub"
    },

    {
      title: "Planify",
      description:
        "A planning and organisation application designed to help users manage tasks efficiently.",
      tech: [
        "React",
        "JavaScript",
        "CSS"
      ],
      github:
        "https://github.com/pixabel/planify"
    },

    {
      title: "InvoiceDemo",
      description:
        "A C# application demonstrating invoice management and data handling.",
      tech: [
        "C#",
        ".NET",
        "SQL"
      ],
      github:
        "https://github.com/pixabel/InvoiceDemo"
    }
  ];


  return (

    <section id="projects">

      <div className="projects-layout">


        <div className="projects-title">

          <h2>
            Projects
          </h2>

        </div>



        <div className="projects-grid">


          {projects.map((project) => (

            <article 
              className="project-card"
              key={project.title}
            >


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>



              <div className="project-tech">

                {project.tech.map((item)=>(
                  <span key={item}>
                    {item}
                  </span>
                ))}

              </div>



              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>


            </article>

          ))}


        </div>


      </div>


    </section>

  );
}


export default Projects;