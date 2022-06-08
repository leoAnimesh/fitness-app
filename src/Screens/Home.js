import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../styles/constants';
import Cards from '../components/Cards';
import { WorkoutCatagories } from '../Data/WorkoutCatagories';
import Navbar from '../components/Navbar';
import { StatusBar } from 'expo-status-bar';
import { TopWorkout } from '../Data/TopWorkout';
import Catagories from '../components/Catagories';
import { Entypo } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.Conatiner}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <View
        style={{ flex: 0.25, justifyContent: 'center', paddingHorizontal: 25 }}
      >
        {/* top header  */}
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 20,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require('../../assets/icon.png')}
            />
            <Text style={{ marginLeft: 10 }}>Go Fit</Text>
          </View>
          <Entypo
            name="time-slot"
            size={24}
            style={{ marginRight: 10 }}
            color="black"
            onPress={() => navigation.navigate('WorkoutStats')}
          />
        </View>
        {/* search bar  */}
        <View style={styles.searchbar}>
          <Ionicons name="search" size={20} color="black" />
          <TextInput style={styles.TextInput} placeholder="Search.." />
          <Octicons name="settings" size={20} color="black" />
        </View>
      </View>

      <View
        style={{ flex: 0.85, justifyContent: 'flex-start', paddingLeft: 30 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 18, marginVertical: 10, opacity: 0.6 }}>
            Top Workouts 💪
          </Text>
          {/* top workouts */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.Workouts}
          >
            {TopWorkout.map((item, idx) => (
              <Cards item={item} key={idx} navigation={navigation} />
            ))}
          </ScrollView>

          <Text style={{ fontSize: 18, paddingBottom: 20, opacity: 0.6 }}>
            Catagories
          </Text>
          {/* catgories */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.Catagories}
          >
            {WorkoutCatagories.map((item, idx) => (
              <Catagories key={idx} item={item} navigation={navigation} />
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    flexDirection: 'column',
  },
  TopHeader: {
    marginTop: SIZES.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: SIZES.sm,
    borderRadius: 20,
    backgroundColor: COLORS.gray,
  },
  TextInput: {
    width: '85%',
    height: 45,
    paddingHorizontal: SIZES.sm,
    backgroundColor: COLORS.gray,
    opacity: 0.5,
  },
  Workouts: {
    marginBottom: SIZES.sm,
    borderRadius: SIZES.md,
  },
  Catagories: {
    marginBottom: SIZES.sm,
    borderRadius: SIZES.md,
  },
});

export default Home;
