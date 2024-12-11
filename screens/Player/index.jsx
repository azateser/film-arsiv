import React from 'react'
import VideoPlayer from '@/components/ui/Player'
import Video from '@/assets/video/video1.mp4'

const PlayerScreen = () => {
  return <VideoPlayer source={Video} />
}

export default PlayerScreen
