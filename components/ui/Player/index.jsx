import React, { useState, useEffect, useRef } from 'react'
import {
  TouchableOpacity,
  Animated,
  View,
  Dimensions,
  Text,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PlayerBottom from '@/components/ui/Player/PlayerBottom'
import PlayerBar from '@/components/ui/Player/PlayerBar'
import PlayerTop from '@/components/ui/Player/Top'
import PlayerController from '@/components/ui/Player/PlayerController'
import { ResizeMode, Video } from 'expo-av'
import { EpisodesData } from '@/mocks/Episodes'
import { State, TapGestureHandler } from 'react-native-gesture-handler'
import DoubleTab from './DoubleTab'

const VideoPlayer = ({ source, navigation, showEpisodes, setShowEpisodes }) => {
  const { duration } = source

  // Video Refs
  const video = useRef(null)
  const doubleTapRef = useRef(null)
  const controlsOpacity = useRef(new Animated.Value(1)).current
  const seekAnimationValue = useRef(new Animated.Value(0)).current

  // Video Player States
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoSpeed, setVideoSpeed] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [totalDuration, setTotalDuration] = useState(duration)

  // Seek States
  const seekingRef = useRef(false)
  const [seekAnimation, setSeekAnimation] = useState(false)
  const [seekDirection, setSeekDirection] = useState()

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSeek = async newTime => {
    if (video.current) {
      seekingRef.current = true
      try {
        await video.current.setPositionAsync(newTime * 1000)
        setCurrentTime(newTime)
      } catch (error) {
      } finally {
        seekingRef.current = false
      }
    }
  }

  const handleGoBack10Seconds = () => {
    const newTime = Math.max(0, currentTime - 10)
    handleSeek(newTime)
    setShowControls(true)
  }

  const handleGoForward10Seconds = () => {
    const newTime = Math.min(totalDuration, currentTime + 10)
    handleSeek(newTime)
    setShowControls(true)
  }

  const showControlsWithFade = () => {
    if (!seekingRef.current) {
      setShowControls(true)
      Animated.timing(controlsOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }

  const hideControlsWithFade = () => {
    if (!seekingRef.current) {
      Animated.timing(controlsOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowControls(false))
    }
  }

  useEffect(() => {
    let timer
    if (showControls && !seekingRef.current) {
      timer = setTimeout(() => {
        hideControlsWithFade()
      }, 4000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [showControls, seekingRef.current])

  useEffect(() => {
    setShowControls(false)
  }, [showEpisodes])

  const handlePlaybackStatusUpdate = status => {
    if (!seekingRef.current) {
      setCurrentTime(status.positionMillis / 1000)
      setTotalDuration(status.durationMillis / 1000)

      if (status.didJustFinish) {
        setIsPlaying(false)
      }
    }
  }

  // !TODO: Implement video quality selection based on internet speed
  // Determines video quality based on internet speed:
  // 0.5 Mbps - 2 Mbps -> 240p
  // 2 Mbps - 5 Mbps -> 480p (SD)
  // 5 Mbps - 10 Mbps -> 720p (HD)
  // 10 Mbps - 25 Mbps -> 1080p (Full HD)
  // 25 Mbps and above -> 4K (Ultra HD)

  const triggerSeekAnimation = direction => {
    setShowControls(false)
    seekAnimationValue.setValue(0)
    setSeekAnimation(true)

    Animated.timing(seekAnimationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setSeekAnimation(false)
    })
  }
  const onSingleTapEvent = event => {
    if (event.nativeEvent.state === State.ACTIVE && !showEpisodes) {
      showControls ? hideControlsWithFade() : showControlsWithFade()
    }
  }

  const handleDoubleTap = direction => {
    if (direction === 'right') {
      setShowControls(false)
      setSeekDirection('right')
      handleGoForward10Seconds()
      triggerSeekAnimation('right')
    } else if (direction === 'left') {
      setShowControls(false)
      setSeekDirection('left')
      handleGoBack10Seconds()
      triggerSeekAnimation('left')
    }
  }

  const onDoubleTapEvent = event => {
    if (event.nativeEvent.state === State.ACTIVE && !showEpisodes) {
      const direction =
        event.nativeEvent.x < Dimensions.get('window').width / 2
          ? 'left'
          : 'right'
      handleDoubleTap(direction)
    }
  }

  return (
    <View className='bg-background flex-1 relative'>
      <DoubleTab
        seekAnimation={seekAnimation}
        seekAnimationValue={seekAnimationValue}
        seekDirection={seekDirection}
      />
      <TapGestureHandler
        onHandlerStateChange={onSingleTapEvent}
        waitFor={doubleTapRef}
      >
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={onDoubleTapEvent}
          numberOfTaps={2}
        >
          <View className='w-full h-screen flex-1 z-10'>
            <Video
              ref={video}
              source={source.sources[0].uri}
              useNativeControls={false}
              isMuted={false}
              resizeMode={ResizeMode.COVER}
              shouldPlay={isPlaying}
              isLooping
              onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
              style={{ width: '100%', height: '100%' }}
              rate={videoSpeed}
            />
          </View>
        </TapGestureHandler>
      </TapGestureHandler>
      {showControls && (
        <Animated.View
          style={{
            opacity: controlsOpacity,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 20,
          }}
        >
          <View className='flex justify-between items-center absolute top-0 left-0 z-30 w-full h-full'>
            <TouchableOpacity
              onPress={hideControlsWithFade}
              activeOpacity={1}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 0,
              }}
            >
              <LinearGradient
                colors={['#00000000', '#000000']}
                start={[0, 0]}
                end={[0, 1.1]}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </TouchableOpacity>
            <PlayerTop data={source} navigation={navigation} />
            <PlayerController
              isPlaying={isPlaying}
              togglePlayPause={togglePlayPause}
              handleGoBack10Seconds={handleGoBack10Seconds}
              handleGoForward10Seconds={handleGoForward10Seconds}
            />
            <View className='py-6 px-8'>
              <PlayerBar
                currentTime={currentTime}
                totalDuration={totalDuration}
                onSeek={handleSeek}
              />
              <PlayerBottom
                videoSpeed={videoSpeed}
                setVideoSpeed={setVideoSpeed}
                setShowControls={setShowControls}
                toggleEpisodes={setShowEpisodes}
              />
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  )
}

export default VideoPlayer
