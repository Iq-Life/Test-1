type ActionType = {
    type: string
}
export type StateType ={
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const copyState = {...state,
               collapsed: !state.collapsed}
            console.log(copyState)
            return copyState;
        default:
            throw new Error("Bad action type")
    }
}
export default reducer;