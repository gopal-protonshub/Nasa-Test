import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Api} from '../Providers/Api';
import {NASA_API_KEY} from '../utils/API_KEYS';
import ButtonComponent from '../Components/ButtonComponent';
import InputComponent from '../Components/InputComponent';
import ImageComponent from '../Components/ImageComponent';
const api = new Api();
const LandingPage = props => {
  const [asteroidID, setAsteroidID] = React.useState('');
  const [loader, setLoader] = React.useState(false);
  const getNasa = () => {
    setLoader(true);
    const url =
      'https://api.nasa.gov/neo/rest/v1/neo/' +
      asteroidID +
      '?api_key=' +
      NASA_API_KEY;
    api
      .getApi(url)
      .then(response => {
        setLoader(false);
        console.log(response);
        if (response === false) {
          return;
        }
        props.navigation.navigate('AsteroidData', {
          data: response,
        });
      })
      .catch(error => {
        setLoader(false);
        console.error(error);
      });
  };

  const randomAsteroid = () => {
    setLoader(true);
    const url =
      'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + NASA_API_KEY;
    /**
     * getting a random number b/w 0 to 20
     */
    const randomNo = Math.floor(Math.random() * (19 - 0 + 1) + 0);
    console.log(randomNo);
    api
      .getApi(url)
      .then(response => {
        setLoader(false);
        console.log(response);
        setAsteroidID(response.near_earth_objects[randomNo].id);
        getNasa();
      })
      .catch(error => {
        setLoader(false);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          height: 500,
          borderRadius: 10,
          backgroundColor: '#fff',
          elevation: 7,
        }}>
        <ImageComponent />
        <InputComponent
          value={asteroidID}
          onTextChange={ev => {
            setAsteroidID(ev);
          }}
          placeholder={'Enter Asteriod Id'}
        />
        {loader ? (
          <Text
            style={{
              textAlign: 'center',
            }}>
            Please Wait ...
          </Text>
        ) : null}
        <ButtonComponent title={'Submit'} onPress={getNasa} />
        <ButtonComponent title={'Random Id'} onPress={randomAsteroid} />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
