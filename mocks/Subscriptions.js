import {
  BookmarkIcon,
  FreePlanIcon,
  PlayIcon,
  TvIcon,
  BasicPlanIcon,
  FootballIcon,
  DownloadIcon,
  AdvancePlanIcon,
  DownloadIndboxIcon,
  SharedIcon,
  FourKIcon,
} from '@/assets/icons/Subscription'

export const SubscriptionPlanData = [
  {
    id: 1,
    title: 'Ücretsiz Plan',
    price: '0.00',
    icon: <FreePlanIcon />,
    features: [
      {
        id: 1.1,
        icon: <BookmarkIcon />,
        text: 'Tüm dizi ve filmlere erişin',
      },
      {
        id: 1.2,
        icon: <PlayIcon />,
        text: 'Dizi ve film kaydetme özelliği',
      },
      {
        id: 1.3,
        icon: <TvIcon />,
        text: 'Kaldığın yerden devam et özelliği',
      },
    ],
  },
  {
    id: 2,
    title: 'Temel Plan',
    price: '10.00',
    icon: <BasicPlanIcon />,
    features: [
      {
        id: 2.1,
        icon: <BookmarkIcon />,
        text: '1080p’ye Kadar Kalite',
      },
      {
        id: 2.2,
        icon: <DownloadIcon />,
        text: 'Dizi ve film indirme özelliği',
      },
      {
        id: 2.3,
        icon: <FootballIcon />,
        text: 'Maçlara ve canlı yayınlara erişim',
      },
    ],
  },
  {
    id: 3,
    title: 'Gelişmiş Plan',
    price: '35.00',
    icon: <AdvancePlanIcon />,
    features: [
      {
        id: 3.1,
        icon: <FourKIcon />,
        text: '4K indir ve izle',
      },
      {
        id: 3.2,
        icon: <SharedIcon />,
        text: 'Televizyon ile paylaş',
      },
      {
        id: 3.3,
        icon: <DownloadIndboxIcon />,
        text: 'Günlük indirme limiti yok',
      },
    ],
  },
]
