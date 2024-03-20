import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import {IcBlackstar, IcCheckRight, IcGraycross, color, fonts, size} from '../../theme';
  import Customheader from '../../components/CustomHeader';
  import MultiSlider from '@ptomasroos/react-native-multi-slider';
  import * as style from './styles';
  
  export default function Filter2() {
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
      {label: 'Students'},
      {label: 'Families'},
      {label: "Business Traveler's"},
    ];
    const items2 = [
      {label: 'Sightseeing'},
      {label: 'Food'},
      {label: 'Adventure'},
      {label: 'Shopping'},
      {label: 'Cultural Experiences'}, 
      {label: 'Nature and Wildlife'},
      
    ];
    
    const items3 = [
      {label: 'Historic'},
      {label: 'Modern'},
      {label: 'Royal'},
      {label: 'Heritage'},
      {label: 'Palace'},

    ];
    const items1 = [
      {label: '4★& above'},
      {label: '3★& above'},
    ];
    const handleClear = () => {
      setChecked([]);
    };
    return (
      <View>
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
              Travelers types
              </Text>
            </View>
  
            {items.map((item, index) => (
              <View key={index} style={style.maincheckboxview()}>
                <View style={{width: size.moderateScale(150)}}>
                  <Text style={style.labels()}>{item.label}</Text>
                </View>
                <View style={{marginHorizontal: 155}}>
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
              Ratings
              </Text>
            </View>
            {items1.map((item, index) => (
              <View key={index} style={style.maincheckboxview()}>
                <View style={{width: size.moderateScale(100)}}>
                  <Text style={style.labels()}>{item.label}</Text>
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
              Activities and Interests
              </Text>
             
              {items2.map((item, index) => (
                <View key={index} style={style.maincheckboxview1()}>
                  <View style={{width: size.moderateScale(170)}}>
                    <Text style={style.labels()}>{item.label}</Text>
                  </View>
                  <View style={{marginHorizontal: 135}}>
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
              Type of place
              </Text>
              {items3.map((item, index) => (
                <View key={index} style={style.maincheckboxview2()}>
                  <View style={{width: size.moderateScale(100)}}>
                    <Text style={style.labels()}>{item.label}</Text>
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
  
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View style={{width: 50, height: 50}}>
            <Text>open</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  