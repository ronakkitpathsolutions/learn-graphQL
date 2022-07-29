import { FAVOURITE_USER, FAVOURITE_USERS } from "../../utils/constant";

const initialState = {
    favoutite_users: {},
    current_view_user: false
}

export const usersMetaData = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case FAVOURITE_USERS:
            return {
                ...state, favoutite_users: payload
            }
        case FAVOURITE_USER:
            return {
                ...state, current_view_user: payload
            }
        default: return state
    }
}