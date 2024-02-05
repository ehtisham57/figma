import React from 'react'
import Histogram from "../Charts/Histogram"

const BottomGraph = () => {
  return (
    
        <div class="container-fluid mt-5 mb-5">
                    <div class="card shadow">
                        <div className='row px-3 py-4'>
                            <div className="col-lg-1 ">
                                <div className='col-lg-10'>
                                    <p className='cardsIconText'>Sales Figures</p>
                                    <h6 className='cardsIconHead'>$10,430</h6>
                                </div>
                            </div>
                            <div className="col-lg-11">

                                <Histogram />
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default BottomGraph