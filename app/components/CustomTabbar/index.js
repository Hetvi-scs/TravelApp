import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Home from '../../screens/Home';
import {TabBar} from 'react-native-tab-view';
import Createown from '../../screens/Createown';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {color, fontSize, fonts, size} from '../../theme';

const Tab = createMaterialTopTabNavigator();
export default function CustomeTabBar() {
  return (
    //   <NavigationContainer>
    //  <Tab.Navigator >

    //   <Tab.Screen name={"Home"} component={Home} ></Tab.Screen>

    //   <Tab.Screen name={"Createown"} component={Createown}></Tab.Screen>
    //  </Tab.Navigator>
    //  </NavigationContainer>
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
          borderWidth: 1.5,
          marginHorizontal: size.moderateScale(25),
          borderColor: 'rgba(11, 146, 158, 1)',
          height: size.moderateScale(44),
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(28, 154, 165, 0.05)',
              borderWidth: 1,
              borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              borderRadius: 5,
              height: size.moderateScale(30),
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: size.moderateScale(25),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.rama,
              }}>
              Upcoming
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
              Completed
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
              marginHorizontal: size.moderateScale(30),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
              Cancelled
            </Text>
          </View>
        </TouchableOpacity>
      </View>


      
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
          borderWidth: 1.5,
          marginHorizontal: size.moderateScale(25),
          borderColor: 'rgba(11, 146, 158, 1)',
          height: size.moderateScale(44),
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
              marginHorizontal: size.moderateScale(25),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
              Upcoming
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(28, 154, 165, 0.05)',
              borderWidth: 1,
              borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              borderRadius: 5,
              height: size.moderateScale(30),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.rama,
              }}>
              Completed
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
              marginHorizontal: size.moderateScale(25),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
              Cancelled
            </Text>
          </View>
        </TouchableOpacity>
      </View>



      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
          borderWidth: 1.5,
          marginHorizontal: size.moderateScale(25),
          borderColor: 'rgba(11, 146, 158, 1)',
          height: size.moderateScale(44),
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
              marginHorizontal: size.moderateScale(25),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
              Upcoming
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
               
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
              Completed
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(28, 154, 165, 0.05)',
              borderWidth: 1,
              borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(80),
              borderRadius: 5,
              height: size.moderateScale(30),
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: size.moderateScale(30),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.rama,
              }}>
              Cancelled
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
          borderWidth: 1.5,
          marginHorizontal: size.moderateScale(25),
          borderColor: 'rgba(11, 146, 158, 1)',
          height: size.moderateScale(44),
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(28, 154, 165, 0.05)',
              borderWidth: 1,
              borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(150),
              borderRadius: 5,
              height: size.moderateScale(30),
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: size.moderateScale(25),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
             Popular Destination
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(150),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
               
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
             Create your own
            </Text>
          </View>
        </TouchableOpacity>
        
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
          borderWidth: 1.5,
          marginHorizontal: size.moderateScale(25),
          borderColor: 'rgba(11, 146, 158, 1)',
          height: size.moderateScale(44),
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'rgba(28, 154, 165, 0.05)',
              // borderWidth: 1,
              // borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(120),
              // borderRadius: 5,
              // height: size.moderateScale(30),
              // alignItems: 'center',
              // justifyContent: 'center',
              marginHorizontal: size.moderateScale(16),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
             Popular Destination
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(28, 154, 165, 0.05)',
              borderWidth: 1,
              borderColor: 'rgba(11, 146, 158, 1)',
              width: size.moderateScale(150),
              borderRadius: 5,
              height: size.moderateScale(30),
              alignItems: 'center',
              justifyContent: 'center',
               
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                fontFamily: fonts.PoppinsRegular,
                color: color.lightblack,
              }}>
             Create your own
            </Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
