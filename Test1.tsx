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


  public onIncrement = () => {

    console.log("Testing log ++ ", this.state.count + 1);
    this.setState({
      count:  this.state.count + 1,
    })
  }

  public onDecremnent = () => {

    console.log("Testing log ++ ", this.state.count - 1);
    this.setState({
      count:  this.state.count - 1,
    })
  }

  public onDecremnent = () => {

    console.log("Testing log ++ ", this.state.count - 1);
    this.setState({
      count:  this.state.count - 1,
    })
  }

  public onDecremnent = () => {

    console.log("Testing log ++ ", this.state.count - 1);
    this.setState({
      count:  this.state.count - 1,
    })
  }

  public render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                    screen and then come back to see your edits.
                  </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                  </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Button
                  title="+"
                  onPress={this.onIncrement}
                  accessibilityLabel="increment"
                  color="green"
                />
              </View>
              <Text style={styles.sectionDescription}>
                  Count Update: {this.state.count}
                  </Text>
              <View style={styles.sectionContainer}>
                <Button
                  title="-"
                  onPress={this.onDecremnent}
                  accessibilityLabel="increment"
                  color="red"
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
