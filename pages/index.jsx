import { useState, useEffect } from 'react'
import Link from 'next/link'

import { SimpleTitle } from '../components/SimpleTitle'

export default () => {
  const [time, setTime] = useState()

  const updateTime = () => {
    const newTime = new Date().toLocaleString()
    setTime(newTime)
  }

  useEffect(() => {
    setTimeout(updateTime, 1000)
  })

  return (
    <div>
      <SimpleTitle title="Hello World!" subtitle={time || '...'} />
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <Link href="/somepage">Goto Some Page</Link>
      </div>
    </div>
  )
}
