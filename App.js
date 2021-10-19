/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { authorize } from 'react-native-app-auth'

const App = () => {

  const config = {
    redirectUrl: 'com.redditech://oauth2redirect/reddit',
    clientId: 'fcafYt6_OhrlQEN6NTTyUQ',
    clientSecret: '',
    scopes: ['identity'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
      tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    },
    customHeaders: {
      token: {
        Authorization: 'Basic ZmNhZll0Nl9PaHJsUUVONk5UVHlVUQ==',
      },
    },
  };
  
  const Auth = useCallback(
    async call => {
      try {
        const authState = await authorize(config);
        console.log(authState)
      } catch(e) {
        console.log(e)
      }
    }
  )
  Auth();

  return (
    <View>
      <Image
        source={{
          uri: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/7/e/77eaf47d0c_97018_difference-magma-lave.jpg',
        }}
        style={{ width: '100%', height: '50%' }}
      />
    </View>
  );
};

export default App;