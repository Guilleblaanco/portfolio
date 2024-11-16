import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { NavLink } from 'react-router-dom';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    
    return(
    <>
        <div className='nav-bar'>
            <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" />
            </NavLink>
            </nav>
            <ul>
            <li>
                <a 
                target='_blank'
                rel='noreferrer' 
                href='https://www.linkedin.com/in/guillermo-eiroa-blanco-1603221a3'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#FFFFFF' />
                </a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer' 
                href='https://github.com/Guilleblaanco'
                >
                    <FontAwesomeIcon icon={faGithub} color='#FFFFFF' />
                </a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer' 
                href='https://www.instagram.com/guilleeblanco_/?hl=es'
                >
                    <FontAwesomeIcon icon={faInstagram} color='#FFFFFF' />
                </a>
            </li>
        </ul>
        </div>
    </>
    );
}

export default Sidebar;