import Card from "../../components/Card"
import  {projetos, lista}  from "./Card.module.css"

function Projetos() {
    return (
        <section className={projetos}>     
            <h2>Projetos</h2>
            <section className={lista}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </section>
    )
}

export default Projetos

