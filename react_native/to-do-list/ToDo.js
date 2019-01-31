import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false
  };
  render() {
    const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleCompleteToDo}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completedCircle : styles.unCompletedCircle
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Hello World</Text>
      </View>
    );
  }
  _toggleCompleteToDo = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairLineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  unCompletedCircle: {
    borderColor: "#F33657"
  },
  text: {
    fontWeight: "400",
    fontSize: 20,
    marginVertical: 20
  }
});
