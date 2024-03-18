import {color, fontSize, fonts, size} from '../../theme';


export const container = () => ({
    backgroundColor: color.white,
    //   backgroundColor: 'rgb(160, 242, 155)',
  //   height: size.moderateScale(300),
    // borderRadius: size.moderateScale(8),
    marginHorizontal: size.moderateScale(25),
    // flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
  });
export const mainimage = () => ({
  backgroundColor: color.white,
    // backgroundColor: 'yellow',
//   height: size.moderateScale(300),
  borderRadius: size.moderateScale(8),
//   marginHorizontal: size.moderateScale(25),
  flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
});
export const secmain = () => ({
    // backgroundColor: color.white,
      backgroundColor: 'pink',
    // height: size.moderateScale(300),
    // borderRadius: size.moderateScale(8),
    marginHorizontal: size.moderateScale(8),
    //   justifyContent: 'center',
      alignItems: 'center',
     marginVertical: size.moderateScale(18),
     flexDirection: 'row',
     justifyContent: 'center',
    //   height:20

  });
export const bigimage = () => ({
  height: size.moderateScale(139),
  width: size.moderateScale(105),
  borderRadius: size.moderateScale(6),
});
export const bigimageview = () => ({
  marginVertical: size.moderateScale(12),
  marginHorizontal: size.moderateScale(7),
});
export const fourimageview = () => ({
  height: size.moderateScale(138),
  width: size.moderateScale(218),
  marginVertical: size.moderateScale(12),
});
export const firstview = () => ({
  marginRight: size.moderateScale(1),
});
export const secondview = () => ({
  marginHorizontal: size.moderateScale(5),
});
export const thirdview = () => ({
  // marginHorizontal:size.moderateScale(2),
  marginRight: size.moderateScale(1),
  flexDirection: 'row',
});
export const fourthview = () => ({
  marginHorizontal: size.moderateScale(5),
  flexDirection: 'row',
  justifyContent: 'center',
});
export const firsttwoimg = () => ({
  flexDirection: 'row',
});
export const secondtwoimg = () => ({
  flexDirection: 'row',
  marginVertical: size.moderateScale(5),
});
export const oneimg = () => ({
  height: size.moderateScale(66),
  width: size.moderateScale(98),
  borderRadius: size.moderateScale(6),
});
export const twoimg = () => ({
  height: size.moderateScale(66),
  width: size.moderateScale(98),
  borderRadius: size.moderateScale(6),
});
export const threeimg = () => ({
  height: size.moderateScale(66),
  width: size.moderateScale(98),
  borderRadius: size.moderateScale(6),
});
export const imgtxt = () => ({
  color: color.white,
  fontFamily: fonts.PoppinsBold,
  fontSize: fontSize.large,
});
export const imgtxtview = () => ({
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: size.moderateScale(66),
  width: size.moderateScale(98),
});
export const dotview = () => ({
    height:4,
    width:4,
    backgroundColor:'rgba(84, 84, 84, 1)',
    borderRadius:10,
    alignSelf:'center',
    // marginBottom:size.moderateScale(12),
    // justifyContent: 'center',
    //   alignItems: 'center',


  });
  export const reviewtxt = () => ({
    // color:color.white,
    fontFamily: fonts.extrasmall,
    fontSize: fontSize.extrasmall,
    // marginHorizontal:size.moderateScale(5),
    // borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  });
  export const leftview = () => ({
    flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor:"purple"
  });
  export const starview = () => ({
    //   justifyContent: 'center',
    //   alignItems: 'center',
  });
  export const rightview = () => ({
    flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor:"red"
  });