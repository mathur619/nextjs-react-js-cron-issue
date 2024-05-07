import { useState } from 'react'
import { Cron } from 'react-js-cron'
import 'react-js-cron/dist/styles.css'

export default function Home() {
  const DEFAULT_REPEAT_PATTERN = '0 12 * * *'

  const [repeat, setRepeat] = useState(DEFAULT_REPEAT_PATTERN)

  return (
    <>
      <Cron
        value={repeat}
        setValue={setRepeat}
        clockFormat="12-hour-clock"
        defaultPeriod="day"
        mode="multiple"
        humanizeLabels
        allowedPeriods={['day', 'hour', 'week', 'month', 'minute']}
        allowedDropdowns={[
          'period',
          'months',
          'month-days',
          'week-days',
          'hours',
          'minutes',
        ]}
        clearButton={false}
      />
    </>
  )
}
