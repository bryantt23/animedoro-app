import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';

export default function HomeScreen() {
  const [time, setTime] = useState(10);
  // const timerRef = useRef<ReturnType<typeof setInterval> | null>(
  //   setInterval(() => {
  //     setTime(prev => prev - 1);
  //   }, 1000)
  // );

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/large-gong.mp3')
    );
    await sound.playAsync();
  }

  useEffect(() => {
    play();
    async function play() {
      await playSound();
    }
  }, []);
  // useEffect(() => {
  //   if (time <= 0) {
  //     if (timerRef.current !== null) {
  //       clearInterval(timerRef.current);

  //       try {
  //         SoundPlayer.playSoundFile('large-gong', 'mp3');
  //       } catch (error) {
  //         console.log('🚀 ~ HomeScreen ~ error:', error);
  //       }
  //     }
  //   }
  // }, [time]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text>{time}</Text>
        <ThemedText type='title'>Hello!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{' '}
          <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText type='defaultSemiBold'>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText>{' '}
          to get a fresh <ThemedText type='defaultSemiBold'>app</ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
          <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
});
