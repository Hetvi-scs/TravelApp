import {
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Customheader from '../../components/CustomHeader';
import {
  IcEmergency,
  IcExpenses,
  IcGraymytrips,
  IcMyTips,
  IcRightBlueArrow,
  IcSavedpayments,
  IcWallet,
  color,
  fontSize,
  fonts,
  images,
  size,
} from '../../theme';
import MyTrips from '../../theme/images/svg/Mytrips';
import Whishlist from '../../theme/images/svg/Whishlist';
import Flatlistcompo from '../../components/Flatlistcompo';
import * as styles from './styles'

export default function Profile() {
  const list = [
    {key: '01', img: <IcGraymytrips />, title: 'My trips'},
    {key: '02', img: <Whishlist />, title: 'Wishlists'},
    {key: '03', img: <IcEmergency />, title: 'Emergency'},
    {key: '04', img: <IcExpenses />, title: 'Expenses'},
    {key: '05', img: <IcWallet />, title: 'Wallet'},
    {key: '06', img: <IcSavedpayments />, title: 'Saved payment'},
    {key: '07', img: <IcMyTips />, title: 'My trips'},
    {key: '08', img: <IcMyTips />, title: 'Help and support'},
    {key: '09', img: <IcMyTips />, title: 'Refer & Earn'},
  ];
 
  return (
    <View style={{marginTop:size.moderateScale(40)}}>
      <View>
        <Text
          style={styles.profiletxt()}>
          Profile
        </Text>
      </View>

      <View
        style={styles.imgview()}>
        <View style={{}}>
          <Image
            source={images.profile}
            style={styles.imgstyle()}
          />
        </View>
        {/* <IcRightBlueArrow/> */}
        <View style={{flex: 1}}>
          <Text
            style={styles.nametxt()}>
            Vikram Singh
          </Text>
          <Text
            style={styles.showprofile()}>
            Show Profile
          </Text>
        </View>
        <View style={styles.svgview()}>
          <IcRightBlueArrow />
        </View>
      </View>
      <View
        style={styles.line()}></View>
      <View style={styles.flatlistview()}>
       <Flatlistcompo 
        data={list} 
       />
      </View>
    </View>
  );
}
