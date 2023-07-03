import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>adrianoVolter.dev</span>
            <nav>
                <a href="#">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </nav>


        </header>
    )
    }

export default Header