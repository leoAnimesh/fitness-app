import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const secondsToMilisec = (sec) => sec * 1000;

const Workout = ({ navigation, route }) => {
  const { heading, title, time, cals, workouts } = route.params;
  const [count, setCount] = useState(0);
  const [millis, setMillis] = useState(secondsToMilisec(60));
  const [paused, setPaused] = useState(true);
  const interval = React.useRef('null');

  const dispatch = useDispatch();

  const Countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        setPaused(true);
        if (workouts[count + 1].time !== 0) {
          setMillis(secondsToMilisec(workouts[count + 1].time));
          setPaused(false);
        }
        setCount(count + 1);
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  React.useEffect(() => {
    if (paused) {
      return;
    }
    interval.current = setInterval(Countdown, 1000);
    return () => clearInterval(interval.current);
  }, [paused]);

  React.useEffect(() => {
    if (count >= workouts.length - 2) {
      setPaused(true);
      dispatch(addTask({ title, cals, time, date: Date.now() }));
      navigation.navigate('Home');
    }
  }, [count]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barstyle="light-content" backgroundColor={'#fff'} />
      <View style={{ flex: 0.75 }}>
        <Text>Execise Animation</Text>
        <LottieView
          autoPlay
          loop
          source={require('../../assets/lottie/workout1.json')}
        />
      </View>

      <View
        style={{
          flex: 0.3,
          backgroundColor: '#AEACF9',
          justifyContent: 'space-around',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              bottom: -30,
              zIndex: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              backgroundColor: '#000',
            }}
          >
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20 }}>
              {workouts[count]?.time !== 0
                ? millis / 1000
                : workouts[count]?.steps}
              {'\n'}
              {workouts[count]?.time ? 'sec' : 'steps'}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              marginVertical: 8,
            }}
          >
            {heading}
          </Text>
          <Text style={{ marginBottom: 5, fontSize: 18 }}>
            {workouts[count].name}
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 14 }}>
            {workouts[count].steps === 0
              ? `Time ⏰ : ${workouts[count]?.time && millis / 1000} sec`
              : `Steps 💪 : ${workouts[count]?.steps}x`}
          </Text>
          {count < workouts.length - 2 ? (
            <TouchableOpacity
              disabled={workouts[count].time !== 0}
              onPress={() => {
                if (workouts[count + 1].time) {
                  setMillis(secondsToMilisec(workouts[count + 1]?.time));
                  setPaused(false);
                  setCount(count + 1);
                  return;
                }
                setCount(count + 1);
              }}
              style={{
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled={workouts[count].time !== 0}
              style={{
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 10,
                marginTop: 15,
              }}
              onPress={() => {
                navigation.navigate('Home');
              }}
            >
              <Text style={{ color: '#fff' }}>Complete</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Workout;
