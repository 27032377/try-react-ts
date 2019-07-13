import { ADD_NUMBER, ACTIVE_NAV } from '../actionTypes'

export const addNumber:(num: number) => object = (num: number): object => {
  return {
    type: ADD_NUMBER,
    num
  }
}

export const activeNav:(obj: object) => object = (obj: object): object => {
  return {
    type: ACTIVE_NAV,
    active: {...obj}
  }
}