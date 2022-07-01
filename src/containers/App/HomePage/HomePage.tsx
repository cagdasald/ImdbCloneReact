import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {MeDto} from "../../../core/models/dtos/me.dto";
import {setMe} from "../../../core/services/appService/setMe/actions";
import {IStore} from '../../../core/utilities/reducers';
import './HomePage.scss';

interface IProps {
  setMe: (me?: MeDto) => void;
}

class HomePage extends Component<IProps> {
  render() {
    return (
      <div id='home-page' className='page'>
        <div className='page-content'>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setMe,
    },
    dispatch,
  );
};
const mapStateToProps = (store: IStore) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
