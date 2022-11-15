
import pic1 from "../assets/food1.jpeg"

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    Keyboard,
    Button,
} from 'react-native';
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Food() {


    return (
        <View style={styles.container}>
            <View style={styles.food1}>
                <View style={styles.foodImage} >
                    <Image style={{ width: 66, height: 66, borderRadius: '50px' }}
                        source={pic1} />
                </View>
                <View style={styles.foodText}>
                    <Text>
                        pork and berry sauce
                    </Text>

                </View>
                <View style={styles.foodPrice}>
                    <Text style={{color:'#FA4A0C', fontFamily:'Actor'}}>
                        R120.00
                    </Text>

                </View>


            </View>
            <View style={styles.spanner} />
            <View style={styles.food1 }>
                <View style={styles.foodImage} >
                    <Image style={{ width: 66, height: 66, borderRadius: '50px' }}
                        source={pic1} />
                </View>
                <View style={styles.foodText}>
                    <Text  style={{fontFamily:'Actor'}}>
                        pork and berry sauce
                    </Text>

                </View>
                <View style={styles.foodPrice}>
                    <Text style={{color:'#FA4A0C', fontFamily:'Actor'}}>
                        R120.00
                    </Text>

                </View>


            </View>
            <View style={styles.spanner} />
            <View style={styles.food1}>
                <View style={styles.foodImage} >
                    <Image style={{ width: 66, height: 66, borderRadius: '50px' }}
                        source={pic1} />
                </View>
                <View style={styles.foodText}>
                    <Text  style={{fontFamily:'Actor'}}>
                        pork and berry sauce
                    </Text>

                </View>
                <View style={styles.foodPrice}>
                    <Text style={{color:'#FA4A0C', fontFamily:'Actor'}}>
                        R120.00
                    </Text>

                </View>


            </View>
            <View style={styles.spanner} />
            <View style={styles.food1 }>
                <View style={styles.foodImage} >
                    <Image style={{ width: 66, height: 66, borderRadius: '50px' }}
                        source={pic1} />
                </View>
                <View style={styles.foodText}>
                    <Text  style={{fontFamily:'Actor'}}>
                        pork and berry sauce
                    </Text>

                </View>
                <View style={styles.foodPrice}>
                    <Text style={{color:'#FA4A0C', fontFamily:'Actor',}}>
                        R120.00
                    </Text>

                </View>


            </View>
            <View style={styles.spanner} />
            <View style={styles.food1 }>
                <View style={styles.foodImage} >
                    <Image style={{ width: 66, height: 66, borderRadius: '50px' }}
                        source={pic1} />
                </View>
                <View style={styles.foodText}>
                    <Text style={{fontFamily:'Actor'}}>
                        pork and berry sauce
                    </Text>

                </View>
                <View style={styles.foodPrice}>
                    <Text style={{color:'#FA4A0C', fontFamily:'Actor'}}>
                        R120.00
                    </Text>

                </View>


            </View>
            <View style={styles.spanner} />
        

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
       
        flex: 12,
        flexWrap: 'wrap',
        backgroundColor: '#EDEDED',
    },
    food1: {
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
     
        alignSelf: 'center',
        flexDirection: 'row',
      
        backgroundColor: 'white',
        borderRadius: '30px',
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
 

    foodImage: {
     


    },
    foodText: {
        alignSelf: 'center',
        paddingLeft: '40px',
        flexWrap: 'wrap',
    },
    foodPrice: {
        alignSelf: 'center',
        paddingLeft: '70px',
        fontFamily: 'SourceSansProRegular',
        color:' #FA4A0C'
    },
    food2: {

        top: '7px',
        alignSelf: 'center',
        flexDirection: 'row',
        marginLeft: '12px',
        backgroundColor: 'red',
        borderRadius: '30px',

    },
    spanner: {
        height: "10px",
       
    }



})