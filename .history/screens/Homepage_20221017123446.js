

import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    Keyboard,
    Button,
    SafeAreaView
} from 'react-native';

// import Food from './food';




const ContentComp = () => {
    return (
        <Food />
    )
};





export default function Homepage() {

    const [show, setShow] = React.useState(false);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container} onPress={() => Keyboard.dismiss()}>

                <Icon
                    style={styles.inputIcon}
                    size="xxs"
                    name='bars'
                    type='ionicons'
                    color='#FA4A0C'
                />
                <Icon
                    style={styles.cartIcon}
                    size="xxs"
                    name='shopping-cart'
                    type='ionicons'
                    color='#FA4A0C'
                />
                <Animatable.Text
                    style={styles.titleText}
                    animation='fadeInUp'
                    delay={1200}
                ><Text>
                        <Text style={styles.header1}>Delicious</Text>
                        {"\n"}
                        <Text style={styles.header2} >  <View
                            style={{
                                borderBottomColor: 'blue',
                            }}
                        /> food for you</Text>

                    </Text>
                </Animatable.Text>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchBar}
                        placeholder={'search...'}>

                    </TextInput>

                </View>



            </View>
            <View style={styles.itemLinks}>



                



            </View>
           
            <View style={styles.nav}>
                <View style={styles.homeIcon}>
                    <Icon
                        style={styles.inputIcon}
                        size="large"
                        name='home'
                        type='ionicons'
                        color='#FA4A0C'
                    />

                </View>
                <View style={styles.profileIcon}>
                    <Icon
                        style={styles.inputIcon}
                        size="large"
                        name='user'
                        type='ionicons'
                        color='#FA4A0C'
                    />

                </View>
                <View style={styles.historyIcon}>
                    <Icon
                        style={styles.inputIcon}
                        size="large"
                        name='history'
                        type='ionicons'
                        color='#FA4A0C'
                    />

                </View>

            </View>


        </View>




    )

}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        padding: 20,
        maxHeight: 10000

    },
    container: {

        backgroundColor: '#EDEDED',
        position: 'relative',
        maxHeight: '100%',
        maxWidth: '100%',


    },
    inputIcon: {
        marginTop: 20,
        paddingVertical: 12,

        paddingLeft: 12,
    },
    cartIcon: {
        alignSelf: 'flex-end',
        marginTop: -20,
        paddingVertical: -12,
        paddingRight: 12,
    },
    headerText: {
        position: 'absolute',
        width: '353px',
        height: '41px',
        left: '50px',
        top: '132px'
    },

    header1: {
        color: '#FA4A0C',
        fontFamily: 'SourceSansProRegular',
        fontSize: 30,

    },
    header2: {

        fontSize: 16,
    },
    searchBar: {
        marginTop: 20,
        backgroundColor: '#FFE1D7',
        borderRadius: '9px',
        alignSelf: 'center',
        width: '314px',
        height: '40px',
        paddingLeft: '30px',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,


    },
    foodLink: {

        height: '20px',
        alignSelf: 'center',
        fontFamily: 'Actor',
        fontWeight: '400',
        fontSize: '17px',
    },
    refreshmentsLink: {
        width: '45px',
        height: '20px',

        alignSelf: 'center',


    },

    displayFood: {

        // flexWrap: 'wrap',
        // top: '90px',
        // backgroundColor: '#EDEDED',
        // maxHeight: '100%'
    },
    displayDrinks: {
        top: '90px',
        backgroundColor: 'purple',
        maxHeight: '100%'
    },
    nav: {

        flexDirection: 'row',
        justifyContent: 'space-evenly'

    }



})





