import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'


function Home () {
  return (
    <>
        <Header/>
        <section className='container'>
            <div className='apresentacao'>
            <p>Olá,  sou <br />
                <span>Adriano Volter</span> <br />
                Dev Full Stack
            </p>
            <Link 
                to = '/sobre'
                className='btn btn-blue'>
                Saiba mais sobre mim
            </Link>
            </div>
            <figure>
            <img 
                className='img-home'
                src="public/undraw_programming_re_kg9v.svg" 
                alt="Imagem Home" 
                />
            </figure>
        </section>
        <Footer/>
    </>
  )
}

export default Home