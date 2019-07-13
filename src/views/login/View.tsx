import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

interface Inav {
  num: number,
  nav: string
}
class View extends Component<any, any> {
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