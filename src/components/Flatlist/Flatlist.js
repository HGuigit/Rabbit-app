import { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import Card from "../Card/Card";

class List extends Component {
  render() {
    return (
      <FlatList
        data={[1, 2, 3, 4]}
        style={styles.studyList}
        renderItem={() => <Card date={} time={} />}
      />
    );
  }
}

export default List;
