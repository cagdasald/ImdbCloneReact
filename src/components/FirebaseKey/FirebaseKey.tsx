import parse from 'html-react-parser';
import React from 'react';
import FirebaseService from '../../core/services/firebaseService/firebase.service';
import './FirebaseKey.scss';

interface IProps {
  key?: string;
  className?: string;
  firebaseKey: string;
}

const FirebaseKey = (props: IProps) => {
  const value = FirebaseService.getValue(props.firebaseKey);
  return (
    <span
      key={props.key ?? props.firebaseKey}
      className={`firebase-key ${props.className ?? ''}`}
    >
      {parse(value && value.length > 0 ? value : props.firebaseKey)}
    </span>
  );
};

export default FirebaseKey;
