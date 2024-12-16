import { Text } from 'react-native'

const useGenerateVideoTitle = data => {
  const { title, season, episode } = data
  return season || episode ? (
    <Text className='text-white/75 font-inter700 text-lg'>
      {title}:{' '}
      <Text className='font-inter400'>
        {season}. Sezon {episode}. Bölüm
      </Text>
    </Text>
  ) : (
    <Text className='text-white/75 font-inter700 text-lg'>{title}</Text>
  )
}

export default useGenerateVideoTitle
