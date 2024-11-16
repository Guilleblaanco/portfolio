import './index.scss'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_qe2rbrv',
                'template_m1k31lt',
                form.current,
                'VVJPSKrJ-3krcuKvT'
            )
            .then(
                () => {
                    window.location.reload(false)
                },
                () => {
                    alert('No se ha enviado el mensaje :(')
                }
            )
      }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <motion.h1>
                        Contactar
                    </motion.h1>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Nombre' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Asunto' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Mensaje' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="ENVIAR" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Guillermo Eiroa Blanco,
                    <br />
                    Zas (Baio)
                    <br/>
                    <span>guilleblanco2015@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[43.15613889, -8.967]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[43.15613889, -8.967]}>
                            <Popup>Aquí vivo yo</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    );
}

export default Contact;