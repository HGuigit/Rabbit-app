import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
header: {
    paddingTop: Constants.statusBarHeight+20,
    paddingHorizontal: 24,
    color: '#0000',
},


containerSearch: {
    justifyContent:'space-around', 
    paddingTop:'3%', 
    paddingHorizontal:'5%', 
    flexDirection:'row',
},

containerSearch2: {
    backgroundColor: 'transparent', 
    width:'80%', 
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
},

containerTag: {
    flexDirection: 'row',
    paddingTop: '3%',
    justifyContent:'space-between',
    paddingHorizontal: '8%',
     
},

TagExatas:{
    color: '#2274A5',
    fontWeight: 'bold',
},

TagHumanas:{
    color: '#E83F6F',
    fontWeight: 'bold',
},

TagBiologicas:{
    color: '#32936F',
    fontWeight: 'bold',
},

TagOutros:{
    color: '#1D0E39',
    fontWeight: 'bold',
},

});