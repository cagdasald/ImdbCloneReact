import React from 'react';
import './AuthLayout.scss';

class AuthLayout extends React.Component {

  render() {
    return (
      <div id="auth-layout">
        {this.props.children}
      </div>
    );
  }
}

export default AuthLayout;
