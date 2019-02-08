import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/header'

export default class About extends React.Component {

  _renderMembers(item, i){
    return(
      <View key={i} style={styles.member}>
            <Image
                style={{width: 150, height: 150}}
                source={item.img}
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.post}>{item.post}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
          
            <Header 
                title={this.props.data.title} 
                subtitle={this.props.data.subtitle} 
            />

            <Text style={styles.label}>Dévéloppé par :</Text>
          
            <View style={ styles.main }>
                {this.props.data.members.map((item, i) => this._renderMembers(item, i))}
            </View>

            <View style={ styles.footer }>
                <Text style={styles.label}>{this.props.data.footer}</Text>
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
    justifyContent: 'center',
  },
  main:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30
  },
  name:{
      fontWeight: '600',
      fontSize: 14
  },
  post:{
    fontSize: 12
  },
  label: {
    marginTop: 30
  },
  member : {
    flexGrow: 130,
    alignItems: 'center'
  },
  footer: {
      paddingVertical: 20 
  }
});
