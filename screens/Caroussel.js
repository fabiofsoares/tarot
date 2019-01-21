import React from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, StyleSheet  } from 'react-native';

export  default class Caroussel extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            entries:  [
                {
                    title: 'Beautiful and dramatic Antelope Canyon',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/UYiroysl.jpg'
                },
                {
                    title: 'Earlier this morning, NYC',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
                },
                {
                    title: 'White Pocket Sunset',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
                }
            ]
        };
    }


    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
        );
    }

 
} 
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1, 
        backgroundColor: 'white', 
    },
    image: { 
        resizeMode: 'cover',  
    },
    title: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
  });


  //Page Carousel Pagination : https://github.com/archriss/react-native-snap-carousel/blob/master/doc/PARALLAX_IMAGE.md