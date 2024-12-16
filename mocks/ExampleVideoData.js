import NewImage1 from '@/assets/images/Home/1.png'
import Video from '@/assets/video/video1.mp4'

const ExampleVideoData = {
        title: 'Rick and Morty',
        season: 1,
        episode: 1,
        image: NewImage1,
        duration: '260',
        watched: true,
        progress: 100,
        sources: [
            {
                uri: Video,
                type: 'mp4',
                quality: 'HD',
            },
        ],
        subtitles: [
            {
                uri: 'https://www.w3.org/2019/07/srt_example.srt',
                language: 'en',
                label: 'English',
            },
            {
                uri: 'https://www.w3.org/2019/07/srt_example.srt',
                language: 'tr',
                label: 'Türkçe',
            }
        ],
    }


export default ExampleVideoData