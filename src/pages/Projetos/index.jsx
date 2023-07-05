import Card from "../../components/Card"
import  {projetos, lista}  from "./Card.module.css"
import { useEffect, useState } from "react"

function Projetos() {

    const [ repositories, setRepositories ] = useState([]) 

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.github.com/users/adrianovolter/repos')
            const data = await response.json()
            setRepositories(data)
        }
        fetchData()
    }, [])

    return (
        <section className={projetos}>     
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={lista}>
                  
                </section>
                ) : (
                    <p>Carregando...</p>
                )
            }
        </section>
    )
}

export default Projetos

