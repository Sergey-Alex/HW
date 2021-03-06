import {UserType} from "../HW8";

type ActionType  = {
    type: string
    payload: string | number
}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType):  Array<UserType> => {
    switch (action.type) {
        case 'sort': {
                    let copyState = [...state]
                      copyState.sort((a,b) => {
                        if (action.payload === 'up'){
                          return   (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1
                        } else if (action.payload === 'down'){
                            return  (a.name.toLowerCase() < b.name.toLowerCase()) ? 1:-1
                        } else {
                            return 0
                        }
                    })
                    return copyState
        }

        case 'check': {
            return state.filter(v => v.age > 18)
        }
        default: return state
    }
}