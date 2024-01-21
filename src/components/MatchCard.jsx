import React from 'react'

export default function MatchCard ({assetHA, competition, homeTeam, awayTeam, goalsHome, goalsAway, stadium, date, goalsSummary}) {
  return (
    <div class="flex flex-col justify-center items-center rounded-lg shadow-2xl bg-white p-2">
        <div class="flex flex-col items-center gap-2">
            <img src={require(`../components/assets/misc/${assetHA}`)} class="object-contain h-12 w-16"></img>
            <p class="font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{competition}</p>
        </div>
        <div class="flex flex-row">
            <img src={require(`../components/assets/mls/${homeTeam}`)} class="object-contain h-28 w-64"></img>
            <div class="flex felx-row items-center gap-8">
                <h1 class="rounded-lg shadow-2xl font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{goalsHome}</h1>
                <div class="text-2xl">-</div>
                <h1 class="rounded-lg shadow-2xl font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{goalsAway}</h1>
            </div>
            <img src={require(`../components/assets/mls/${awayTeam}`)} class="object-contain h-28 w-64"></img>
        </div>
        <div class="flex flex-col items-center gap-2">
            <p class="font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{stadium}</p>
            <p class="font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{date}</p>
            <p class="bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans font-medium leading-relaxed text-transparent antialiased">{goalsSummary} </p>
        </div>

    </div>

  )
}
