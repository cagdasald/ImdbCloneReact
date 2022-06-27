import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {FormValuesLogin} from "../../../core/models/custom/formValuesLogin";
import {MeDto} from "../../../core/models/dtos/me.dto";
import {setMe} from "../../../core/services/appService/setMe/actions";
import {IStore} from "../../../core/utilities/reducers";
import LoginForm from "./LoginForm/LoginForm";
import './LoginPage.scss';

interface IProps {
  setMe: (me?: MeDto) => void;
}

class LoginPage extends React.Component<IProps> {

  private handleLogin(values: FormValuesLogin) {
    this.props.setMe({username: values.email});
  }

  render() {
    return (
      <div id='login-page' className='page'>
        <div className='page-content'>
          <LoginForm
            isLoading={false} // todo loading from props
            callbackLogin={values => this.handleLogin(values)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
