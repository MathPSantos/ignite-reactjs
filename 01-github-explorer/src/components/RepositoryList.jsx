import { useEffect, useState } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])
  
  useEffect(() => {
    fetch('https://api.github.com/users/MathPSantos/repos')
      .then(res => res.json())
      .then(data => setRepositories(data))
      .catch(error => console.log(error))
  }, [])

  return(
    <section className="repository-list">
      <h1>Lista de repositrórios</h1>

      <ul>
        { repositories.map((e, i) => <RepositoryItem key={i} repository={e} />) }
      </ul>
    </section>
  )
}