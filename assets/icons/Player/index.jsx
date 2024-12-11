import React from 'react'

import BackIcon from './Back'
import GoBack10SecIcon from './GoBack10Sec'
import PauseIcon from './Pause'
import PlayIcon from './Play'
import GoForward10SecIcon from './GoForwad10Sec'
import SpeedControlIcon from './SpeedControl'
import EpisodesIcon from './Episodes'
import SubtitleIcon from './Subtitle'
import DownloadIcon from './Download'
import NextEpisodeIcon from './NextEpisode'

export const BackPlayerIcon = props => <BackIcon {...props} />
export const GoBack10SecPlayerIcon = props => <GoBack10SecIcon {...props} />
export const PausePlayerIcon = props => <PauseIcon {...props} />
export const PlayPlayerIcon = props => <PlayIcon {...props} />
export const GoForward10SecPlayerIcon = props => (
  <GoForward10SecIcon {...props} />
)
export const SpeedControlPlayerIcon = props => <SpeedControlIcon {...props} />
export const EpisodesPlayerIcon = props => <EpisodesIcon {...props} />
export const SubtitlePlayerIcon = props => <SubtitleIcon {...props} />
export const DownloadPlayerIcon = props => <DownloadIcon {...props} />
export const NextEpisodePlayerIcon = props => <NextEpisodeIcon {...props} />
