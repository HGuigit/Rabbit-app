import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'



export default StyleSheet.create({
    outcontainer:{
        flex: 1,
        backgroundColor: '#4F3C75'
    },
    container:{
        paddingHorizontal: 16,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFFFFF',
        borderBottomEndRadius: 22,
        borderBottomStartRadius: 22,
        height: '92.5%',
    },
    Logo:{
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    searchbar:{
        width: '77%',
        height: 35,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: '#EBEBEB',
        padding: 10,
    },
    logoArea:{
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    searchArea:{
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    calendarIcon:{
        width: 20,
        height: 20,
        marginRight: 20,
        marginLeft: 1,
    },
    filterList:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clockIcon:{
        marginRight: 17,
        marginLeft: 1,
    },
    studies:{
        flex: 1,
    },
    
    card:{
        width: '98%',
        height: 193,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 5,
        fontFamily: 'inter',
        flexDirection: 'row',
    },
    titulocard:{
        marginTop: 21,
        marginLeft: 21,
        marginRight: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',     
    },
    tituloexatas:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#164B69',
    },
    titulohumanas:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#882541',
    },
    titulooutros:{
        fontSize: 20,
        fontWeight: "bold",
        color: 'rgba(0,0,0,0.6)',
    },
    titulobiologicas:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#026600',
    },
    cardexatas:{
        flex: 1,
        backgroundColor: 'rgba(34,116,165,0.24)',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        zIndex: -1,
    },
    datascard:{
        marginTop: 14,
        marginLeft: 17,
       
    },
    datatext1:{
        padding: 3,
    },
    datatext2:{
        padding: 3,
        fontWeight: 'bold',
        
    },
    resumobutton:{
        width: 100,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resumobuttonexatas:{
        backgroundColor: '#A3CAE1',
    },
    resumobuttonhumanas:{
        backgroundColor: '#EDABBE',
    },
    resumobuttonbiologicas:{
        backgroundColor: '#ABD8C8',
    },
    resumobuttonoutros:{
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    textbutton:{
        fontWeight: 'bold',
    },
    textbuttonexatas:{
        color: '#164B69',
    },
    textbuttonhumanas:{
        color: '#882541',
    },
    textbuttonbiologicas:{
        color: '#026600',
    },
    textbuttonoutros:{
        color: 'rgba(0,0,0,0.6)',
    },
    bottomcard:{
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconseditplay:{
        flexDirection: 'row',
    },
    cardbiologicas:{
        flex: 1,
        backgroundColor: 'rgba(50,147,111,0.3)',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
    cardhumanas:{
        flex: 1,
        backgroundColor: 'rgba(233,0,82,0.24)',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
    cardoutros:{
        flex: 1,
        backgroundColor: 'rgba(219,215,215,0.5)',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
    marcador:{
        width: 6,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    marcadorexatas:{
        backgroundColor: '#2274A5',
    },
    marcadorhumanas:{
        backgroundColor: '#E90052',
    },
    marcadorbiologicas:{
        backgroundColor: '#32936F',
    },
    marcadoroutros:{
        backgroundColor: '#dbd7d7'
    },
    Imagebackground:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        zIndex: 0,
    },
    bottombar:{
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#4F3C75',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '7.5%',
        paddingHorizontal: 55,
        alignItems: 'center'
    },
    plusbutton:{
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 15,
        right: 20,
        backgroundColor: '#4F3C75',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    imagemFundoCard:{
        width: 60,
        height: 60,
        position: "absolute",
        right: 20,
        top: 65,
        transform: [{ rotate: '15deg' }],
        opacity: 0.3,

    }
    

})

