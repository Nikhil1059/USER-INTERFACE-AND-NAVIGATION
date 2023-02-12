import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>Pomodoro Timer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
   
  },
  
  
});
export default Header;
