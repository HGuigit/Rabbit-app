import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header/Header';
import List from '../../components/Flatlist/Flatlist';
import styles from './styles';


export default function Estudos(){
    return(
        <View style={{backgroundColor:'#4F3C75'}}>
            <View style={{backgroundColor:'#ffff', borderBottomEndRadius:53, borderBottomStartRadius:53}}>
            
                <Header />
                <List />

            </View>
        </View>
        
    );
} 