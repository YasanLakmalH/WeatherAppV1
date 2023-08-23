import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from 'moment'

const ListItem = (props) => {
  const { date,temp,item,dateTextWrapper,shadow } = styles;
  const { dt_txt, min, max, condition } = props;
  return (  
    <View style={[item,shadow]}>
      <Feather name={weatherType[condition]?.icon} size={50} color={weatherType[condition]?.color} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius:15,
    backgroundColor: "black",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 25,
  },

  dateTextWrapper: {
    flexDirection: 'column'
  },
  shadow:{
    shadowColor:"black",
    shadowOffset:{width:1,height:1},
    shadowOpacity:0.2,
    // shadowRadius:3
  }
});

export default ListItem;
