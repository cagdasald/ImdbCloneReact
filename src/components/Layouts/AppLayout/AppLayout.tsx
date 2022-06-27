import React from 'react';
import './AppLayout.scss';

class AppLayout extends React.Component {

  render() {
    return (
      <div id="app-layout">
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout;
