/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Test1 from './Test1';

export interface Props {
  name: string;
}

interface State {
  count: number;
}

export class App extends React.Component<Props, State> {


  public constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public componentDidMount() {

  }

  public render() {
    return (
      <Test1>Hello</Test1>
    );
  };
}

export default App;
