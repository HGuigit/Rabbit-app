import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'
import tomato from '../../assets/tomato.png'
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import Header from './header'
import Body from './body'

const Home = () => {



    return(

    

    <View style = {styles.outcontainer}>
        <View style = {styles.container}>
        <Header/>
        
        <Body/>
        </View>
        <View>
            <TouchableOpacity style={styles.plusbutton}>
                    <Feather name="plus" size={25} style={{color: 'white'}}/>
            </TouchableOpacity>
        </View>
        <View style={ styles.bottombar }>
                <TouchableOpacity>
                    <Feather name="user" size={25} style={{color: 'white'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={tomato} style={{width: 25, height: 25,}}/>
                    
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="book-open" size={25} style={{color: 'white'}}/>    
                </TouchableOpacity>
         </View>
    </View>

    )
}


export default Home;

