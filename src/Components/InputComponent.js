import React from 'react';
import {TextInput} from 'react-native';

const InputComponent = props => {
  return (
    <TextInput
      style={{
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: '#000',
        margin: 10,
        borderRadius: 5,
        paddingRight: 20,
      }}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default InputComponent;
