import {Button, Form, Input} from 'antd';
import React from 'react';
import {FormValuesLogin} from '../../../../core/models/custom/formValuesLogin';
import './LoginForm.scss';

interface IProps {
  isLoading: boolean;
  callbackLogin: (values: FormValuesLogin) => void;
}

const LoginForm = (props: IProps) => {

  function handleFinish(values: FormValuesLogin) {
    props.callbackLogin(values);
  }

  return (
    <Form
      id="login-form"
      className="app-form"
      onFinish={handleFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {required: true, message: ''},
          {type: 'email', message: ''},
        ]}
      >
        <Input placeholder="Email"/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{required: true, message: ''}]}
      >
        <Input.Password placeholder="Password"/>
      </Form.Item>

      <Button
        htmlType="submit"
        className="app-button"
        disabled={props.isLoading}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
