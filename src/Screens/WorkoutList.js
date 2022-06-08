import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ExeciseCard from '../components/ExeciseCard';
import { COLORS } from '../styles/constants';

const WorkoutList = ({ route, navigation }) => {
  const { heading, title, time, cals, workouts } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barstyle="light-content" backgroundColor={COLORS.purple} />
      <View
        style={{
          backgroundColor: COLORS.purple,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 230,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              paddingBottom: 20,
              color: '#fff',
              width: '80%',
            }}
          >
            {title}
          </Text>
          <Text style={{ fontSize: 15, marginBottom: 10 }}>⏰ {time} min</Text>
          <Text style={{ fontSize: 15, marginBottom: 10 }}>
            💪 {workouts.length} workouts
          </Text>
          <Text style={{ fontSize: 15 }}>🔥 {cals} cals</Text>
        </View>
        <View style={{ width: '50%', position: 'relative' }}>
          <Image
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              bottom: -12,
            }}
            source={require('../../assets/fullbody.png')}
          />
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: '#f9f9f9' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {workouts.map((item, idx) => (
            <ExeciseCard key={idx} item={item} />
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.blue,
        }}
        onPress={() => {
          navigation.navigate('StartWorkout', {
            heading,
            title,
            time,
            cals,
            workouts,
          });
        }}
      >
        <Text style={{ fontSize: 15, textTransform: 'uppercase' }}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutList;
