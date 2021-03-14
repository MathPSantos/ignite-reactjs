interface IRepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem({repository}: IRepositoryItemProps) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Default desc'}</p>

      <a href={repository?.html_url}>
        Acessar repositórios
      </a>
    </li>
  )
}