import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import styles from './styles';
import logoImg from '../../assets/aquarela.png';
import historicoImg from '../../assets/historico.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Search from '../SearchBar/SearchBar';

class Header extends Component{
    
    render (){
    
    return(
    <View >
        <View style={styles.header}>
            <Image source={logoImg} />
        </View>

        <View style={styles.containerSearch}>
            <Search />
            <Feather name='calendar' size={40} style={{paddingTop:'2.5%'}} />
        </View>

        <View style={styles.containerTag}>
            <TouchableOpacity>
                <Text style={styles.TagExatas}>Exatas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.TagHumanas}>Humanas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.TagBiologicas}>Biológicas</Text>
            </TouchableOpacity>
                <TouchableOpacity>
            <Text style={styles.TagOutros}>Outros</Text>
                </TouchableOpacity>
                <Image source={historicoImg} style={{height:'1%', width:'11%', paddingBottom:'10%'}}/>
        
        </View>
        
    </View>
    )
    }
  }
  
  export default Header;
