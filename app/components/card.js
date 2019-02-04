import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel,  { Pagination } from 'react-native-snap-carousel';

export default class Card extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            entries: this.props.data,
            activeSlide: 0
        }
       
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}              
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.92)'
              }}              
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />           
        );
    }
   
    _renderItem ({item, index}) {
        
        return (
            <View style={styles.slide} key={index}>                
                {item.title && <Text style={styles.title}>{ item.title }</Text>}
                {item.text.map((p, i) => <Text key={i} style={styles.text}>{ p }</Text> )}
            </View>
        );
    }

    render () {
        //console.log('modal card : ', this.props.data)
        return (
            <View style={styles.container}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    sliderWidth={this.props.sliderWidth}
                    itemWidth={this.props.itemWidth}             
                />
                { this.pagination }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        height: 400,
        alignSelf: 'center'
    },
    slide: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        padding: 10,
        paddingTop: 30,
        borderColor: '#95a5a6',
        borderWidth: 0.5       
    },
    text: {
        textAlign: 'center',
        marginTop: 5,
        color: '#95a5a6'
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 18,
        marginBottom: 15
    }
});