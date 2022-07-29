import {FAVOURITE_USERS, FAVOURITE_USER} from '../../utils/constant/index'

export const allFavouriteUsers = (payload) => {
    return {
        type: FAVOURITE_USERS,
        payload
    }
}

export const currentFavouriteUser = (payload) => {
    return {
        type: FAVOURITE_USER,
        payload,
    }
}