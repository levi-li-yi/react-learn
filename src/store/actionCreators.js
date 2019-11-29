import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addInputAction = (value) => ({
    type: ADD_ITEM,
    value
})

export const deleteInputAction = (index) => ({
    type: DELETE_ITEM,
    index
})