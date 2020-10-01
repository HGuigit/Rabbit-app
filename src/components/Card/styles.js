import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerEstudoExatas:{
        backgroundColor:'rgba(34,116,165,0.24)',
        width:'85%',
        alignSelf:'center',
        borderRadius:15,
        borderLeftWidth:5,
        borderColor:'#2274A5',
        marginTop:'3%',
        marginBottom:'2%',
    },

    estudoTitle:{
        paddingLeft:'5.2%',
        paddingTop:'4%',
        fontWeight: 'bold',
        fontSize:25,
        color: '#164B69',
    },

    estudoStart:{
        paddingLeft:'5%',
        paddingTop:'2.5%',
    },

    estudoNext:{
        paddingLeft:'5%',
        paddingTop:'1%',
        fontWeight:'bold',
    },

    resumeButton:{
        backgroundColor:'rgba(34,116,165,0.24)',
        width: '37%',
        alignItems:'center',
        marginLeft:'5%',
        marginTop:'4.5%',
        marginBottom:'4%',
        borderRadius:10,
    },

    resumeText:{
        marginVertical:'8.2%',
    },

    buttonsEstudo: {
        flexDirection:'row', 
        flex:1, 
        justifyContent:'space-between', 
        marginHorizontal:'14%'
    },

    imageEstudo: {
        width:'20%', 
        height:'50%', 
        position:'absolute', 
        opacity:0.2, 
        marginLeft:'68%', 
        marginTop:'3%',
    },
});