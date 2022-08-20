import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import logo from "../../assets/logo.png";
import cu_logo from "../../assets/cu.png";
import gs25_logo from "../../assets/gs25.png";
import seven_eleven_logo from "../../assets/seven_eleven.png";
import emart24_logo from "../../assets/emart24.png";
import LogoButton from "../styled/LogoButton";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.search_container}>
        <View>
          <LogoButton title="seven_eleven" img={seven_eleven_logo} />
        </View>
        <View>
          <LogoButton title="gs25" img={gs25_logo} />
        </View>
        <View>
          <LogoButton title="emart24" img={emart24_logo} />
        </View>
        <View>
          <LogoButton title="cu" img={cu_logo} />
        </View>
      </View>
      <View style={styles.searchbar_view}>
        <TextInput
          placeholder="검색어를 입력하세요"
          style={styles.search_input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  search_container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  logo: {
    width: 170,
    height: 50,
    marginTop: 50,
    marginBottom: 30,
  },
  search_input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#DADCE0",
    borderRadius: 10,
    padding: 5,
  },
  searchbar_view: {
    width: "80%",
  },
});

export default HomeScreen;
