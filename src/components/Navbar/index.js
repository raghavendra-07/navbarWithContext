// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navBarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'
      const websiteLogoImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <div className={`navbar ${navBarBgClassName}`}>
          <div className="responsive-nav-container">
            <img
              className="website-logo"
              src={websiteLogoImageUrl}
              alt="website logo"
            />
          </div>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link className={`nav-link ${navItemClassName}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link className={`nav-link ${navItemClassName}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            className="theme-button"
            onClick={onToggleTheme}
            type="button"
          >
            <img className="theme-image" src={themeImageUrl} alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
