import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react'
import { Button, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackParamList } from '../../routes';
import { styles } from '../../sharedStyles';
import { AuthContext, ItemsWithQuantity } from '../../main';
import SingleCheckoutItem from './SingleCheckoutItem';

const Checkout = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Checkout'>) => {

  const gotoHome = () => {
    navigation.navigate('HomeScreen');
  };

  const auth = useContext(AuthContext);

  const removeItem = (item: ItemsWithQuantity) => {
    auth?.removeItem(item);
  };

  const addItem = (item: ItemsWithQuantity) => {
    auth?.addItem(item);
  };
  
  return (
    <SafeAreaView>
      <Text style={styles.title}>Checkout</Text>
      <Button
        title={'Back to Home'}
        onPress={gotoHome}
      />
      <FlatList
        data={auth?.basket}
        renderItem={({item}) => <SingleCheckoutItem
          item={item}
          removeOne={() => removeItem(item)}
          addOne={() => addItem(item)}
        />}
      />
    </SafeAreaView>
  )
}



export default Checkout;
