// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import * as style from './style'
// import { IcGreenActiveStar, IcGreenHalfStar, fontSize, images, size } from '../../theme'
// import CustomReview2 from '../CustomeReview2'

// export default function PopularDesCrad() {
//   return (
// <View style={style.container()}>

//    <View style={style.mainimage()}>
//         <View style={style.bigimageview()}>
//             <Image
//                 source={images.delhitemple}
//                 style={style.bigimage()}
//             />
//         </View>

// <View style={style.fourimageview()}>
//     <View style={style.firsttwoimg()}>
//            <View style={style.firstview()}>
//            <Image
//                 source={images.building}
//                 style={style.oneimg()}
//             />
//            </View>
//            <View style={style.secondview()}>
//             <Image
//                 source={images.tajmahal}
//                 style={style.twoimg()}
//             />
//             </View>
//      </View>

//      <View style={style.secondtwoimg()}>
//          <View style={style.thirdview()}>
//             <Image
//                 source={images.people}
//                 style={style.threeimg()}
//             />
//             </View>
//             <View style={style.fourthview()}>
//             <Image
//                 source={images.memorial}
//                 style={style.threeimg()}
//             />
//             <View style={style.imgtxtview()}>
//             <Text style={style.imgtxt()}>+40</Text></View>
//             </View>
//      </View>
//      </View>

//    </View>

// <View style={style.secmain()}>
// {/* <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
//    <CustomReview2/>
//     <View
//     style={style.dotview()}>
//     </View>

//     </View>
//     <View style={style.reviewtxt()}>
//     <Text>Very good 200 Reviews</Text>
//     <Text>Starting at $40.7</Text>
//     </View> */}
//        <View style={style.leftview()}>
//            <View style={style.starview}><CustomReview2/></View>
//             <View
//              style={style.dotview()}>
//             </View>
//             <View><Text style={style.reviewtxt()}>Very good 200 Reviews</Text>
//             </View>
//        </View>
//        <View style={style.rightview()}>
//        <Text>Starting at $40.7</Text>
//        </View>

// </View>

// </View>
//   )
// }

//************************************************************************

import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IcLocation,
  IcTrustedPart,
  IcWhiteheart,
  color,
  fontSize,
  fonts,
  images,
  size,
} from '../../theme';
import CustomReview2 from '../CustomeReview2';
import CustomButton from '../CustomButton';

export default function PopularDesCrad({
  type,
  img1,
  img2,
  img3,
  img4,
  img5,
  rtxt,
  price,
  pernight,
  count,
  location,
  distance,
  brftxt,
  btntxt,
  days,
}) {
  return (
    <View>
      <View
        style={{
          height: size.moderateScale(275),
          marginHorizontal: size.moderateScale(25),
          borderRadius: 8,
          borderWidth: 0.5,
          borderColor: color.gray,
          backgroundColor: color.white,
          // backgroundColor:'rgb(177, 246, 186)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: size.moderateScale(5),
            marginHorizontal: size.moderateScale(4),
          }}>
          <Image
            source={img1}
            style={{
              height: size.moderateScale(135),
              width: size.moderateScale(105),
              borderRadius: 6,
            }}></Image>
          <View
            style={{
              position: 'absolute',
              marginVertical: size.moderateScale(8),
              marginHorizontal: size.moderateScale(5),
            }}>
            <TouchableOpacity>
              <IcWhiteheart></IcWhiteheart>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 6}}>
            <Image
              source={img2}
              style={{
                width: size.moderateScale(96),
                height: size.moderateScale(62),
                borderRadius: 6,
              }}></Image>
            <Image
              source={img3}
              style={{
                width: size.moderateScale(96),
                height: size.moderateScale(62),
                borderRadius: 6,

                marginVertical: 11,
              }}></Image>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 1}}>
            <Image
              source={img4}
              style={{
                width: size.moderateScale(99),
                height: size.moderateScale(62),
                borderRadius: 6,
              }}></Image>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                borderWidth: 1.5,
                borderRadius: 6,
                width: size.moderateScale(99),
                height: size.moderateScale(64),
                marginVertical: 10,
              }}>
              <Image
                source={img5}
                style={{
                  width: size.moderateScale(98),
                  height: size.moderateScale(62),
                  borderRadius: 6,
                  resizeMode: 'cover',
                }}></Image>
              <View
                style={{
                  position: 'absolute',
                  width: size.moderateScale(96),
                  height: size.moderateScale(64),
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                  elevation: 100,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsRegular,
                    color: color.white,
                    fontSize: fontSize.large,
                  }}>
                  {count}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: size.moderateScale(5),
          }}>
          <CustomReview2 type={type}></CustomReview2>
          <View
            style={{
              height: 3,
              width: 3,
              backgroundColor: color.gray,
              marginVertical: 7,
              marginHorizontal: 7,
              borderRadius: 8,
              flexDirection: 'row',
            }}></View>
          <Text
            style={{
              fontSize: size.moderateScale(10),
              fontFamily: fonts.PoppinsLight,
              color: color.black,
            }}>
            Very good
          </Text>
          <Text
            style={{
              fontSize: size.moderateScale(10),
              fontFamily: fonts.PoppinsLight,
              marginHorizontal: size.moderateScale(5),
              color: color.black,
            }}>
            {rtxt}
          </Text>
          <Text
            style={{
              fontSize: size.moderateScale(10),
              fontFamily: fonts.PoppinsLight,
              color: color.black,
            }}>
            reviews
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: size.moderateScale(13),
              }}>
              <Text
                style={{
                  fontSize: size.moderateScale(11),
                  fontFamily: fonts.PoppinsRegular,
                  color: color.black,
                }}>
                Starting at
              </Text>
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  color: color.black,
                  fontFamily: fonts.PoppinsMedium,
                  marginHorizontal: size.moderateScale(3),
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  color: color.black,
                  fontFamily: fonts.PoppinsMedium,
                }}>
                {price}
              </Text>
            </View>
            <View style={{marginHorizontal: size.moderateScale(60)}}></View>
          </View>
        </View>

        <View style={{flexDirection: 'column', marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginHorizontal: size.moderateScale(5),

                flexDirection: 'row',
                marginVertical: size.moderateScale(5),
                //   backgroundColor:'purple',
                width: 200,
              }}>
              <IcLocation width={15} />
              <Text
                style={{
                  fontSize: fontSize.small,
                  fontFamily: fonts.PoppinsMedium,
                  color: color.black,
                  marginVertical: size.moderateScale(-5),
                  // backgroundColor:'red'
                }}>
                {location}
              </Text>
            </View>
            <View
              style={{
                //   width: size.moderateScale(80),
                marginHorizontal: size.moderateScale(55),
                //   backgroundColor:'yellow',
                //   alignItems:'flex-end'
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor:'pink',
                  height: size.moderateScale(20),
                  width: size.moderateScale(81),
                  borderWidth: 1,
                  borderColor: color.semigray,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignItems: 'center',
                  marginLeft: size.moderateScale(-16),
                  borderRadius: size.moderateScale(6),
                }}>
                <Text
                  style={{
                    fontSize: size.moderateScale(11),
                    fontFamily: fonts.PoppinsRegular,
                    // marginHorizontal:size.moderateScale(5),
                    color: color.black,
                  }}>
                  {days}
                </Text>
                <Text
                  style={{
                    fontSize: size.moderateScale(11),
                    color: color.black,
                    fontFamily: fonts.PoppinsRegular,
                  }}>
                  days tour
                </Text>
              </View>
            </View>
          </View>
          {/* ----------------------------- */}
          <View style={{marginHorizontal: size.moderateScale(8)}}>
            <Text
              style={{
                color: color.lightblue,
                fontFamily: fonts.PoppinsBold,
                fontSize: fontSize.extrasmall,
              }}>
              {brftxt}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: size.moderateScale(340),
            }}>
            <View
              style={{
                width: size.moderateScale(95),
                marginVertical: size.moderateScale(-15),
                marginHorizontal: size.moderateScale(5),
              }}>
              <CustomButton type={'booknow'} text={btntxt}></CustomButton>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: size.moderateScale(112),
              }}>
              <IcTrustedPart width={19} />
              <Text
                style={{
                  fontSize: size.moderateScale(10),
                  fontFamily: fonts.PoppinsSemiBold,
                  color: color.black,
                }}>
                Trusted Partner
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
