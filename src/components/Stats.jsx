import React from 'react'
import FirstSeason from './FirstSeason'
import SecondSeason from './SecondSeason'

export default function Stats () {
  return (
    <div class="flex flex-col gap-6">
        <div>
            <SecondSeason></SecondSeason>
        </div>
        <div>
            <FirstSeason></FirstSeason>
        </div>
    </div>
    
  )
}