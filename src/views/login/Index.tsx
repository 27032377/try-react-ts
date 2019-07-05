import * as React from 'react';
import { withRouter } from 'react-router-dom'

class Login extends React.Component<any, any> {
  constructor(props: InterFaces.Iprops) {
    super(props);
    this.clickEv = this.clickEv.bind(this);
  }
  private info: SimpleType.Name = {
    name: 'Jiangjie'
  }
  private clickEv: () => void = (): void => {
    this.props.history.push('/')
  }
  public render() {
    return (
      <div>
        <p onClick={this.clickEv}>My name is {this.info.name}</p>
      </div>
    )
  }
}

export default withRouter(Login);