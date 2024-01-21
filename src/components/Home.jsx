import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import MatchCard from './MatchCard'

export default function Home () {
  return (
    <div class="flex flex-col gap-8">
        <div>
            <MatchCard assetHA={'home.png'} competition={"MLS"} homeTeam={'MIA.png'} awayTeam={'MIA.png'} goalsHome={"3"} goalsAway={"2"} stadium={"Cotton Bowl Dallas, TX"} date={"1/22/2024 8:00 PM"} goalsSummary={"Messi 10' 15' 18' 19' 30'"}></MatchCard>
        </div>
        <div>
            <Timeline
            dataSource={{
                sourceType: 'url',
                url: 'https://twitter.com/InterMiamiCF?ref_src=twsrc%5Etfw',
                screenName: 'Inter Miami FC'
            }}
            options={{
                height: '600'
            }}
            />
        </div>   
    </div>
  )
}
