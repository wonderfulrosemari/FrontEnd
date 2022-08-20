import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import logo from '../../assets/logo.png';
import cuLogo from '../../assets/cu.png';
import gs25Logo from '../../assets/gs25.png';
import sevenElevenLogo from '../../assets/seven_eleven.png';
import emart24Logo from '../../assets/emart24.png';
import LogoButton from '../../components/LogoButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.search_container}>
        <View>
          <LogoButton title="seven_eleven" img={sevenElevenLogo} />
        </View>
        <View>
          <LogoButton title="gs25" img={gs25Logo} />
        </View>
        <View>
          <LogoButton title="emart24" img={emart24Logo} />
        </View>
        <View>
          <LogoButton title="cu" img={cuLogo} />
        </View>
      </View>
      <View style={styles.searchbar_view}>
        <TextInput placeholder="검색어를 입력하세요" style={styles.search_input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  search_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
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
    borderColor: '#DADCE0',
    borderRadius: 10,
    padding: 5,
  },
  searchbar_view: {
    width: '80%',
  },
});

export default HomeScreen;
