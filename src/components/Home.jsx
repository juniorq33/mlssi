import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import MatchCard from './MatchCard'


export default function Home () {

  var schedule24 = require('./files/schedule2024.json');

  let nextGame;
  let lastGame;
  for (let index = 0; index < schedule24.length; index++) {

    const gameInfo = schedule24[index];

    if(gameInfo.result.length == 0)
    {
        nextGame = gameInfo;
        lastGame = schedule24[index - 1];
        break;
    }
  }

  // Next Game Info
  const isAtHome = nextGame.home ? 'home.png' : 'away.png';
  const competition = nextGame.competition;
  const homeTeamLogo = nextGame.homeLogo;
  const homeTeamName = nextGame.homeTeam;
  const awayTeamLogo = nextGame.awayLogo;
  const awayTeamName = nextGame.awayTeam;
  const stadium = nextGame.stadium;
  const date = nextGame.date + ' ' + nextGame.time;
  


  return (
    <div class="flex flex-col gap-8">
        <div>
            <MatchCard assetHA={isAtHome} competition={competition} homeTeam={homeTeamLogo} homeTeamName={homeTeamName} awayTeam={awayTeamLogo} awayTeamName={awayTeamName} goalsHome={"0"} goalsAway={"0"} stadium={stadium} date={date} goalsSummary={""}></MatchCard>
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
