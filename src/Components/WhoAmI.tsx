import { GrMysql } from 'react-icons/gr'
import { useAppContext } from './AppContext'
import Footer from './Footer'
import Header from './header'

// Íconos
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma,
  FaGithub,
  FaNodeJs,
} from 'react-icons/fa'
import { SiTailwindcss, SiReacthookform, SiReactquery, SiNestjs } from 'react-icons/si'

export default function WhoAmI() {
  const { language, theme } = useAppContext()

  const content = {
    es: {
      title: '¿Quién soy?',
      text1: 'Mi nombre es Hezron Araya Castañeda. Soy estudiante de Ingeniería en Sistemas en la Universidad Nacional de Costa Rica, sede Nicoya. Tengo 22 años y estoy cursando mi cuarto año de carrera.Me apasiona el desarrollo backend, manejo frontend y bases de datos, y también tengo conocimientos en inteligencia artificial. Actualmente estudio inglés. Soy de Costa Rica y aspiro a mejorar constantemente, dedicarme al diseño de aplicaciones, trabajando con paciencia y fomentando un buen trabajo en equipo.',
    },
    en: {
      title: 'Who am I?',
      text1: 'My name is Hezron Araya Castañeda. I am a Computer Science student at Universidad Nacional of Costa Rica, Nicoya campus. I am 22 years old and currently in my fourth year of studies. I’m passionate about backend development, I handle frontend and databases, I also have knowledge in artificial intelligence. I am currently studying English. I’m from Costa Rica and I strive to improve constantly, focusing on application design, working patiently, and encouraging strong teamwork.',
    }
  }

  const t = content[language]

  return (
    <>
      <Header />

      <div className="container py-5">
        {/* Título a la izquierda + texto a la derecha */}
        <div className="row align-items-center justify-content-between mb-5">
          <div className="col-md-4 text-md-start text-center mb-4 mb-md-0">
            <h1
              className="display-3 fst-italic fw-bold transition-transform duration-300 hover:scale-105 cursor-default"
            >
              {t.title}
            </h1>
          </div>

          <div className="col-md-8">
            <div
              className={`card p-5 transition-transform duration-300 hover:scale-105 cursor-default ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-light text-dark'
                }`}
              style={theme === 'light' ? { backgroundColor: '#f0f0f0' } : {}}
            >

              <div className="card-body fs-5">
              <p className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>{t.text1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Habilidades + Idiomas */}
        <div className={`card p-4 shadow-sm mb-5 transition-transform duration-300 hover:scale-105 cursor-default ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
          <h2 className="fw-bold mb-3">
            {language === 'es' ? 'Habilidades y Herramientas' : 'Skills & Tools'}
          </h2>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <FaHtml5 size={20} /> HTML
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <FaCss3Alt size={20} /> CSS
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <FaJs size={20} /> JavaScript
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <FaReact size={20} /> React
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <SiTailwindcss size={20} /> TailwindCSS
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <SiReactquery size={20} /> React Query
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <SiReacthookform size={20} /> React Hook Form
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <FaFigma size={20} /> Figma
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <SiNestjs size={20} /> NestJS
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <FaNodeJs size={20} /> Node.js
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <GrMysql size={20} /> MySQL
            </span>
            <span className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} d-flex align-items-center gap-2`}>
              <FaGithub size={20} /> GitHub
            </span>
          </div>

          <h3 className="fw-bold mb-2">
            {language === 'es' ? 'Idiomas' : 'Languages'}
          </h3>
          <ul className="mb-0">
            <li>
              {language === 'es' ? 'Español (nativo)' : 'Spanish (native)'}
            </li>
            <li>
              {language === 'es'
                ? 'Inglés (en proceso de aprendizaje)'
                : 'English (learning)'}
            </li>
          </ul>

        </div>
      </div>

      {/* Experiencia Laboral + Educación en dos columnas bien centradas */}
      <div className="container px-3 px-md-5 mb-5">
        <div className="row justify-content-center g-4 ">
          {/* Experiencia Laboral */}
          <div className="col-12 col-md-6 transition-transform duration-300 hover:scale-105 cursor-default">
            <div className={`card h-100 p-4 shadow-sm ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
              <h2 className="fw-bold mb-3">
                {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
              </h2>
              <p className="mb-0">
                {language === 'es' ? (
                  <>
                    Actualmente desarrollo un sistema web de <strong>Control de Activos Institucionales</strong>, orientado a mejorar la administración y trazabilidad de recursos físicos en entornos educativos. El proyecto incluye backend robusto con NestJS, base de datos relacional y un frontend dinámico en React. Este sistema está en uso activo y en constante evolución.
                  </>
                ) : (
                  <>
                    I’m currently developing a web-based <strong>Institutional Asset Management System</strong> designed to improve the tracking and administration of physical resources within educational environments. The project includes a robust NestJS backend, relational database integration, and a dynamic frontend built with React. The system is actively used and constantly evolving.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Educación */}
          <div className="col-12 col-md-6">
            <div className={`card h-100 p-4 shadow-sm transition-transform duration-300 hover:scale-105 cursor-default ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
              <h2 className="fw-bold mb-3 ">
                {language === 'es' ? 'Educación' : 'Education'}
              </h2>
              <p className="mb-0">
                {language === 'es' ? (
                  <>
                    Poseo un Diplomado en Programación de Aplicaciones Informáticas otorgado por la Universidad Nacional de Costa Rica. Actualmente me encuentro cursando el cuarto año de la carrera de Ingeniería en Sistemas de Información en la misma universidad, con perspectivas de obtener próximamente el Bachillerato en Ingeniería.
                  </>
                ) : (
                  <>
                    I hold a Diploma in Application Programming from the National University of Costa Rica. I’m currently in the fourth year of the Information Systems Engineering program at the same institution, with the prospect of earning my Bachelor's degree in the near future.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
