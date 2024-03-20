import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { IcRightBlueArrow, size } from '../../theme';
import * as styles from './styles'
// Define a custom ListItem component
const ListItem = ({ img, title }) => (
  <TouchableOpacity
    style={styles.imgview()}>
    <View>{img}</View>
    <View style={styles.txtview()}>
      <Text
        style={styles.txt()}>
        {title}
      </Text>
    </View>
    <View>
      <IcRightBlueArrow />
    </View>
  </TouchableOpacity>
);


export default  CustomFlatList = ({ data }) => (
  <View style={styles.flatlistview()}>
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (
        <View
          style={styles.flatline()}
        />
      )}
      renderItem={({ item }) => <ListItem img={item.img} title={item.title} />}
    />
  </View>
);