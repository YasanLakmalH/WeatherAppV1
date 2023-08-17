/* eslint-disable react/prop-types */
import React from "react";
import {
  FlatList,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import ListItem from "../ListItem";

const UpcomingWeather = (weatherData) => {
  const renderItem = ({item}) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        keyExtractor={(item) => item.dt_txt}
      />
    );
  };
  const { wrapper, image } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require("../../../assets/upcoming-background.jpg")}
        style={image}
      >
        <FlatList data={weatherData.weatherData} renderItem={renderItem}/>
        <Text>High</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "royalblue",
  },
  headerText: {
    textAlign: "center",
    fontSize: 30,
  },
  image: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default UpcomingWeather;
