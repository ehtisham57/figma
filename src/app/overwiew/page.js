"use client"
import React from 'react'
import BasicModal from '../components/Charts/Modal'
import "./page.css"
import LeftSideOverview from '../components/LeftSideOverview/LeftSideOverview'
import BubbleChart from '../components/Charts/BubbleChart'

const page = () => {
  return (
    <div className='row container'>
                <div className='col-lg-5'>
                   <LeftSideOverview />

                </div>
                <div className='col-lg-7'>
                    {/* <BubbleChart /> */}

                    <div>
                    <BubbleChart />
                       
                    </div>

                </div>
            </div>
  )
}

export default page