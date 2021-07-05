import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['yellow']}
          progressBackgroundColor="red"
          style={{backgroundColor: 'purple'}}
        />
      }>
      <HeaderTitle title="Pull To Refresh" />
    </ScrollView>
  );
};
