import React from 'react'
import GoalCard from './GoalCard'

export default function Goals () {
  return (
    <div class="flex flex-wrap gap-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
      <GoalCard team={"New York Red Bulls"} competition={"MLS"} date={"Saturday, August 26th 2023"} instagramLink={"https://www.instagram.com/reel/CwbgoQJsi46/?igsh=MXczanAxaWdrYWFs"}></GoalCard>
      <GoalCard team={"Nashville SC"} competition={"Leagues Cup - Final"} date={"Saturday, August 19th 2023"} instagramLink={"https://www.instagram.com/reel/CwJgoGHMX3_/?igsh=aTFzcDFtYzJpdDE3"}></GoalCard>
      <GoalCard team={"Philadelphia Union"} competition={"Leagues Cup - Semi-final"} date={"Tuesday, August 15th 2023"} instagramLink={"https://www.instagram.com/reel/Cv--9i3ue8F/?igsh=MWFlano5NHM0M3E2OA=="}></GoalCard>
      <GoalCard team={"Charlotte FC"} competition={"Leagues Cup - Quarter-final"} date={"Friday, August 11th 2023"} instagramLink={"https://www.instagram.com/reel/Cv1CDGdsqvF/?igsh=NGtxbWpoeGVzNnZ3"}></GoalCard>
      <GoalCard team={"FC Dallas"} competition={"Leagues Cup - Round of 16"} date={"Sunday, August 6th 2023"} instagramLink={"https://www.instagram.com/reel/CvoN_6zO3_9/?igsh=MTU2eGhidGJiNDRwOA=="}></GoalCard>
      <GoalCard team={"FC Dallas"} competition={"Leagues Cup - Round of 16"} date={"Sunday, August 6th 2023"} instagramLink={"https://www.instagram.com/reel/CvoCh-5sstZ/?igsh=d2xtOWo1MTdiZHhz"}></GoalCard>
      <GoalCard team={"Orlando City"} competition={"Leagues Cup - Round of 32"} date={"Wednesday, August 2nd 2023"} instagramLink={"https://www.instagram.com/reel/Cvd5C-WMu2E/?igsh=ZnFhYjFteTN0dHI="}></GoalCard>
      <GoalCard team={"Orlando City"} competition={"Leagues Cup - Round of 32"} date={"Wednesday, August 2nd 2023"} instagramLink={"https://www.instagram.com/reel/CvdvG3QL9DC/?igsh=bm51d2phN2s5ZG1w"}></GoalCard>
      <GoalCard team={"Atlanta United"} competition={"Leagues Cup - Group Stage"} date={"Friday, July 25th 2023"} instagramLink={"https://www.instagram.com/reel/CvI9NM_rNNL/?igsh=MThoZXlweTRqdnBnaQ=="}></GoalCard>
      <GoalCard team={"Atlanta United"} competition={"Leagues Cup - Group Stage"} date={"Friday, July 25th 2023"} instagramLink={"https://www.instagram.com/reel/CvI7ptxtiLp/?igsh=OWpycDN3Zmk5dHg0"}></GoalCard>
      <GoalCard team={"Cruz Azul"} competition={"Leagues Cup - Group Stage"} date={"Friday, July 21st 2023"} instagramLink={"https://www.instagram.com/reel/Cu-5LcstGdr/"}></GoalCard>
    </div>
  )
}
