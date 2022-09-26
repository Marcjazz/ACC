import { StyleSheet, Text, View ,TouchableOpacity,ScrollView} from 'react-native';
import React, { useState,useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";


const DiscussionScreen = () => {
  const navigation = useNavigation();
  const[date,setData]=useState([]);
  const[filteredData,setFiledData]=useState([]);

  useEffect(() => {
   
   