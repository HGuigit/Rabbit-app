import { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import playImg from "../../assets/play.png";
import editImg from "../../assets/edit.png";
import calculatorImg from "../../assets/calculadora.png";
import styles from "./styles";
import * as React from "react";

class Card extends Component {
  render(props) {
    return (
      <View style={styles.containerEstudoExatas}>
        <Image
          source={calculatorImg}
          style={styles.imageEstudo}
          resizeMode={"stretch"}
        />
        <Text style={styles.estudoTitle}>Título do estudo</Text>
        <Text style={styles.estudoStart}>
          Começa em : {props.date} às {props.time}
        </Text>
        <Text style={styles.estudoNext}>Próxima revisão em dd/mm/aa</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={styles.resumeButton}>
            <Text style={styles.resumeText}>Resumo</Text>
          </TouchableOpacity>
          <View style={styles.buttonsEstudo}>
            <TouchableOpacity>
              <Image style={{ marginTop: "1%" }} source={playImg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={editImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Card;
