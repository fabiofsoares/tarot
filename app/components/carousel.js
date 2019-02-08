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
   
    _renderIntroItem ({item, index}) {
        return (
            <View style={styles.slide} key={index}>
                
                <View style={styles.header}>
                    <View>
                        <Text style={styles.step}> Step </Text>
                    </View>
                    <View style={styles.number}>
                        <Text style={styles.numberText}>{ index + 1 }</Text>
                    </View>
                </View>

                <View style={styles.main}>
                    { item.title && <Text style={styles.title}>{ item.title }</Text> }
                    { item.text && <Text style={styles.text}>{ item.text }</Text> }
                </View>
               
            </View>
        );
    }

    _renderCardItem ({item, index}) {
        
        return (
            <View style={[styles.slide, styles.cardSlide]} key={index}>                
                {item.title && <Text style={styles.cardTitle}>{ item.title }</Text>}
                {item.text.map((p, i) => <Text key={i} style={styles.text}>{ p }</Text> )}
            </View>
        );
    }

    render () {
        return (
            <View>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={ this.props.intro ? this._renderIntroItem : this._renderCardItem }
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
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        padding: 10,
        paddingTop: 30,
        borderColor: '#95a5a6',
        borderWidth: 0.5       
    },
    header:{        
        flexDirection: 'row'
    },
    step: {
        fontSize: 20
    },
    number:{
        width: 28,
        height: 28,
        borderColor: '#000',
        backgroundColor: '#000'       
    },
    numberText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    },
    main: {
        marginTop: 30
    },
    text: {
        textAlign: 'center',
        marginTop: 15,
        color: '#95a5a6'
    },
    title: {
        textAlign: 'center',
        fontSize: 18
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 18,
        textTransform: 'uppercase'
    }
});