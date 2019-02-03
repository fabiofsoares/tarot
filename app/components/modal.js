import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Alert} from 'react-native';
import Card from './card'

export default class ModalApp extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
                <View>
                    <TouchableHighlight
                            onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                            <Text>Sortir...</Text>
                    </TouchableHighlight>

                    <Card data={this.props.card} sliderWidth={280} itemWidth={280} />
                </View>
            </View>
        </Modal>

        <TouchableHighlight  style={styles.button}
          onPress={() => { this.setModalVisible(true); }}>
          <Text style={{color: '#2c3e50', fontSize: 12}} >Voir la carte</Text>
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
  }
})