import axios from "axios"
import { Dispatch } from "react"
import { Action } from "../action"
import { ActionType } from "../action-type"

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({type: ActionType.SEARCH_REPOSITORIES})

        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {params: {text: term}})
            dispatch({type: ActionType.SEARCH_REPOSITORIES_SUCCESS, payload: data.objects.map((result: any)=> result.package.name)})
        } catch (error) {
            dispatch({type: ActionType.SEARCH_REPOSITORIES_ERROR, payload: (error as any).message})
        }
    }
}
