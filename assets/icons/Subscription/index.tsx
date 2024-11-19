import React from 'react'
import BookmarkSUBSCRIPTIONIcon from './bookmark'
import PlaySUBSCRIPTIONIcon from './play'
import TvSUBSCRIPTIONIcon from './tv'
import FreePlanSUBSCRIPTIONIcon from './freePlan'
import BasicPlanSUBSCRIPTIONIcon from './basicPlan'
import HdSUBSCRIPTIONIcon from './hdr'
import DownloadSUBSCRIPTIONIcon from './download'
import FootballSUBSCRIPTIONIcon from './football'
import AdvancePlanSUBSCRIPTIONIcon from './advancePlan'
import FourKSUBSCRIPTIONIcon from './4k'
import SharedSUBSCRIPTIONIcon from './shared'
import DownloadIndboxSUBSCRIPTIONIcon from './inbox'

// Free

export const FreePlanIcon = ({ active }: any) => (
  <FreePlanSUBSCRIPTIONIcon active={active} />
)

export const BookmarkIcon = () => <BookmarkSUBSCRIPTIONIcon />
export const PlayIcon = () => <PlaySUBSCRIPTIONIcon />
export const TvIcon = () => <TvSUBSCRIPTIONIcon />

// Basic
export const BasicPlanIcon = ({ active }: any) => (
  <BasicPlanSUBSCRIPTIONIcon active={active} />
)
export const HdIcon = () => <HdSUBSCRIPTIONIcon />
export const DownloadIcon = () => <DownloadSUBSCRIPTIONIcon />
export const FootballIcon = () => <FootballSUBSCRIPTIONIcon />

// Advanced

export const AdvancePlanIcon = ({ active }: any) => (
  <AdvancePlanSUBSCRIPTIONIcon active={active} />
)

export const FourKIcon = () => <FourKSUBSCRIPTIONIcon />
export const SharedIcon = () => <SharedSUBSCRIPTIONIcon />
export const DownloadIndboxIcon = () => <DownloadIndboxSUBSCRIPTIONIcon />
