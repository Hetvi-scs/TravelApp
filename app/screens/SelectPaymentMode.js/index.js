import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Customheader from '../../components/CustomHeader'
import { IcBank, IcCard, IcEmi, IcGpay, IcHeaderBackArrow, IcPhonepay, IcRightBlueArrow, IcRightsideArrow, IcUpi, IcWallet, color, images, size } from '../../theme'
import * as style from './style'
import DueComponent from '../../components/DueNowComponent'


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

          <DueComponent/>


          <View style={style.paymain()}>
         <Text style={style.payopt()}>Payment options</Text>

         <View style={style.itemview()}>
            <FlatList
                data={list}
                renderItem={({item}) => (
           <TouchableOpacity style={style.itemslist()}>

           <View style={{marginHorizontal:size.moderateScale(12),}}>{item.img}</View>
           <View style={style.titles()}><Text>{item.title}</Text></View>
           <View style={style.sidearrow()}><IcRightBlueArrow/></View>
            {/* <View style={{backgroundColor:'gray',height:2,width:'100%'}}></View> */}
           </TouchableOpacity>
          )}
            />
         </View>
          </View>

    </View>
        

</View>

      
</View>
  )
}