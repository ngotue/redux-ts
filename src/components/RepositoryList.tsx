import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAction } from '../hooks/useAction'
import { actionCreators, RootState } from '../state'

const RepositoryList: React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useAction()
    const { data, error, loading } = useSelector(
        (state: RootState) => state.repositories
    )
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchRepositories(term)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            <ul>
                {data.map((repoName) => (
                    <li>{repoName}</li>
                ))}
            </ul>
        </div>
    )
}
export default RepositoryList
