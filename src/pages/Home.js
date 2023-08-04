import React from 'react'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Team from '../components/Team'
import Faq from '../Faq'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <div className=''>
      <Features/>
      <Pricing/>
      <Team/>
      <Faq/>
      <Newsletter/>
    </div>
  )
}
