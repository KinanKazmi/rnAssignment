import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    margin: 20,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  greyBG: {backgroundColor: 'grey'},
  margin1: {margin: 10},
  marginV1: {marginVertical: 10},
  border1: {borderWidth: 1},
  oneFlex: {flex: 1},
  twoFlex: {flex: 2},
  fiveFlex: {flex: 5},
  row: {flexDirection: 'row'},
  center1: {alignItems: 'center'},
  center2: {justifyContent: 'center'},
  spacer: {justifyContent: 'space-around'},
  imgStyle: {
    width: 300,
    height: 300,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
});

export {styles};