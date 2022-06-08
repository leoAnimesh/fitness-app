import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { COLORS } from '../styles/constants';
import { AntDesign } from '@expo/vector-icons';

const WorkoutsData = () => {
  const data = useSelector((state) => state.tasks.tasks);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        resizeMethod="auto"
        resizeMode="contain"
        source={{
          uri: 'https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        }}
        style={{ width: '100%', height: 261 }}
      >
        <Text
          style={{
            color: '#fff',
            position: 'absolute',
            bottom: 20,
            left: 20,
            fontSize: 23,
          }}
        >
          Workout Stats 💪
        </Text>
      </ImageBackground>

      <View style={{ flex: 1, borderWidth: 1, padding: 20 }}>
        <Text style={{ fontSize: 24 }}>All Stats</Text>
        <ScrollView style={{ flex: 1 }}>
          {data.length === 0 && (
            <Text style={{ color: '#000', marginTop: 20 }}>
              {' '}
              NO workouts done till now ⛔
            </Text>
          )}
          {data.map((item, idx) => (
            <View
              key={idx}
              style={{
                borderWidth: 1,
                borderColor: '#aaaa',
                borderRadius: 5,
                padding: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ marginBottom: 5 }}>{item.title}</Text>
              <Text style={{ marginBottom: 5 }}>
                Calories 🔥 : {item.cals} cals
              </Text>
              <Text style={{ marginBottom: 5 }}>Time ⏰ : {item.time} min</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default WorkoutsData;
