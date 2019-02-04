import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import renderIf from 'render-if';
import Header from '../components/header'
import Modal from '../components/modal'
import cards from '../../assets/locales/fr/cards'

export default class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time: 0,
            card: {},
            pressed: false,
            reponse: ''          
        }
    }

    onPress(){
        this.setState({ pressed: true })
        this.time = setInterval(this.timing, 10)
    }

    timing = () => {
      this.setState((prevState) => ({
          time: prevState.time >= cards.tarot_interpretations.length ? 0 : prevState.time + 1
      })); 
    }

    handlePressOut(e){
        clearInterval(this.time)        
        this.setState({
            pressed: false,
            card: cards.tarot_interpretations[this.state.time],
            reponse: this.props.data.reponses[Math.floor((Math.random() * this.props.data.reponses.length) + 0)].title
            
        })
    }    

    render() {               
        return (
            <View style={styles.container}>
                
                <Header 
                    title={this.props.data.title} 
                    subtitle={this.props.data.subtitle} 
                />
                                  
                <View style={styles.main}>
                    <View style={this.state.pressed ? styles.buttonON : styles.buttonOFF}>
                        <TouchableWithoutFeedback onPressIn={this.onPress.bind(this)} onPressOut={this.handlePressOut.bind(this)}>
                            <Text style={this.state.pressed ? styles.textON : styles.textOFF}>Lancer</Text>
                        </TouchableWithoutFeedback>
                    </View>                    
                </View>
                
                { renderIf (this.state.reponse)(
                    <View style={styles.reponse}>
                        <Text style={styles.label}>Reponse :</Text>
                        <Text style={styles.resp}>{ this.state.reponse && this.state.reponse }</Text>
                        <Text style={styles.label}>Votre Carte :</Text>
                        <Text style={styles.cardName}>{ this.state.card && this.state.card.name }</Text>
                        <Modal name={this.state.card.name} card={ this.state.card.descriptions }/>
                    </View>
                )}

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 0
  },
  buttonON:{
    borderColor: '#2c3e50',
    backgroundColor: '#2c3e50',
    padding: 20,
    width: 200   
  },
  buttonOFF:{
    borderColor: '#2c3e50',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: 180   
  },
  textON:{
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 25
  },
  textOFF:{
    color:'#2c3e50',
    textAlign: 'center',
    fontSize: 22
  }, 
  main: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        width: '100%'       
  },
  reponse: {      
    backgroundColor:'#ecf0f1',
    width: '100%', 
    borderColor: '#2c3e50',
    borderWidth: 0.3,
    padding: 10
  },
  label: {
    color:'#fff',
    backgroundColor:'#2c3e50',
    textAlign: 'left',
    fontSize: 14,
   // marginTop: 20,
    padding: 5,
    width: 100
  },
  resp: {
    color:'#7f8c8d',
    textAlign: 'left',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20
  },
  cardName: {
    color:'#7f8c8d',
    textAlign: 'left',
    fontSize: 16,
    marginTop: 10
  }
});
