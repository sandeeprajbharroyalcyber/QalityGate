/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {  } from 'react';
import {
  
} from 'react-native';

import {
 
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
