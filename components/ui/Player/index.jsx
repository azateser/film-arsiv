import React, { useState, useEffect, useRef } from 'react'
import { TouchableOpacity, Animated, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PlayerBottom from '@/components/ui/Player/PlayerBottom'
import PlayerBar from '@/components/ui/Player/PlayerBar'
import PlayerTop from '@/components/ui/Player/Top'
import PlayerController from '@/components/ui/Player/PlayerController'
import { ResizeMode, Video, AVPlaybackStatus } from 'expo-av'

const VideoPlayer = ({ source }) => {
  const video = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const controlsOpacity = useRef(new Animated.Value(1)).current
  const [totalDuration, setTotalDuration] = useState(0)
  const seekingRef = useRef(false)

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

  const handlePlaybackStatusUpdate = status => {
    if (!seekingRef.current) {
      setCurrentTime(status.positionMillis / 1000)
      setTotalDuration(status.durationMillis / 1000)

      if (status.didJustFinish) {
        setIsPlaying(false)
      }
    }
  }

  return (
    <View className='bg-background flex-1 relative'>
      <TouchableOpacity
        onPress={showControlsWithFade}
        activeOpacity={1}
        className='w-full h-screen flex-1 z-10'
      >
        <Video
          ref={video}
          source={require('@/assets/video/video1.mp4')}
          useNativeControls={false}
          isMuted={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay={isPlaying}
          isLooping
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          style={{ width: '100%', height: '100%' }}
        />
      </TouchableOpacity>
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
            <PlayerTop />
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
              <PlayerBottom />
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  )
}

export default VideoPlayer
