import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

function Highlights() {

  useGSAP(
    () => {
      gsap.to( '#title' , {
        opacity: 1,
        y: 0,
      } )
      gsap.to( '.link' , {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2
      } )
    } , []
  )

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between pl-16 pr-24'>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>
          <div className="flex flex-wrap gap-10 items-end">
            <p className='link'>Watch the film
              <img src={watchImg} className='ml-2' alt='watch' />
            </p>
            <p className='link'>Watch the event
              <img src={rightImg} className='ml-2' alt='watch' />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights