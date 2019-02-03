import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from '../components/carousel'
import Header from '../components/header'

export default class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>                
                
                <Header 
                    title={this.props.data.title} 
                    subtitle={this.props.data.subtitle} 
                />                
                
                <View style={styles.main}>
                    <Carousel data={this.props.data.intro} sliderWidth={280} itemWidth={280}/>
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
    justifyContent: 'flex-start'
  }, 
  main: {
        flex: 1,
        marginTop: 50
  }
});
