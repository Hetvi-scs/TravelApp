import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Customheader from '../../components/CustomHeader'
import { IcBank, IcCard, IcEmi, IcGpay, IcHeaderBackArrow, IcPhonepay, IcRightBlueArrow, IcRightsideArrow, IcUpi, IcWallet, color, images, size } from '../../theme'
import * as style from './style'
import DueComponent from '../../components/DueNowComponent'
import Flatlistcompo from '../../components/Flatlistcompo'


const list = [
    { key: '01',img:<IcCard/> ,title: 'Credit/Debit/ATM Card' },
    { key: '02',img:<IcUpi/> ,title: 'UPI' },
    { key: '03',img:<IcBank/> ,title: 'Net Banking' },
    { key: '04',img:<IcEmi/> ,title: 'EMI'},
    { key: '05',img:<View style={{backgroundColor:'rgba(95, 37, 159, 1)',
    alignItems:'center',justifyContent:'center',
    height:20,width:20,borderRadius:20
    }}><IcPhonepay/></View> ,
    title: 'PhonePe' },
    { key: '06',img:<IcGpay/> ,title: 'GooglePay'},
    { key: '07',img:<IcWallet/> ,title: 'Gift Cards & Wallet' },  
  ];

export default function SelectPaymentMode() {
  return (
<View>
    <Customheader
        type='second'
        img={<IcHeaderBackArrow/>}
        text='Select payment mode'
    />  

<View>
    <View style={style.container()}>

          <View ><DueComponent/></View>
      <View style={style.paymain()}>
         <Text style={style.payopt()}>Payment options</Text>
        <View>
            <Flatlistcompo
             data={list}
            />
        </View>
      </View>

      <View style={{marginHorizontal:size.moderateScale(0)}}>
        <Text style={style.uppertxt()}>
        By proceeding, I understand and agree with the{' '}
        <Text style={style.blueone()}>privacy policy</Text>
        <Text>,</Text>
        
         the{' '}
         <Text style={style.blueone()}>user agreement</Text>
         <Text>{' '}and {' '}</Text>
         <Text style={style.blueone()}>terms of service </Text>
         <Text>of Tripify.</Text>
         </Text>

      </View>

    </View>
</View>   
</View>
  )
}