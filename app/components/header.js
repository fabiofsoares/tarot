import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (            
            <View style={styles.header}>
                { this.props.title && <Text style={styles.title}>{this.props.title}</Text> }
                { this.props.subtitle && <Text style={styles.subtitle}>{this.props.subtitle}</Text> }
            </View> 
        );
    }
}

const styles = StyleSheet.create({
  header: { 
    width: '100%',
    paddingTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 20,    
    textTransform: 'uppercase',
    color: '#2c3e50'
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
    color: '#7f8c8d'
  }
});
