import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
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

        <TouchableHighlight
          onPress={() => { this.setModalVisible(true); }}>
          <Text>Voir plus ...</Text>
        </TouchableHighlight>
      </View>
    );
  }
}