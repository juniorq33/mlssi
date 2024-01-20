import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default function Home () {
  return (
    <div class="relative w-96 md:w-80 lg:w-72">    
        <Timeline
        dataSource={{
            sourceType: 'url',
            url: 'https://twitter.com/InterMiamiCF?ref_src=twsrc%5Etfw',
            screenName: 'Inter Miami FC'
        }}
        options={{
            height: '800'
        }}
        />
    </div>
  )
}
