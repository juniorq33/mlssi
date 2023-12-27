import React from 'react'
import GoalCard from './GoalCard'

export default function Goals () {
  return (
    <div class="md:flex flex-nowrap gap-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
        <GoalCard team={"Atlanta United"} competition={"Leagues Cup"} date={"Friday, July 21st 2023"}></GoalCard>
        <GoalCard team={"Atlanta United"} competition={"Leagues Cup"} date={"Friday, July 21st 2023"}></GoalCard>
        <GoalCard team={"Cruz Azul"} competition={"Leagues Cup"} date={"Friday, July 21st 2023"} instagramLink={"https://www.instagram.com/reel/Cu-5LcstGdr/"}></GoalCard>
    </div>
  )
}
