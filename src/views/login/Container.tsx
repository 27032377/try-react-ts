import { activeNav } from '@store/actions/index';

export const mapStateToProps: (state: any) => object = (state): object => {
  return {
    active: state.active
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    changeNav: (obj: object): void => {
      dispatch(activeNav(obj))
    }
  }
}