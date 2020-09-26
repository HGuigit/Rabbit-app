import React, { useState } from 'react'
import { Picker, TouchableOpacity } from "react-native";
import { Text, View, Image, TextInput } from 'react-native';
import Logo from '../../assets/rabbit.png'
import calendar from '../../assets/calendario.png'
import styles from './styles'
import { Feather } from '@expo/vector-icons';


const header = () => {

  const [value, onChangeText] = useState('')
  const [selectedValue, setSelectedValue] = useState("Matérias");

    return( 

      <View>
            <View style = {styles.logoArea}>
              <TouchableOpacity>
                <Image style={styles.Logo}
                source={Logo}/>
              </TouchableOpacity>
            </View>
            <View style={styles.searchArea}>
                    <TextInput style={styles.searchbar}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Pesquisar'
                    value={value}
                    />
                    <TouchableOpacity>
                    <Image source={calendar} style={styles.calendarIcon}/>
                    </TouchableOpacity>
            </View>
            <View style={styles.filterList}>
                <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue) => { 
                    setSelectedValue(itemValue)
                    }
                }
                >
                <Picker.Item label="Matérias" value="null" />
                <Picker.Item label="Exatas" value="exatas" />
                <Picker.Item label="Humanas" value="humanas" />
                <Picker.Item label="Biológicas" value="biológicas" />
                <Picker.Item label="Outros" value="outros" />
                </Picker>
                <TouchableOpacity>    
                <Feather style={styles.clockIcon} name="clock" size={25} color="black"/>
                </TouchableOpacity>
            </View>
      </View>
    )

}



export default header;