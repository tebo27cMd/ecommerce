import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// npm i react-native-elements
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function VideoComponent({ video }) {
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity>
        <Image
          style={{ width: '100%', height: 200, resizeMode: 'cover' }}
          source={{
            uri: video.thumbnail,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: '#000',
            color: '#fff',
            paddingHorizontal: 4,
          }}
        >
          {video.duration}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          paddingTop: 8,
          paddingHorizontal: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          <Image
            style={{ width: 40, height: 40, borderRadius: 100 }}
            source={{
              uri: video.creatorImg,
            }}
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text>{video.title}</Text>
          <Text style={{ color: '#222' }}>
            {`${video.creator} • ${video.views} • ${video.uploaded}`}
          </Text>
        </View>
        <View style={{ alignSelf: 'flex-start' }}>
          <Icon name='more-vert' />
        </View>
      </View>
    </View>
  );
}
function Home() {
  const [homeVideos] = useState([
    {
      title: 'Mirzapur 2 - Release Date Announcement | Amazon Original',
      creator: 'Amazon Prime Video India',
      views: '1 crore views',
      uploaded: '4 days ago',
      creatorImg:
        'https://images-eu.ssl-images-amazon.com/images/I/41mpv9rBhmL.png',
      thumbnail:
        'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2020/8/24/mirzapur-2.jpg',
      duration: '0:56',
    },
    {
      title: "I'm done with Typescript",
      creator: 'Ben Awad',
      views: '87k views',
      uploaded: '4 months ago',
      creatorImg:
        'https://avatars2.githubusercontent.com/u/7872329?s=460&u=f41fcb80dc9ce32a809caf9a6c4d9bf31c6ae11a&v=4',
      thumbnail: 'https://i.ytimg.com/vi/QVkPCb7MduY/maxresdefault.jpg',
      duration: '4:50',
    },
    {
      title: 'Deno crash course | Building API with Deno',
      creator: 'Hitesh Choudhary',
      views: '20k views',
      uploaded: '3 months ago',
      creatorImg:
        'https://yt3.ggpht.com/a/AATXAJygJrT2cs6jKFWU1uNCF-l85mvX56-emOWcTw=s900-c-k-c0xffffffff-no-rj-mo',
      thumbnail: 'http://i3.ytimg.com/vi/ll-8rtmq2Zc/maxresdefault.jpg',
      duration: '40:28',
    },
    {
      title: '#1 React, Styled Components and CSS',
      creator: 'Tanay Pratap',
      views: '1.9k views',
      uploaded: '3 months ago',
      creatorImg:
        'https://yt3.ggpht.com/a/AGF-l7-RMcYxA6-Qxzp43S3M4eHYc8-qPF8syhNIog=s900-c-k-c0xffffffff-no-rj-mo',
      thumbnail: 'http://i3.ytimg.com/vi/TOYJDi5zisQ/maxresdefault.jpg',
      duration: '41:27',
    },
    // Add more videos 
    // {
    //   title: '',
    //   creator: '',
    //   views: '',
    //   uploaded: '',
    //   creatorImg: '',
    //   thumbnail: '',
    //   duration: '',
    // },
  ]);

  return (
    <ScrollView>
      {homeVideos.map((video) => (
        <VideoComponent video={video} />
      ))}
      <View style={{ height: 200 }}></View>
    </ScrollView>
  );
}

function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenNameText}>Explore</Text>
    </View>
  );
}
function Subscriptions() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenNameText}>Subscriptions</Text>
    </View>
  );
}
function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenNameText}>Notifications</Text>
    </View>
  );
}
function Library() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenNameText}>Library</Text>
    </View>
  );
}

export default function YoutubeClone({ navigation }) {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    showNormalHeader();
  }, []);

  function showNormalHeader() {
    navigation.setOptions({
      headerLeft: () => (
        <View
          style={{
            marginLeft: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon name='youtube' type='font-awesome-5' color='red' />
          <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 4 }}>
            YouTube
          </Text>
        </View>
      ),
      title: '',
      headerRight: () => (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Icon name='cast' color='#444' />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Icon name='videocam' color='#444' />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 12 }}
            onPress={() => {
              showHeaderSearch();
            }}
          >
            <Icon name='search' color='#444' />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 14 }}>
            <Icon name='account-circle' color='#444' />
          </TouchableOpacity>
        </View>
      ),
    });
  }

  function showHeaderSearch() {
    navigation.setOptions({
      title: '',
      headerRight: () => null,
      headerLeft: () => (
        <View
          style={{
            height: 40,
            width: Dimensions.get('screen').width * 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              showNormalHeader();
            }}
          >
            <Icon name='arrow-back' color='#444' />
          </TouchableOpacity>
          <TextInput
            style={{
              height: 40,
              flex: 1,
              fontSize: 18,
              paddingHorizontal: 10,
            }}
            placeholder='Search'
            autoFocus
          />
          <TouchableOpacity
            style={{ paddingHorizontal: 4 }}
            onPress={() => {
              showNormalHeader();
            }}
          >
            <Icon name='search' color='#444' />
          </TouchableOpacity>
        </View>
      ),
    });
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#555',
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='home' color={color} />,
        }}
      />
      <Tab.Screen
        name='Explore'
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='explore' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Subscriptions'
        component={Subscriptions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='subscriptions' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='notifications' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Library'
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='video-library' color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: '500',
  },
});



// import Icon from 'react-native-vector-icons/FontAwesome';
// import * as Animatable from 'react-native-animatable';
// import React from 'react';
// import {
//     StyleSheet,
//     Text,
//     ScrollView,
//     View,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     TouchableWithoutFeedback,
//     Dimensions,
//     Keyboard,
//     Button,
//     SafeAreaView
// } from 'react-native';

// // import Food from './food';




// // const ContentComp = () => {
// //     return (
// //         <Food />
// //     )
// // };





// export default function Homepage() {

//     const [show, setShow] = React.useState(false);

//     return (
//         <SafeAreaView style={styles.mainContainer}>
//             <View style={styles.container} onPress={() => Keyboard.dismiss()}>

//                 <Icon
//                     style={styles.inputIcon}
//                     size="xxs"
//                     name='bars'
//                     type='ionicons'
//                     color='#FA4A0C'
//                 />
//                 <Icon
//                     style={styles.cartIcon}
//                     size="xxs"
//                     name='shopping-cart'
//                     type='ionicons'
//                     color='#FA4A0C'
//                 />
//                 <Animatable.Text
//                     style={styles.titleText}
//                     animation='fadeInUp'
//                     delay={1200}
//                 ><Text>
//                         <Text style={styles.header1}>Delicious</Text>
//                         {"\n"}
//                         <Text style={styles.header2} >  <View
//                             style={{
//                                 borderBottomColor: 'blue',
//                             }}
//                         /> food for you</Text>

//                     </Text>
//                 </Animatable.Text>
//                 <View style={styles.searchView}>
//                     <TextInput style={styles.searchBar}
//                         placeholder={'search...'}>

//                     </TextInput>

//                 </View>
//                 <View style={styles.itemLinks}>

                    
                       
//                             <TouchableOpacity onPress={() => setShow(!show)} style={styles.foodLink} >food</TouchableOpacity>

                         
                   
//                 </View>
//                 <ScrollView style={styles.displayFood}>
//                     {show && <ContentComp />}

//                 </ScrollView>

//             </View>
//             <View style={styles.nav}>
//                 <View style={styles.homeIcon}>
//                     <Icon
//                         style={styles.inputIcon}
//                         size="large"
//                         name='home'
//                         type='ionicons'
//                         color='#FA4A0C'
//                     />

//                 </View>
//                 <View style={styles.profileIcon}>
//                     <Icon
//                         style={styles.inputIcon}
//                         size="large"
//                         name='user'
//                         type='ionicons'
//                         color='#FA4A0C'
//                     />

//                 </View>
//                 <View style={styles.historyIcon}>
//                     <Icon
//                         style={styles.inputIcon}
//                         size="large"
//                         name='history'
//                         type='ionicons'
//                         color='#FA4A0C'
//                     />

//                 </View>

//             </View>


//         </SafeAreaView>




//     )

// }
// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         backgroundColor: '#EDEDED'
//     },
//     container: {
//         flex: 10,
//         backgroundColor: '#EDEDED',
//         position: 'relative',
//         maxHeight: '100%',
//         maxWidth: '100%',


//     },
//     inputIcon: {
//         marginTop: 20,
//         paddingVertical: 12,

//         paddingLeft: 12,
//     },
//     cartIcon: {
//         alignSelf: 'flex-end',
//         marginTop: -20,
//         paddingVertical: -12,
//         paddingRight: 12,
//     },
//     headerText: {
//         position: 'absolute',
//         width: '353px',
//         height: '41px',
//         left: '50px',
//         top: '132px'
//     },

//     header1: {
//         color: '#FA4A0C',
//         fontFamily: 'SourceSansProRegular',
//         fontSize: 30,

//     },
//     header2: {

//         fontSize: 16,
//     },
//     searchBar: {
//         marginTop: 20,
//         backgroundColor: '#FFE1D7',
//         borderRadius: '9px',
//         alignSelf: 'center',
//         width: '314px',
//         height: '40px',
//         paddingLeft: '30px',
//         shadowColor: 'black',
//         shadowOffset: {width: -2, height: 4},
//         shadowOpacity: 0.2,
//         shadowRadius: 3,


//     },
//     foodLink: {

//         height: '20px',
//         alignSelf: 'center',
//         fontFamily: 'Actor',
//         fontWeight: '400',
//         fontSize: '17px',
//     },
//     refreshmentsLink: {
//         width: '45px',
//         height: '20px',

//         alignSelf: 'center',


//     },
//     itemLinks: {
//         top: '40px',
//         marginTop: 10,
//         justifyContent: 'space-evenly',
//         backgroundColor: '#EDEDED',
//         flexDirection: 'row',


//     },
//     displayFood: {
       
//         flexWrap: 'wrap',
//         top: '90px',
//         backgroundColor: '#EDEDED',
//         maxHeight: '100%'
//     },
//     displayDrinks: {
//         top: '90px',
//         backgroundColor: 'purple',
//         maxHeight: '100%'
//     },
//     nav: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly'
//     }



// })





