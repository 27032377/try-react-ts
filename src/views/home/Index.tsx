import * as React from 'react';
import { withRouter } from 'react-router-dom'

class Home extends React.Component<any, any> {
  constructor(props: InterFaces.Iprops) {
    super(props);
    this.clickEv = this.clickEv.bind(this);
  }
  private clickEv() {
    this.props.history.push('/login');
  }
  public render() {
    return (
      <div><p onClick={this.clickEv}>this is home page</p></div>
    )
  }
}

export default withRouter(Home);