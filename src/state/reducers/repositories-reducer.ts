import { Action } from '../action'
import { ActionType } from '../action-type'

interface RepositoriesState {
    data: string[]
    error: string | null
    loading: boolean
}

const initialState: RepositoriesState = {
    data: [],
    loading: false,
    error: null,
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: true, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: true, error: action.payload, data: [] }
        default:
            return state
    }
}

export default reducer
