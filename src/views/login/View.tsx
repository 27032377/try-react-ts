import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

interface Inav {
  num: number,
  nav: string
}
interface Iprops {
  history: {
    push: (str: string) => void
  },
  changeNav: (obj: object) => void,
  active: {
    nav: string,
    index: number
  }
}

class View extends Component<Iprops, any> {
  constructor(props: any) {
    super(props);
  }
  private clickEv = () => {
    this.props.history.push('/');
  }
  private changeNav: (obj: Inav) => void = (obj): void => {
    this.props.changeNav(obj)
  }
  public render() {
    const {nav, index} = this.props.active
    const happen = {
      index: 1,
      nav: 'xx'
    }
    return (
      <div>
        <p onClick={this.clickEv}>当前导航为{nav}，第{index}页</p>
        <p onClick={this.changeNav.bind(this, happen)}>切换</p>
      </div>
    )
  }
}

export default withRouter(View);