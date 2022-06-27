import {Button, Modal} from 'antd';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ErrorDto} from '../../../core/models/dtos/error.dto';
import {setApiError} from '../../../core/services/appService/setApiError/actions';
import {SetApiErrorState} from '../../../core/services/appService/setApiError/types';
import {Errors} from '../../../core/utilities/errors';
import {IStore} from '../../../core/utilities/reducers';
import {UI} from '../../../core/utilities/ui';
import './ApiErrorModal.scss';

interface IProps {
  apiErrorState: SetApiErrorState;
  setApiError: (error?: ErrorDto) => void;
}

const ApiErrorModal = (props: IProps) => {
  const isVisible = (): boolean => {
    return !!props.apiErrorState.error;
  };

  const getTitle = (error: ErrorDto): string => {
    switch (error.message) {
      default:
        return Errors.errorGenericTitle;
    }
  };

  const getText = (error: ErrorDto): string => {
    switch (error.message) {
      default:
        return Errors.errorGenericText;
    }
  };

  return (
    <Modal
      className="api-error-modal"
      maskStyle={UI.modalMaskStyle()}
      visible={isVisible()}
      closable={false}
      footer={false}
      centered
      destroyOnClose
      onCancel={() => props.setApiError()}
    >
      {props.apiErrorState.error &&
        <div className="content">
          <p className="title">{getTitle(props.apiErrorState.error)}</p>
          <p className="text">{getText(props.apiErrorState.error)}</p>
          <Button
            className="app-button"
            onClick={() => props.setApiError()}
          >
            Tamam
          </Button>
        </div>
      }
    </Modal>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setApiError,
    },
    dispatch,
  );
};
const mapStateToProps = (store: IStore) => {
  return {
    apiErrorState: store.setApiError,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiErrorModal);
