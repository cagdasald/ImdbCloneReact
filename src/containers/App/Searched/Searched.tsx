import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { MeDto } from "../../../core/models/dtos/me.dto";
import { setMe } from "../../../core/services/appService/setMe/actions";
import { IStore } from '../../../core/utilities/reducers';
import './Searched.scss';

interface IProps {
  setMe: (me?: MeDto) => void;
}

// const API_KEY = '6835da7c';

class Searched extends Component<IProps> {

  render() {
    return (
      <div id='searched-page' className='page'>
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

export default connect(mapStateToProps, mapDispatchToProps)(Searched);
