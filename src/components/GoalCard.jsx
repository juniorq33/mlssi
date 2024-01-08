import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function GoalCard ({team, competition, date, instagramLink}) {
  return (
    <div class="relative flex w-96 md:w-80 lg:w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="p-6 text-center">
        <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {team}
        </h4>
        <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          {competition}
        </p>
        <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          {date}
        </p>
      </div>
      <div class="flex justify-center gap-7 p-6 pt-2">
        <a href={instagramLink} >
          <FontAwesomeIcon icon={faInstagram} size='xl' />
        </a>
        <a href="#twitter">
          <FontAwesomeIcon icon={faXTwitter} size='xl'/>
        </a>
      </div>
    </div>
  )
}