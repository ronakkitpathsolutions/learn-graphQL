import { FAVOURITE_POSTS, FAVOURITE_USER, FAVOURITE_USERS, IS_PROFILE_COMPONENT } from "../../utils/constant/index";

const initialState = {
    favoutite_users: {},
    favourite_posts: {},
    current_view_user: false,
    users:{
        allUsersImageLoaded: false
    }
}

export const usersMetaData = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case FAVOURITE_USERS:
            return {
                ...state, favoutite_users: payload
            }
        case FAVOURITE_POSTS:
            return {
                ...state, favourite_posts: payload
            }
        case FAVOURITE_USER:
            return {
                ...state, current_view_user: payload
            }
        case IS_PROFILE_COMPONENT:
            return {
                ...state, is_profile_component: payload
            }
        default: return state
    }
}