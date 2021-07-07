import React from 'react';
import {useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/200/300`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 5}}></View>}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={25} color="#DDD" animating={true} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    backgroundColor: 'blue',
    height: 150,
  },
});
