import React from 'react'
import FirstSeason from './FirstSeason'
import SecondSeason from './SecondSeason'

export default function Stats () {
  return (
    <div class="flex flex-col flex-wrap gap-4">
        <div>
            <SecondSeason></SecondSeason>
        </div>
        <div>
            <FirstSeason></FirstSeason>
        </div>
    </div>
    
  )
}