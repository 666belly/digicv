import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import '../components/Style/contact.css';

function Contact() {

  return (

    <section id="contact">

      <div className="contact-layout">


        <div className="contact-title">

          <h2>
            Contact
          </h2>

        </div>



        <div className="contact-content">


          <p className="contact-text">
            Interested in working together?
            <br />
            Feel free to reach out!
          </p>



          <div className="contact-links">


            <a href="mailto:isabelfeltman99@gmail.com">

              <FaEnvelope />

              <span>
                isabelfeltman99@gmail.com
              </span>

            </a>



            <a href="tel:+46763093076">

              <FaPhone />

              <span>
                +46 763 093 076
              </span>

            </a>



            <a 
              href="https://github.com/pixabel"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaGithub />

              <span>
                GitHub
              </span>

            </a>



            <a 
              href="https://linkedin.com/in/isabeldemirel"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaLinkedin />

              <span>
                LinkedIn
              </span>

            </a>


          </div>


        </div>


      </div>


    </section>

  );
}


export default Contact;