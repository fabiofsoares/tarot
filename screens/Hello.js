import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Text } from 'react-native';

export default class Hello extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          time: 0          
      }
      const time = '';
  }
  
  static navigationOptions = {
    title: 'Hello',
  };
  
  onPress(){
      time = setInterval(this.timing(), 1000)      
  }
  timing(){
    this.setState((prevState) => ({
        time: prevState.time + 1
    })); 
  }
  handlePressOut(e){
    clearInterval(time)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.message}>
            <Text>Pensez à votre question...</Text>
            <Text>{this.state.time}</Text>
        </View>
        <View style={styles.container_btn}>
            <TouchableWithoutFeedback onPressIn={this.onPress.bind(this)} onPressOut={this.handlePressOut.bind(this)}>
            <View style={styles.button} >
            <Text> Démarrer </Text>
            </View>
                
            </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginTop: 50
  },
  button: {     
      borderColor: '#000000',
      borderWidth: 2,
      padding: 15
  }
});
