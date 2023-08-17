import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../RowText";
import { weatherType } from "../../utilities/weatherType";
const CurrentWeather = (weatherData) => {
  const {
    wrapper,
    image,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData.weatherData;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground style={image} source={weatherType[weatherCondition]?.image}>
        <View style={container}>
          <Feather
            name={weatherType[weatherCondition]?.icon}
            size={100}
            color="black"
          />
          <Text style={tempStyles}>{`${temp}°`}</Text>
          <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
          <RowText
            messageOne={`High: ${temp_max}° `}
            messageTwo={`Low: ${temp_min}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={highLow}
            messageTwoStyles={highLow}
          />
        </View>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image:{
    flex:1
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  tempStyles: {
    color: "black",
    fontSize: 60,
    backgroundColor: "green",
  },
  feels: {
    color: "black",
    fontSize: 40,
    backgroundColor: "orange",
  },
  highLow: {
    color: "white",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
    backgroundColor: "black",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
export default CurrentWeather;
