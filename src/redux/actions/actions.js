import {FAVOURITE_USERS, FAVOURITE_USER, IS_PROFILE_COMPONENT, FAVOURITE_POSTS} from '../../utils/constant/index'

export const allFavouriteUsers = (payload) => {
    return {
        type: FAVOURITE_USERS,
        payload
    }
}

export const allFavouritePosts = (payload) => {
    return {
        type: FAVOURITE_POSTS,
        payload
    }
}

export const currentFavouriteUser = (payload) => {
    return {
        type: FAVOURITE_USER,
        payload,
    }
}

export const isProfileComponent = (payload) => {
    return {
        type: IS_PROFILE_COMPONENT,
        payload,
    }
}