import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel,  { Pagination } from 'react-native-snap-carousel';

export default class AppCarousel extends React.Component {
    
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
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />           
        );
    }
   
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide} key={index}>
                { item.title && <Text style={styles.title}>{ item.title }</Text> }
                { item.text && <Text style={styles.text}>{ item.text }</Text> }
            </View>
        );
    }

    render () {
        return (
            <View>
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
    slide: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    },
    title: {
        textAlign: 'center'
    }
});