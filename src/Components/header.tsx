import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from './AppContext'

export default function Header() {
  const { theme, toggleTheme, language, toggleLanguage } = useAppContext()
  const loc = useLocation()

  const linkClass = (path: string) =>
    `nav-link px-2 ${loc.pathname === path
      ? 'fw-bold text-warning'
      : theme === 'dark' ? 'text-white' : 'text-dark'}`

  return (
    
    <header className={`d-flex justify-content-between align-items-center px-4 py-2 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-light text-dark'}`}>
      <div className="d-flex align-items-center">
        <button onClick={toggleTheme} className={`btn btn-sm me-2 ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}>
          <i className={`bi ${theme === 'dark' ? 'bi-moon-fill' : 'bi-sun-fill'}`}></i>
        </button>
        <button onClick={toggleLanguage} className={`btn btn-sm me-4 ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}>
          <i className="bi bi-globe"></i>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/who-i-am" className={linkClass('/who-i-am')}>
              {language === 'es' ? 'Quién soy' : 'Who I Am'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/my-work" className={linkClass('/my-work')}>
              {language === 'es' ? 'Mi Trabajo' : 'My Work'}
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/curriculum" className={linkClass('/curriculum')}>
              Curriculum
            </Link>
          </li> */}
        </ul>
      </div>
      <button className={`btn btn-sm ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}>
        <i className="bi bi-person-circle fs-4"></i>
      </button>
    </header>
  )
}
