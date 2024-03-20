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
<View style={style.main()}>
    <Customheader
        type='second'
        img={<IcHeaderBackArrow/>}
        text='Select payment mode'
    />  
    <View style={{flex:1}}> 



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

      <View style={{height:size.moderateScale(72),}}>
        <Text style={style.blueone()}>
        By proceeding, I understand and agree with the{' '}
        <Text style={style.blueone(color.darkblue)}>privacy policy,</Text>

       <TouchableOpacity style={{height:13,justifyContent:'flex-start'}}>
 
       </TouchableOpacity> 

        {/* <Text>,</Text> */}
         the{' '}
        <TouchableOpacity style={{height:13,justifyContent:'flex-start'}}>
        <Text style={style.blueone(color.darkblue)}>user agreement</Text>
        </TouchableOpacity> 

         <Text>{' '}and {' '}</Text>

         <TouchableOpacity style={{height:13,justifyContent:'flex-start'}}>
         <Text style={style.blueone(color.darkblue)}>terms of service </Text>
         </TouchableOpacity>
         <Text>of Tripify.</Text>
         </Text>

      </View>

    </View>
</View>   





    </View>

    </View>

  )
}