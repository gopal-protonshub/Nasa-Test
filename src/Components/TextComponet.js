import React from 'react';
import {Text} from 'react-native';
const TextComponet = props => {
  return (
    <Text
      style={{
        textAlign: props.align,
        backgroundColor: '#000',
        elevation: 7,
        padding: 10,
        margin: 10,
        color: '#fff',
        borderRadius: 10,
      }}>
      {props.text}
    </Text>
  );
};

export default TextComponet;
