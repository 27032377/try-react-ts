import * as React from 'react';
// import Routes from './routes/Index';

const { Layout, Layout: {Header} } = require('antd');
// interface Iprops {
//   [route: string]: React.ReactNode
// }
class App extends React.Component<any, any> {
  // constructor(props: Iprops) {
  //   super(props);
  // }
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
