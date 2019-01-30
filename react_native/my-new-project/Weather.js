import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { white } from "ansi-colors";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Text>Icon</Text>
          <Text style={styles.temp}>35</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>title</Text>
          <Text style={styles.subtitle}>Rain Drop</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
