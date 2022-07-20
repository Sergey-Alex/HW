const CHANGE_COLOR = 'CHANGE_COLOR'

export type ThemeType = {
    themeColor: string
}

const initState = {
    themeColor: 'white'
};

type ActionType = ReturnType<typeof changeThemeC>

export const themeReducer = (state:ThemeType = initState, action: ActionType): ThemeType => {
    switch (action.type) {
        case CHANGE_COLOR: {
            return {...state, themeColor: action.themeColor};
        }
        default: return state;
    }
};

export const changeThemeC = (themeColor: string) => ({type: CHANGE_COLOR, themeColor} as const) ;
