import { useEffect, useMemo, useState } from 'react'

export type RelationshipTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isConfigured: boolean
}

const emptyTime: RelationshipTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isConfigured: false,
}

function getTimeSince(startDate: string): RelationshipTime {
  const parsed = Date.parse(startDate)
  if (!startDate || Number.isNaN(parsed)) return emptyTime

  const difference = Math.max(0, Date.now() - parsed)
  const totalSeconds = Math.floor(difference / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isConfigured: true,
  }
}

export function useRelationshipCounter(startDate: string): RelationshipTime {
  const initialValue = useMemo(() => getTimeSince(startDate), [startDate])
  const [time, setTime] = useState(initialValue)

  useEffect(() => {
    setTime(getTimeSince(startDate))
    if (!startDate || Number.isNaN(Date.parse(startDate))) return

    const interval = window.setInterval(() => setTime(getTimeSince(startDate)), 1000)
    return () => window.clearInterval(interval)
  }, [startDate])

  return time
}
