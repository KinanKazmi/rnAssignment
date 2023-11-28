import React from 'react'
import { Button, Image, Text, View } from 'react-native';
import { styles } from '../../sharedStyles';

export type ItemType = {
  id: number,
  colour: string,
  name: string
  price: number,
  img: string
};

type addItemType = (item: ItemType) => void;

const SingleItem = ({
  item,
  addItem,
}: {
  item: ItemType,
  addItem: addItemType,
}) => {
  const {
    oneFlex,
    row,
    center1,
    marginV1,
    border1,
    imgStyle
  } = styles;
  if (!item) return <View/>;
  return (
    <View style = {[oneFlex, row, center1, border1, marginV1]}>
      <View style = {[oneFlex, center1]}>
        <Text>{item.name}</Text>
        <Text>{`Color: ${item.colour}`}</Text>
        <Text>{`Price: ${item.price}`}</Text>
        <Button
          title={'Add to basket'}
          onPress={() => addItem(item)}
        />
      </View>
      <View style = {[oneFlex]}>
        <Image source={{uri: item.img}} style={imgStyle} />
      </View>
    </View>
  )
}

export default SingleItem;