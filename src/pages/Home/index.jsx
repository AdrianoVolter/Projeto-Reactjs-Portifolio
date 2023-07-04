import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <section className={styles.home}>
        <div className={styles.apresentacao}>
            <p>Olá,  sou <br />
                <span>Adriano Volter</span> <br />
                Dev Full Stack
            </p>
            <Link 
                to = '/sobre'
                className={`${styles.btn} ${styles.btn_blue }`}>
                Saiba mais sobre mim
            </Link>
        </div>
        <figure>
            <img 
                className={styles.img_home}
                src="public/undraw_programming_re_kg9v.svg" 
                alt="Imagem Home" 
                />
        </figure>
    </section>
  )
}

export default Home
