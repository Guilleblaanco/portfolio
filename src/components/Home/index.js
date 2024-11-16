import './index.scss'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
    

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ x:100, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 5, delay: 0.4, ease: 'linear'}}
                    >
                        Soy Guillermo Eiroa Blanco
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ x: 150, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 5, delay: 0.7, ease: 'linear'}}
                    >
                        Estudiante de Física / programador
                    </motion.h2>
                </div>
            </div>
        </>
    );

}

export default Home;