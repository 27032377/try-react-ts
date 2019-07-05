namespace InterFaces {
  export interface Ihistory {
    history: {
      push?: () => {},
      replace?: () => {}
    }
  }
  export interface Iprops extends Ihistory {
    [propName: string]: any
  }
}