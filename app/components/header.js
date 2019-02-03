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
        borderColor: '#000000',
        borderWidth: 2,
        width: '100%'
  },
  title: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center'
  }
});
