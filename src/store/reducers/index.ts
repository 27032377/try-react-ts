import { ADD_NUMBER, ACTIVE_NAV } from '../actionTypes';

interface IinitialState {
  num: number,
  active: {
    nav: string,
    index: number
}
  [propName: string]: any
}
interface Iaction {
  type: string,
  [propName: string]: any
}

const initialState: IinitialState = {
  num: 0,
  active: {
    nav: 'home',
    index: 0
  }
}

const count: (state: object, action: Iaction) => object = (state = initialState, action): object => {
  switch (action.type) {
    case ADD_NUMBER:
      return Object.assign({}, state, {num: action.num})
    default:
      return state
  }
}

// 接收initialState.active
const active: (state: object, action: Iaction) => object = (state = {}, action): object => {
  switch (action.type) {
    case ACTIVE_NAV:
      return Object.assign({}, active, {...action.active})
    default:
      return state
  }
}

const todoApp: (state: IinitialState, action: Iaction) => object = (state = initialState, action): object => {
  return {
    count: count(state, action),
    active: active(state.active, action)
  }
}

export default todoApp;