const IS_LOADING = 'IS_LOADING'

type ActionType = ReturnType<typeof loadingAC>

export type StateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case IS_LOADING: {
            return {isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: IS_LOADING, isLoading}) as const