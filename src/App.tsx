import * as React from 'react';

const { Layout, Layout: {Header} } = require('antd');
class App extends React.Component<any, any> {
  public render() {
    return (
      <Layout>
        <Header></Header>
        {this.props.children}
      </Layout>
    )
  }
}

export default App;
