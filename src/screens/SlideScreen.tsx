import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  View,
  Dimensions,
  ImageSourcePropType,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAnimation} from '../hooks/useAnimation';
import {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlideScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isVisible = useRef(false);

  const navegation = useNavigation();

  const {fadeIn, opacity, fadeOut} = useAnimation();

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={index => {
          setActiveSlide(index);
          if (index === 2) {
            fadeIn();
            isVisible.current = true;
          } else {
            fadeOut();
            isVisible.current = false;
          }
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          containerStyle={{
            padding: 0,
            margin: 0,
          }}
          dotStyle={{
            width: 20,
            height: 20,
            borderRadius: 18,
            marginHorizontal: 2,
            backgroundColor: '#5856D6',
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.5}
        />

        <Animated.View
          style={{
            opacity: opacity,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#5856D6',
              width: 130,
              borderRadius: 20,
              marginRight: 20,
            }}
            onPress={() => {
              if (isVisible.current) {
                navegation.navigate('HomeScreen');
              }
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  padding: 16,
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Enter
              </Text>
              <Icon name="chevron-forward-outline" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subtitle: {
    fontSize: 16,
  },
});
