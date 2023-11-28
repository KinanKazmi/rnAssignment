import React from 'react'
import { ItemsWithQuantity } from '../../main';
import { Button, Text, View } from 'react-native';
import { styles } from '../../sharedStyles';

const SingleCheckoutItem = ({
  item,
  removeOne,
  addOne
}: {
  item: ItemsWithQuantity,
  addOne: () => void
  removeOne: () => void
}) => {
  return (
    <View testID={'checkoutItem'} style={styles.margin1}>
      <Text> {`Name: ${item.name}`}</Text>
      <Text> {`Color: ${item.colour}`}</Text>
      <Text> {`Quantity: ${item.quantity}`}</Text>
      <Button title={'remove one'} onPress={removeOne} />
      <Button title={'add one'} onPress={addOne} />
    </View>
  )
}

export default SingleCheckoutItem