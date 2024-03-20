import {View, Text, StatusBar, TouchableOpacity, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomeTabBar from '../../components/CustomTabbar';
import {IcCheckRight, IcGraycross, color, fontSize, fonts, size} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import NewDelhi from '../../screens/NewDelhi';
import Goa from '../../screens/Goa';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import {sort} from '../../components/CustomButton/styles';
import * as styles from './styles';
import Customheader from '../../components/CustomHeader';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


export default function FlightBookTop() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      tabBar={MyTabBar}>
      <Tab.Screen name="NewDelhi" component={NewDelhi} />
      <Tab.Screen name="Goa" component={Goa} />
    </Tab.Navigator>
  );
}

function MyTabBar({state}) {
  const [visibel, setVisible] = useState(false);

  const [checked, setChecked] = useState([]);
  const check = data => {
    if (checked.includes(data)) {
      setChecked(checked.filter(co => co !== data));
      return;
    }
    setChecked(co => co.concat(data));
  };
  const items = [
    {label: 'Non Stop'},
    {label: '1 Stop'},
    {label: 'More than 1'},
  ];
  const items2 = [
    {label: 'Before 6AM'},
    {label: '6AM - 12 Noon'},
    {label: '12 Noon - 6PM'},
    {label: 'After 6PM'},
  ];
  const items3 = [
    {label: 'Before 6AM'},
    {label: '6AM - 12 Noon'},
    {label: '12 Noon - 6PM'},
    {label: 'After 6PM'},
  ];
  const items1 = [
    {label: 'Air India'},
    {label: 'Air Asia'},
    {label: 'IndiGo'},
    {label: 'GoAir'},
    {label: 'Spicejet'},
    {label: 'Vistara'},
  ];
  const handleClear = () => {
    setChecked([]);
  };



  const [border, setBorder] = useState(1);
  const [it, setIt] = useState('Sat, jun 10');
  const navigation = useNavigation();

  const arr = [
    {
      text: 'Fri, jun 9',
    },
    {
      text: 'Sat, jun 10',
    },
    {
      text: 'Sun, jun 11',
    },
    {
      text: 'Mon,jun 12',
    },
    {
      text: 'Tue, jun 13',
    },
  ];

  const setitem = item => {
    setIt(item);
  };
  return (
    <GestureHandlerRootView>
    <View style={styles.mainView()}>
      <View style={styles.view1()}></View>
      {state.index == 0 ? (
        <CustomeTabBar
          onpress1={() => {
            navigation.navigate('NewDelhi');
          }}
          text1={'New Delhi - Goa'}
          text2={'Goa - Mumbai'}
          onpress2={() => {
            navigation.navigate('Goa');
          }}
          border={1}
        />
      ) : (
        <CustomeTabBar
          onpress1={() => {
            navigation.navigate('NewDelhi');
          }}
          text1={'New Delhi - Goa'}
          text2={'Goa - Mumbai'}
          onpress2={() => {
            navigation.navigate('Goa');
          }}
          border={0}
        />
      )}
      <View style={styles.view2()}>
        <View style={styles.jun()}>
          <Text style={styles.txt()}>JUN</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {arr.map(item => (
            <TouchableOpacity
              onPress={() => {
                setitem(item.text);
              }}>
              {it == item.text ? (
                <View style={styles.scroll()}>
                  <Text style={styles.scrolltxt2()}>{item.text}</Text>
                </View>
              ) : (
                <View style={styles.scroll2()}>
                  <Text style={styles.scrolltxt()}>{item.text}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.btn()}>
        <View style={styles.btnview()}>
          <CustomButton type={'sort'} text={'Sort'} onPress={() => {}} />
        </View>
        <View style={styles.btnview2()}>
          <CustomButton type={'sort'} text={'Filter'} onPress={() => {setVisible(true)}} />
        </View>
      </View>
    </View>

    <Modal
        visible={visibel}
        onRequestClose={() => setVisible(!visibel)}
        style={{height: 100, borderRadius: 8}}>
        <ScrollView>
          <Customheader
            type="first"
            onPress={() => setVisible(false)}
            img={<IcGraycross />}
            text="Filters"
            onPressl={handleClear}
            text1={'Clear'}></Customheader>
          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              flexDirection: 'column',
              marginVertical: size.moderateScale(15),
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Stops
            </Text>
          </View>

          {items.map((item, index) => (
            <View key={index} style={styles.maincheckboxview()}>
              <View style={{width: size.moderateScale(100)}}>
                <Text style={styles.labels()}>{item.label}</Text>
              </View>
              <View style={{marginHorizontal: 210}}>
                {checked.includes(item?.label) ? (
                  <TouchableOpacity onPress={() => check(item.label)}>
                    <View
                      style={{
                        height: size.moderateScale(24),
                        width: size.moderateScale(24),
                        borderWidth: size.moderateScale(2.5),
                        borderColor: color.rama,
                        borderRadius: size.moderateScale(6),
                      }}>
                      <View
                        style={{
                          height: size.moderateScale(20),
                          width: size.moderateScale(20),
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: color.rama,
                        }}>
                        <View
                          style={{
                            height: size.moderateScale(10),
                            width: size.moderateScale(10),
                          }}>
                          <IcCheckRight />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => check(item.label)}>
                    <View
                      style={{
                        height: size.moderateScale(24),
                        width: size.moderateScale(24),
                        borderWidth: size.moderateScale(2.5),
                        borderColor: color.gray,
                        borderRadius: size.moderateScale(6),
                      }}></View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}

          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              marginVertical: size.moderateScale(15),
              flexDirection: 'column',
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Airlines
            </Text>
          </View>
          {items1.map((item, index) => (
            <View key={index} style={styles.maincheckboxview()}>
              <View style={{width: size.moderateScale(100)}}>
                <Text style={styles.labels()}>{item.label}</Text>
              </View>
              <View style={{marginHorizontal: 210}}>
                {checked.includes(item.label) ? (
                  <TouchableOpacity onPress={() => check(item.label)}>
                    <View
                      style={{
                        height: size.moderateScale(24),
                        width: size.moderateScale(24),
                        borderWidth: size.moderateScale(2.5),
                        borderColor: color.rama,
                        borderRadius: size.moderateScale(6),
                      }}>
                      <View
                        style={{
                          height: size.moderateScale(20),
                          width: size.moderateScale(20),
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: color.rama,
                        }}>
                        <View
                          style={{
                            height: size.moderateScale(10),
                            width: size.moderateScale(10),
                          }}>
                          <IcCheckRight />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => check(item.label)}>
                    <View
                      style={{
                        height: size.moderateScale(24),
                        width: size.moderateScale(24),
                        borderWidth: size.moderateScale(2.5),
                        borderColor: color.gray,
                        borderRadius: size.moderateScale(6),
                      }}></View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              marginVertical: size.moderateScale(10),
              flexDirection: 'column',
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Price range
            </Text>
            <View style={{marginHorizontal: size.moderateScale(25)}}>
              <MultiSlider
                trackStyle={{
                  height: size.moderateScale(3),
                  borderRadius: size.moderateScale(4),
                }}
                values={[100]}
                selectedStyle={{backgroundColor: color.rama}}
                min={100}
                max={2000}></MultiSlider>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: size.moderateScale(21),
              }}>
              <Text>$100</Text>
              <View style={{marginLeft: size.moderateScale(205)}}>
                <Text>$2000</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              marginVertical: size.moderateScale(15),
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Departure Slot
            </Text>
            <View style={{marginVertical: size.moderateScale(20)}}>
              <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
                Departure Slot of the first flight
              </Text>
            </View>
            {items2.map((item, index) => (
              <View key={index} style={styles.maincheckboxview1()}>
                <View style={{width: size.moderateScale(100)}}>
                  <Text style={styles.labels()}>{item.label}</Text>
                </View>
                <View style={{marginHorizontal: 210}}>
                  {checked.includes(item.label) ? (
                    <TouchableOpacity onPress={() => check(item.label)}>
                      <View
                        style={{
                          height: size.moderateScale(24),
                          width: size.moderateScale(24),
                          borderWidth: size.moderateScale(2.5),
                          borderColor: color.rama,
                          borderRadius: size.moderateScale(6),
                        }}>
                        <View
                          style={{
                            height: size.moderateScale(20),
                            width: size.moderateScale(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: color.rama,
                          }}>
                          <View
                            style={{
                              height: size.moderateScale(10),
                              width: size.moderateScale(10),
                            }}>
                            <IcCheckRight />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => check(item.label)}>
                      <View
                        style={{
                          height: size.moderateScale(24),
                          width: size.moderateScale(24),
                          borderWidth: size.moderateScale(2.5),
                          borderColor: color.gray,
                          borderRadius: size.moderateScale(6),
                        }}></View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
          <View
            style={{
              marginVertical: size.moderateScale(20),
              marginHorizontal: size.moderateScale(25),
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Departure Slot of the Second flight
            </Text>
            {items3.map((item, index) => (
              <View key={index} style={styles.maincheckboxview2()}>
                <View style={{width: size.moderateScale(100)}}>
                  <Text style={styles.labels()}>{item.label}</Text>
                </View>
                <View style={{marginHorizontal: 210}}>
                  {checked.includes(item.label) ? (
                    <TouchableOpacity onPress={() => check(item.label)}>
                      <View
                        style={{
                          height: size.moderateScale(24),
                          width: size.moderateScale(24),
                          borderWidth: size.moderateScale(2.5),
                          borderColor: color.rama,
                          borderRadius: size.moderateScale(6),
                        }}>
                        <View
                          style={{
                            height: size.moderateScale(20),
                            width: size.moderateScale(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: color.rama,
                          }}>
                          <View
                            style={{
                              height: size.moderateScale(10),
                              width: size.moderateScale(10),
                            }}>
                            <IcCheckRight />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => check(item.label)}>
                      <View
                        style={{
                          height: size.moderateScale(24),
                          width: size.moderateScale(24),
                          borderWidth: size.moderateScale(2.5),
                          borderColor: color.gray,
                          borderRadius: size.moderateScale(6),
                        }}></View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </Modal>
</GestureHandlerRootView>
  );
}
