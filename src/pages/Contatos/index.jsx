
import styles from "./Contatos.module.css"
import { GoMail } from "react-icons/go"
import {BsInstagram, BsWhatsapp,BsGithub, BsLinkedin } from "react-icons/bs"

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>
            <div className={styles.icones}>

            <a 
                href="mailto:adriano.j.volter@hotmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <GoMail className={styles.icone}/>
            </a>
            
            <a
                href="https://www.instagram.com/adriano.volter"
                target="_blank"
                rel="noopener noreferrer"
                >
            <BsInstagram className={styles.icone}/>
            </a>

            <a
                href="https://api.whatsapp.com/send?phone=5548998524934"
                target="_blank"
                rel="noopener noreferrer"
                >
            <BsWhatsapp className={styles.icone}/>
            </a>
            <a
                href="https://github.com/AdrianoVolter"
                target="_blank"
                rel="noopener noreferrer"
                >
            <BsGithub className={styles.icone}/>
            </a>
            <a
                href="https://www.linkedin.com/in/adrianovolter/"
                target="_blank"
                rel="noopener noreferrer"
                >
            <BsLinkedin className={styles.icone}/>
            </a>

            </div>
        </section>
    )
}

export default Contatos
