/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { StrictMode } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Box from './src/components/custom/box';
import style from './src/utils/styles';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const styleCustom = style;
  const items = [
    {
      label: 'my 1st box',
      color: 'skyblue',
    },
    {
      label: 'my 2st box',
      color: 'rgb(224, 194, 110)',
    },
    {
      label: 'my 3st box',
      color: 'rgb(227, 111, 225)',
    },
    {
      label: 'my 4st box',
      color: 'rgb(201, 231, 172)',
    },
    {
      label: 'my 5st box',
      color: 'rgb(227, 165, 134)',
    },
    {
      label: 'my 6st box',
      color: 'rgb(101, 113, 148)',
    },
    {
      label: 'my 7st box',
      color: 'rgb(111, 217, 227)',
    },
    {
      label: 'my 8st box',
      color: 'rgb(106, 202, 123)',
    },
    {
      label: 'my 9st box',
      color: 'rgb(35, 73, 55)',
    },
    {
      label: 'my 10st box',
      color: 'rgb(170, 171, 166)',
    },
    {
      label: 'my 11st box',
      color: 'rgb(225, 175, 224)',
    },
    {
      label: 'my 12st box',
      color: 'rgb(87, 77, 75)',
    },
  ];
  return(
    <StrictMode>
      <SafeAreaProvider>
        <SafeAreaView edges={['top']}>
          <View>
            <Text style={styleCustom.styleText}>Box</Text>
          </View>
          <View style={ styleCustom.viewBox }>
            { items.map((item, index) => (
              <Box
                key={index}
                color={item.color}
                label={item.label}
                styleBox={styleCustom.styleBox}
                styleText={styleCustom.styleText}
                styleButton={styleCustom.styleButton}
              />
            ))}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </StrictMode>
  );
}

export default App;
