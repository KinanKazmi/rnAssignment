import { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Text,
  View,
} from 'react-native';
import {AuthContext, BasketType} from '../../main';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { styles } from '../../sharedStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import SingleItem, { ItemType } from './SingleItem';

function HomeScreen({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'HomeScreen'>): JSX.Element {
  const [items, setItems] = useState<BasketType>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const call = await fetch('https://my-json-server.typicode.com/benirvingplt/products/products');
        const resp = await call.json();
        setItems(resp);
      } catch (error) {
        console.error(`fetch error: ${error}`);
        Alert.alert('Could not get data from the server');
      }
    };
    fetchData();
  }, []);

  const auth = useContext(AuthContext);

  const gotoCheckout = () => {
    navigation.navigate('Checkout');
  };

  const addItem = (item: ItemType) => {
    Alert.alert('Added to basket', item.name);
    auth?.addItem(item);
  };

  return (
    <SafeAreaView style={styles.oneFlex}>
      <View style={[styles.oneFlex, styles.center1, styles.greyBG]}>
        <Text style={styles.title}>HOME</Text>
      </View>
      <View style={[styles.fiveFlex]}>
        {items.length ?
        <FlatList
          data={items}
          renderItem={({item}) => <SingleItem item={item} addItem={addItem} />}
        /> : 
        <Text style={styles.title}>Loading</Text>
        }
      </View>
      <View style={[styles.oneFlex, styles.center2, styles.greyBG]}>
        <Button
          title={'Proceed to Checkout'}
          onPress={gotoCheckout}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;


