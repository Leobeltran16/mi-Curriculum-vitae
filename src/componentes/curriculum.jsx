import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import "../index.css";
import miFoto from "../assets/foto-cv.jpg";
import cartaImg from "../assets/micurriculum.jpg"

function Curriculum() {
  return (
    <div className="cv-grid">
      <aside className="cv-left">
        <div className="photo">
          <img
            src={miFoto}
            alt="Foto CV"
          />
        </div>

        <section className="card">
          <h3>Sobre mí</h3>
          <p>
              Desarrollador Web Junior con más de 10 años de experiencia previa en soporte técnico 
              y mantenimiento de sistemas. Actualmente formado como Full Stack Developer con 
              conocimientos en HTML, CSS, JavaScript, React, Node.js y MongoDB. Capaz de 
              ofrecer soluciones completas a proyectos web, con orientación a la resolución de 
              problemas y atención al detalle. En búsqueda de oportunidades remotas para colaborar 
              en el desarrollo de aplicaciones modernas y funcionales. 
          </p>
        </section>

        <section className="card">
          <h3>Enlaces</h3>
          <ul className="links">
            <li>
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/leonardo-beltran-5b6117375/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <FaExternalLinkAlt className="ext" />
              </a>
            </li>
            <li>
              <FaGithub />
              <a
                href="https://github.com/Leobeltran16"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <FaExternalLinkAlt className="ext" />
              </a>
            </li>
            <li>
              <FaExternalLinkAlt />
              <a
                href="https://mi-app-react-git-master-mi-app-reacts-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Proyecto online <FaExternalLinkAlt className="ext" />
              </a>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3>Idiomas</h3>
          <p>Spanish • English</p>
        </section>

        <section className="card">
          <h3>Otros datos</h3>
          <p>Libreta de conducir categoría A</p>
          <p>Disponibilidad para viajar</p>
          <p>Carnet de salud vigente</p>
        </section>

      </aside>


      <main className="cv-right">
        <header className="hero">
          <div className="hero-name">
            <h1>
              LEONARDO
              <br />
              BELTRAN TARRECH
            </h1>
            <p className="hero-tags">
              DESARROLLADOR WEB FULL STACK JUNIOR | REACT | NODE.JS | MONGODB | SOPORTE TÉCNICO IT
            </p>
          </div>

          <ul className="hero-contact">
            <li>
              <FaMapMarkerAlt />
              <span>Santa Rosa, Canelones, Uruguay · 91400</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>099518358</span>
            </li>
            <li>
              <FaEnvelope />
              <span>leonardo.beltran.tarrech@gmail.com</span>
            </li>
          </ul>
        </header>

        {/* Experiencia */}
        <section className="block">
          <h2><FaBriefcase /> Experiencia</h2>

          <div className="item">
            <div className="item-head">
              <strong>Empleado — NURITUR S.A.</strong>
              <span>Montevideo · 2022 — Actualidad</span>
            </div>
            <ul>
              <li>Soporte técnico interno y mantenimiento de equipos.</li>
              <li>Asistencia a usuarios y tareas informáticas generales.</li>
            </ul>
          </div>

          <div className="item">
            <div className="item-head">
              <strong>Ayudante de Programador Web — GUSSI LIBROS</strong>
              <span>Montevideo · 2012 — 2022</span>
            </div>
            <ul>
              <li>Mantenimiento de página web y soporte a usuarios.</li>
              <li>Reparación de PC, respaldos y migración de datos.</li>
              <li>Resolución de problemas con archivos corruptos, restauración y traslado de datos.</li>
              <li>Gestión básica de servidores y copias de seguridad.</li>
            </ul>
          </div>
        </section>

        <section className="block">
          <h2><FaGraduationCap /> Educación</h2>

          <div className="item">
            <div className="item-head">
              <strong>Escuela Técnica Juan P. Tapié</strong>
              <span>2017 — Bachiller Técnico en Informática</span>
            </div>
          </div>

          <div className="item">
            <div className="item-head">
              <strong>Escuela Técnica Juan P. Tapié</strong>
              <span>2013 — Operario Clasificado en Reparación de PC</span>
            </div>
          </div>

          <div className="item">
            <div className="item-head">
              <strong>Formación Online en Desarrollo Web</strong>
              <span>En curso — HTML, CSS, JS, React, Node, MongoDB</span>
            </div>
          </div>
        </section>

        <section className="block">
          <h2>Habilidades</h2>
          <ul className="skills">
            <li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li>
            <li>Node.js</li><li>Express</li><li>MongoDB</li><li>Git</li>
            <li>GitHub</li><li>Vite</li><li>VS Code</li><li>Photoshop</li>
            <li>Vercel</li><li>Render</li><li>Redes</li><li>Soporte Técnico</li>
          </ul>
        </section>

        <section className="block carta-img">
          <img src={cartaImg} alt="Carta de Recomendación" />
        </section>
      </main>
    </div>
  );
}

export default Curriculum;
