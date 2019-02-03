import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header'

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Header 
            title={this.props.data.title} 
            subtitle={this.props.data.subtitle} 
          />  
        <Text>Hello Fabio Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
