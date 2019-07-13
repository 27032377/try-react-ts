// import * as React from 'react';
// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import View from './View'
import { mapStateToProps, mapDispatchToProps } from './Container'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);