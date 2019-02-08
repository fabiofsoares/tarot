import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Alert} from 'react-native';
import Carousel from './carousel'

export default class ModalApp extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22, padding: 10}}>
        
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
              <View style={{marginTop: 22, alignItems: 'center', paddingVertical: 10}}>
                  
                  <View style={styles.header}>
                      <Text style={{color: '#2c3e50', fontSize: 22, textAlign: 'center'}}>{ this.props.name }</Text>
                      <TouchableHighlight style={styles.close} onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                            <Text style={{color: '#FFFFFF', fontSize: 25, textAlign: 'center'}}>X</Text>
                      </TouchableHighlight>
                  </View>

                  <View style={styles.main}>
                    <Carousel data={this.props.card} sliderWidth={280} itemWidth={280} intro={false} />
                  </View>

            </View>
        </Modal>

        <TouchableHighlight  style={styles.button}
          onPress={() => { this.setModalVisible(true); }}>
          <Text style={{color: '#2c3e50', fontSize: 12}} >Savoir plus</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
      borderColor: '#2c3e50',
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      padding: 8,
      width: 90,
      alignSelf: 'center' 
  },
  header: {
    alignItems: 'center',
    width: '100%'
  },
  close:{
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor: '#2c3e50',
    backgroundColor: '#2c3e50',
    position: 'absolute',
    top: 0,
    right: 15       
  },
  main:{
    maxHeight: 450,
    marginTop: 30
  }
})