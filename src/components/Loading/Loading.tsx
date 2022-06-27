import {LoadingOutlined} from '@ant-design/icons';
import React from 'react';
import './Loading.scss';

interface IProps {
  className?: string;
  fontSize?: number;
}

const Loading = (props: IProps) => {

  return (
    <div
      id='loading'
      className={props.className}
    >
      <LoadingOutlined
        className='icon'
        style={{fontSize: `${props.fontSize ?? 24}px`}}
      />
    </div>
  );
};

export default Loading;
