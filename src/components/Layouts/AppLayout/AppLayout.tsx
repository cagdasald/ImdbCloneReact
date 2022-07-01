import React from 'react';
import AppHeader from '../../AppHeader/AppHeader';
import './AppLayout.scss';

class AppLayout extends React.Component {

  render() {
    return (
      <div id="app-layout">
        <AppHeader/>
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout;
