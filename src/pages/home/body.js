import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles'
import calculator from '../../assets/calculator.png'
import virus from '../../assets/virus.png'
import livroHumanas from '../../assets/study.png'
import livroOutros from '../../assets/book.png'




const body = () => {

    const ESTUDOS = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Geometria Analítica',
          tipo: 'exatas',
          diacomeco: 10,
          mescomeco: 11,
          anocomeco: 2020,
          horacomeco: 10,
          mincomeco: 30,
          diarevisao: 20,
          mesrevisao: 11,
          anorevisao: 2020, 
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Invasões Holandesas',
          tipo: 'humanas',
          diacomeco: 10,
          mescomeco: 11,
          anocomeco: 2020,
          horacomeco: 10,
          mincomeco: 30,
          diarevisao: 20,
          mesrevisao: 11,
          anorevisao: 2020, 
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Mitocondria',
          tipo: 'biologicas',
          diacomeco: 10,
          mescomeco: 11,
          anocomeco: 2020,
          horacomeco: 10,
          mincomeco: 30,
          diarevisao: 20,
          mesrevisao: 11,
          anorevisao: 2020, 
        },
        {
            id: '986x94a0f-3da1-471f-bd96-145571e29d72',
            title: 'Engenharia Elétrica',
            tipo: 'outros',
            diacomeco: 10,
            mescomeco: 11,
            anocomeco: 2020,
            horacomeco: 10,
            mincomeco: 30,
            diarevisao: 20,
            mesrevisao: 11,
            anorevisao: 2020, 
          },
      ];

      const renderEstudo = ({item}) => {

      let tipo_estudo = null;

         if(item.tipo === 'exatas'){
             //Método para alternar cor do relogio???
             return(
                <View style={styles.card}>
                  <Image source={calculator} style={styles.imagemFundoCard}/>
                  <View style={[styles.marcadorexatas, styles.marcador]}/>
                  
                  <View style={styles.cardexatas}>
                  
                    <View style={styles.titulocard}>
                        <Text style={styles.tituloexatas}>{item.title}</Text>
                        <Feather name="clock" size={28} color='brown'/>
                    </View>

                    <View style={styles.datascard}>
                        <Text style={styles.datatext1}>Começa em: {item.diacomeco}/{item.mescomeco}/{item.anocomeco} às {item.diarevisao}:{item.mesrevisao}</Text>
                        <Text style={styles.datatext2}>Próxima revisão em {item.diarevisao}/{item.mesrevisao}/{item.anorevisao}</Text>
                    </View>

                    <View style={styles.bottomcard}>
                        <TouchableOpacity style={[styles.resumobutton, styles.resumobuttonexatas]}>
                             <Text style={[styles.textbutton, styles.textbuttonexatas]}>Resumo</Text>
                        </TouchableOpacity>
                        <View style={styles.iconseditplay}>
                        <TouchableOpacity style={{paddingRight:10}}>
                            <Feather name="play-circle" size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="edit" size={25}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                  </View>
                </View>

             )
         }else if(item.tipo === 'humanas'){
             return(
            <View style={styles.card}>
                <Image source={livroHumanas} style={styles.imagemFundoCard}/>
                <View style={[styles.marcadorhumanas, styles.marcador]}/>
                <View style={styles.cardhumanas}>
                  <View style={styles.titulocard}>
                      <Text style={styles.titulohumanas}>{item.title}</Text>
                      <Feather name="clock" size={28} color='brown'/>
                  </View>

                  <View style={styles.datascard}>
                      <Text style={styles.datatext1}>Começa em: {item.diacomeco}/{item.mescomeco}/{item.anocomeco} às {item.diarevisao}:{item.mesrevisao}</Text>
                      <Text style={styles.datatext2}>Próxima revisão em {item.diarevisao}/{item.mesrevisao}/{item.anorevisao}</Text>
                  </View>

                  <View style={styles.bottomcard}>
                      <TouchableOpacity style={[styles.resumobutton, styles.resumobuttonhumanas]}>
                           <Text style={[styles.textbutton, styles.textbuttonhumanas]}>Resumo</Text>
                      </TouchableOpacity>
                      <View style={styles.iconseditplay}>
                      <TouchableOpacity style={{paddingRight:10}}>
                          <Feather name="play-circle" size={25}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Feather name="edit" size={25}/>
                      </TouchableOpacity>
                      </View>
                  </View>
                </View>
              </View>

             )
         }else if(item.tipo === 'biologicas'){
             return(
                <View style={styles.card}>
                <Image source={virus} style={styles.imagemFundoCard}/>
                <View style={[styles.marcadorbiologicas, styles.marcador]}/>
                <View style={styles.cardbiologicas}>
                  <View style={styles.titulocard}>
                      <Text style={styles.titulobiologicas}>{item.title}</Text>
                      <Feather name="clock" size={28} color='brown'/>
                  </View>

                  <View style={styles.datascard}>
                      <Text style={styles.datatext1}>Começa em: {item.diacomeco}/{item.mescomeco}/{item.anocomeco} às {item.diarevisao}:{item.mesrevisao}</Text>
                      <Text style={styles.datatext2}>Próxima revisão em {item.diarevisao}/{item.mesrevisao}/{item.anorevisao}</Text>
                  </View>

                  <View style={styles.bottomcard}>
                      <TouchableOpacity style={[styles.resumobutton, styles.resumobuttonbiologicas]}>
                           <Text style={[styles.textbutton, styles.textbuttonbiologicas]}>Resumo</Text>
                      </TouchableOpacity>
                      <View style={styles.iconseditplay}>
                      <TouchableOpacity style={{paddingRight:10}}>
                          <Feather name="play-circle" size={25}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Feather name="edit" size={25}/>
                      </TouchableOpacity>
                      </View>
                  </View>
                </View>
              </View>


             )
         }
        else if(item.tipo === 'outros'){
            return(
                
                <View style={styles.card}>
                <Image source={livroOutros} style={styles.imagemFundoCard}/>
                <View style={[styles.marcadoroutros, styles.marcador]}/>
                <View style={styles.cardoutros}>
                  <View style={styles.titulocard}>
                      <Text style={styles.titulooutros}>{item.title}</Text>
                      <Feather name="clock" size={28} color='brown'/>
                  </View>

                  <View style={styles.datascard}>
                      <Text style={styles.datatext1}>Começa em: {item.diacomeco}/{item.mescomeco}/{item.anocomeco} às {item.diarevisao}:{item.mesrevisao}</Text>
                      <Text style={styles.datatext2}>Próxima revisão em {item.diarevisao}/{item.mesrevisao}/{item.anorevisao}</Text>
                  </View>

                  <View style={styles.bottomcard}>
                      <TouchableOpacity style={[styles.resumobutton, styles.resumobuttonoutros]}>
                           <Text style={[styles.textbutton, styles.textbuttonoutros]}>Resumo</Text>
                      </TouchableOpacity>
                      <View style={styles.iconseditplay}>
                      <TouchableOpacity style={{paddingRight:10}}>
                          <Feather name="play-circle" size={25}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Feather name="edit" size={25}/>
                      </TouchableOpacity>
                      </View>
                  </View>
                </View>
              </View>


            )
        }

      }



    return(        
    
            <View style={styles.studies}>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={ESTUDOS}
                renderItem={renderEstudo}
                keyExtractor={item => item.id}
                />
            </View>
    )
}

export default body