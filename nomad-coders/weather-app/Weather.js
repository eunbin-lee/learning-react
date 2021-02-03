import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#304352', '#d7d2cc'],
    title: '뿌연 날',
    subtitle: '뿌옇 뿌옇 뿌여옇 !',
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#0F2027', '#203A43', '#2C5364'],
    title: '번개 치는 날',
    subtitle: '우르르 쾅쾅 우쾅쾅 !',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#457fca', '#5691c8'],
    title: '보슬비 내리는 날',
    subtitle: '보슬보슬 보스슬 !',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#373B44', '#4286f4'],
    title: '비 오는 날',
    subtitle: '주륵 주륵 주르륵 !',
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#636FA4', '#E8CBC0'],
    title: '눈 오는 날',
    subtitle: '펑펑 눈 펑펑 !',
  },
  Atmosphere: {
    iconName: 'weather-partly-cloudy',
    gradient: ['#11998e', '#38ef7d'],
    title: '평온한 날',
    subtitle: '평온 평온 펴엉오온 !',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#3a7bd5', '#00d2ff'],
    title: '맑은 날',
    subtitle: '맑 맑 맑다 !',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#2c3e50', '#bdc3c7'],
    title: '구름 많은 날',
    subtitle: '굶 굶 구우름 !',
  },
  Mist: {
    iconName: 'weather-hazy',
    gradient: ['#757F9A', '#D7DDE8'],
    title: '안개 낀 날',
    subtitle: '안개 안개 아안개애 !',
  },
  Dust: {
    iconName: 'weather-sunset',
    gradient: ['#616161', '#9bc5c3'],
    title: '먼지 많은 날',
    subtitle: '먽 먽 머언지 !',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={92}
          name={weatherOptions[condition].iconName}
          color="#fff"
        />
        <Text style={styles.temp}>{temp} ℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 40,
    color: '#fff',
    marginTop: 4,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '300',
    marginBottom: 4,
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  //   textContainer: {
  //     paddingHorizontal: 20,
  //     alignItems: 'flex-start',
  //   },
});
