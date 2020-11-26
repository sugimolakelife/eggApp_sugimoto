import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import logo01 from "./assets/egg01.png";
import logo02 from "./assets/egg02.png";
import logo03 from "./assets/egg03.png";

export default function App() {

  let [eggNumber,setEggNumber]=React.useState(100);

  interface Result {
    coment: String ;
    logo: Object;
    }

  const result:Result = {
    coment:"",
    logo:logo01,
  }


  if(eggNumber === 75 ){
    result.coment="まだまだ";
  }else if(eggNumber === 50){
    result.coment="あとはんぶん";
  }else if(eggNumber <= 25){
    result.coment="あとちょっと";
    result.logo=logo02;
  }

  if(eggNumber>0){
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{eggNumber}</Text>
        <TouchableOpacity onPress={() => setEggNumber(eggNumber - 1)}>
          <Image source={result.logo} style={styles.logo} />
        </TouchableOpacity>
        <Text>{result.coment}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{0}</Text>
        <Image source={logo03} style={styles.logo} />
        <Text>{"おめでとう"}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 45,
    padding: 8,
    width: "100%",
    height: 75,
    textAlign: "center",
    backgroundColor: "black",
    color: "#195",
  },
  logo: {
    margin: 50,
  },
});
