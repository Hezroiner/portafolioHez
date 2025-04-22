import Header from "./header";
import { useAppContext } from './AppContext'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function MyWork() {
  const { theme, language } = useAppContext()

  const projects = [
    {
      number: '01',
      name: 'Sistema Control de Activos - CTP Hojancha',
      vercel: 'https://frontend-ctp-s3ev.vercel.app/',
      github: 'https://github.com/thestward192/Frontend_CTP',
      image: '/assets/control-activos.png',
      description: language === 'es'
        ? 'Sistema de control de activos institucionales con trazabilidad y control por ubicación.'
        : 'Institutional asset tracking system with location-based control and traceability.',
      stack: ['React', 'NestJS', 'TailwindCSS']
    },
    {
      number: '02',
      name: 'Sistema de Gestión Clínica',
      vercel: 'https://proycto2-front-end.vercel.app/',
      github: 'https://github.com/thestward192/Proycto2-Front-end',
      image: '/assets/clinica-preview.png',
      description: language === 'es'
        ? 'Aplicación full-stack para agendar, reprogramar y cancelar citas clínicas.'
        : 'Full-stack clinical app for scheduling, rescheduling and canceling appointments.',
      stack: ['React', '.NET', 'TailwindCSS']
    }
  ]

  return (
    <div className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} min-h-screen`}>
      <Header />

      <main className="px-4 px-md-5 py-5">
        <h1 className="text-4xl font-bold italic text-center mb-5">
          {language === 'es' ? 'Proyectos' : 'Projects'}
        </h1>

        <div className="container px-3 px-md-5 mb-5">
          <div className="row justify-content-center g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-12 col-md-6 d-flex">
                <div
                  className={`card p-4 shadow-sm w-100 transition-transform duration-300 hover:scale-105 cursor-default ${theme === 'dark'
                    ? 'bg-secondary text-white border border-gray-600'
                    : 'bg-white text-dark border border-black'
                    }`}
                >
                  <div className="text-sm fw-semibold mb-2">{project.number}</div>
                  <hr className="mb-3" />
                  <h2 className="h5 fw-bold mb-2">{project.name}</h2>
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver proyecto"
                  >
                    <img
                      src={project.image}
                      alt={`Vista previa de ${project.name}`}
                      className="img-fluid rounded mb-3"
                      style={{ maxHeight: '180px', objectFit: 'cover', width: '100%' }}
                    />
                  </a>


                  <p className="mb-3 text-sm">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className={`btn btn-sm border rounded d-flex align-items-center ${theme === 'dark' ? 'border-light text-light' : 'border-dark text-dark'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-3">
                    <a
                      href={project.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-sm ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
                      title="Ver proyecto"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-sm ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
