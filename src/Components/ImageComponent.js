import React from 'react';
import {Image} from 'react-native';

const ImageComponent = () => {
  return (
    <Image
      style={{
        width: 200,
        height: 200,
        marginRight: 'auto',
        marginLeft: 'auto',
        margin: 10,
      }}
      source={{
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSovNc_klXRmPPsIBxSwheAoAZ736vgNxUJeA&usqp=CAU',
      }}
    />
  );
};

export default ImageComponent;
