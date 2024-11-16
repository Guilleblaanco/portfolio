import './index.scss'
import { motion } from 'framer-motion';

const About = () => {
    
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <motion.h1
                        initial={{ opacity: 0, y:-100 }}
                        animate={{ y:0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 10, delay: -0.4, ease: 'linear'}}
                    >
                        Sobre mí
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y:-100 }}
                        animate={{ y:0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 10, delay: -0.6, ease: 'linear'}}
                    >
                        Hola, soy Guillermo, estudiante de Física y apasionado por la programación y la tecnología. Tengo experiencia en C++, Python, JavaScript, React, y Java, y disfruto aplicando mis habilidades en proyectos creativos, ya sea en el ámbito de la programación, la electrónica o cualquier cosa que me permita aprender y mejorar. Además, soy un entusiasta de los deportes y la lectura, siempre en busca de equilibrio entre la dedicación a mis proyectos y mis aficiones. Mi objetivo es seguir desarrollando mis conocimientos y habilidades, explorando nuevas áreas y enfrentando desafíos interesantes.
                    </motion.p>
                </div>
            </div>
        </>
    );
}

export default About;