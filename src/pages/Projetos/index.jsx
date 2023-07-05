import Card from "../../components/Card"
import  {projetos, lista}  from "./Projeto.module.css"
import { useEffect, useState } from "react"

function Projetos() {

    const [ repositories, setRepositories ] = useState([]) 

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.github.com/users/adrianovolter/repos')
            const data = await response.json()
            
            const sortedRepositories = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                setRepositories(sortedRepositories)
            
        }
        fetchData()
    }, [])

    return (
        <section className={projetos}>     
            <h2> Repositórios do meu GitHub</h2>
            {
                repositories.length > 0  ? (
                    <section className={lista}>
                    {
                        repositories.map((repo) => {
                            return <Card 
                                key={repo.id} 
                                name={repo.name} 
                                description={repo.description} 
                                html_url={repo.html_url}
                            />
                        })
                    }
                </section>
                ) : (
                    <p>Carregando...</p>
                )
            }
        </section>
    )
}

export default Projetos

