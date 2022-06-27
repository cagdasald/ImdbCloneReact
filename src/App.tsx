import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import './App.scss';
import AppLayout from './components/Layouts/AppLayout/AppLayout';
import AuthLayout from './components/Layouts/AuthLayout/AuthLayout';
import Loading from './components/Loading/Loading';
import ApiErrorModal from './components/Modals/ApiErrorModal/ApiErrorModal';
import HomePage from './containers/App/HomePage/HomePage';
import LoginPage from './containers/Auth/LoginPage/LoginPage';
import {ErrorDto} from "./core/models/dtos/error.dto";
import {MeDto} from "./core/models/dtos/me.dto";
import {checkToken} from "./core/services/appService/checkToken/actions";
import {CheckTokenState} from "./core/services/appService/checkToken/types";
import {setApiError} from './core/services/appService/setApiError/actions';
import {setAppMounted} from './core/services/appService/setAppMounted/actions';
import {SetAppMountedState} from './core/services/appService/setAppMounted/types';
import {setMe} from "./core/services/appService/setMe/actions";
import {setPathname} from './core/services/appService/setPathname/actions';
import {setRemoteConfig} from './core/services/firebaseService/setRemoteConfig/actions';
import {SetRemoteConfigState} from './core/services/firebaseService/setRemoteConfig/types';
import axios from './core/utilities/axios';
import {Errors} from './core/utilities/errors';
import {history} from './core/utilities/history';
import {IStore} from './core/utilities/reducers';
import {router} from './core/utilities/router';

interface IProps {
  setAppMountedState: SetAppMountedState;
  setAppMounted: (isMounted: boolean) => void;
  setRemoteConfigState: SetRemoteConfigState;
  setRemoteConfig: () => void;
  setPathname: (pathname: string) => void;
  setApiError: (error?: ErrorDto) => void;
  checkTokenState: CheckTokenState;
  checkToken: () => void;
  me?: MeDto;
  setMe: (me?: MeDto) => void;
}

interface IState {
  callbackHistoryUnregister?: VoidFunction;
}

class App extends React.Component<IProps> {
  state: IState = {
    callbackHistoryUnregister: undefined,
  };

  constructor(props: IProps) {
    super(props);
    this.setAxiosInterceptor();
    this.props.setRemoteConfig();
  }

  componentDidMount() {
    this.setHistoryListener();
    this.props.checkToken();
    this.props.setAppMounted(true);
  }

  private setAxiosInterceptor(): void {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (Errors.isAuthError(error)) {
          this.props.setMe();
        } else {
          this.props.setApiError(Errors.getErrorDtoFromApiError(error));
        }
        return Promise.reject(error);
      },
    );
  }

  private setHistoryListener(): void {
    const callbackHistoryUnregister = history.listen((location: any) => {
      this.props.setPathname(location.pathname);
    });
    this.setState({callbackHistoryUnregister});
  }

  private isAppLoading(): boolean {
    return (
      !this.props.setAppMountedState.isMounted ||
      this.props.setRemoteConfigState.loading ||
      this.props.checkTokenState.loading
    );
  }

  // todo app visibility logic
  private isAppVisible(): boolean {
    return !!this.props.me;
  }

  render() {
    return (
      <Router history={history}>
        {
          this.isAppLoading()
            ?
            <Loading className="app-loading" fontSize={80}/>
            :
            this.isAppVisible()
              ?
              <AppLayout>
                <Switch>
                  <Route exact path={router.HOME} component={HomePage}/>
                  <Redirect to={router.HOME}/>
                </Switch>
              </AppLayout>
              :
              <AuthLayout>
                <Switch>
                  <Route exact path={router.LOGIN} component={LoginPage}/>
                  <Redirect to={router.LOGIN}/>
                </Switch>
              </AuthLayout>
        }
        <ApiErrorModal/>
      </Router>
    );
  }

  componentWillUnmount() {
    if (this.state.callbackHistoryUnregister) {
      this.state.callbackHistoryUnregister();
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setAppMounted,
      setRemoteConfig,
      setPathname,
      setApiError,
      checkToken,
      setMe,
    },
    dispatch,
  );
};
const mapStateToProps = (store: IStore) => {
  return {
    setAppMountedState: store.setAppMounted,
    setRemoteConfigState: store.setRemoteConfig,
    checkTokenState: store.checkToken,
    me: store.setMe.me,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
