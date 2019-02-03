import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import Header from '../components/header'
import Modal from '../components/modal'
import cards from '../../assets/locales/fr/cards'

export default class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time: 0,
            card: {},
            press: false,
            reponse: ''          
        }
    }

    onPress(){
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

                    <View style={styles.timing}>
                        <Text>{this.state.time}</Text>                        
                    </View>

                    <View style={styles.button}>
                        <TouchableWithoutFeedback onPressIn={this.onPress.bind(this)} onPressOut={this.handlePressOut.bind(this)}>
                            <Text style={styles.textButton}>Lancer</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.reponse}>
                        <Text>{ this.state.reponse && this.state.reponse }</Text>
                        <Text>{ this.state.card && this.state.card.name }</Text>
                        <Modal card={this.state.card.descriptions}/>
                    </View>
                </View>

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
  button:{
    borderColor: '#2c3e50',
    backgroundColor: '#000',
    padding: 20,
    width: 180
   
  },
  textButton:{
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: 25
  }, 
  main: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        width: '100%', 
        borderColor: '#000000',
        borderWidth: 2
  },
  footer: {      
        marginTop: 50,
        backgroundColor: '#000',
        width: '100%',
        height: 50  
  }
});
