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
        <Link href="/somepage">
          <a>Goto Some Page</a>
        </Link>
        <br />
        <Link href="/learnprops">
          <a>Goto Learn Props</a>
        </Link>
      </div>
    </div>
  )
}
