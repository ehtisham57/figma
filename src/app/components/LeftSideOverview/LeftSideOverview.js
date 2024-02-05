import React from 'react'
import "./LeftsideOverview.css"
import CircularProgress from '@mui/joy/CircularProgress';


const LeftSideOverview = () => {
    return (
        <div className='container-fluid'>
            <div className=' mainheading'>
                <h2>Design faster</h2>
            </div>
            <div className='py-4 card maincard'>
                <div>
                    <div class="outer-circle">
                        <div class="inner-circle">
                        </div>
                    </div>

                    <div className='totalEarning'>
                        <p className='topPara'>Total earning</p>
                        <h4>$12,875 <span><i class="bi bi-arrow-up-square-fill"></i> 2%</span></h4>
                        <p className='bottomPara'>Compared to $21,504 last year</p>
                    </div>
                </div>
                <div className='cardGraph'>
                    <div className='d-flex'>
                        <div className='mx-2'>
                            <h6 className='headinSix'>Presentation</h6>
                        </div>
                        <div className='mx-2'>
                            <p className='paraSix'>862</p>
                        </div>
                        <div className='mx-2'>
                            graph
                        </div>

                    </div>
                </div>
                <div className='cardGraph'>
                    <div className='d-flex'>
                        <div className='mx-2'>
                            <h6 className='headinSix'>Development</h6>
                        </div>
                        <div className='mx-2'>
                            <p className='paraSix'>753</p>
                        </div>
                        <div className='mx-2'>
                            graph
                        </div>

                    </div>
                </div>
                <div className='cardGraph'>
                    <div className='d-flex'>
                        <div className='mx-2'>
                            <h6 className='headinSix'>Research</h6>
                        </div>
                        <div className='mx-2'>
                            <p className='paraSix'>353</p>
                        </div>
                        <div className='mx-2'>
                            graph
                        </div>

                    </div>
                </div>
            </div>
            <div className=' my-5 py-4 card mainTwocard'>
            <div className='totalEarningtwo'>
                        <p className='topParaTwo'>Total earning</p>
                        <h4>$12,875 <span><i class="bi bi-arrow-up-square-fill"></i> 2%</span></h4>
                        <p className='bottomParatwo'>Compared to $21,504 last year</p>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='totalEarningtwo'>
                        <p className='topParaTwo'>Sales</p>
                        <h4>$43,123 <span><i class="bi bi-arrow-up-square-fill"></i> 12%</span></h4>
                        <p className='bottomParatwo'>Compared to $21,490 last year</p>
                    </div>
            </div>


            <div className='py-4 my-4 card maincardThree'>
            <div className='cardGraph'>
                    <div className='row d-flex'>
                        <div className='col-lg-3'>
                            <h6 className='cardbottomhead'>Travel</h6>
                        </div>
                        <div className=' col-lg-3'>
                            <p className='cardbottompara'>760</p>
                        </div>
                        <div className='col-lg-6'>
                             <p className='cardbottomnumber'>7602,540 <span><i class="bi bi-arrow-up-square-fill"></i> 2%</span> </p>
                        </div>

                    </div>
                    <div className='row d-flex'>
                        <div className='col-lg-3'>
                            <h6 className='cardbottomhead'>Presentation</h6>
                        </div>
                        <div className=' col-lg-3'>
                            <p className='cardbottompara'>650</p>
                        </div>
                        <div className='col-lg-6'>
                             <p className='cardbottomnumber'>2,304 <span><i class="bi bi-arrow-up-square-fill"></i> 2%</span> </p>
                        </div>

                    </div>
                    <div className='row d-flex'>
                        <div className='col-lg-3'>
                            <h6 className='cardbottomhead'>Business</h6>
                        </div>
                        <div className=' col-lg-3'>
                            <p className='cardbottompara'>612</p>
                        </div>
                        <div className='col-lg-6'>
                             <p className='cardbottomnumber'>2,140 <span><i class="bi bi-arrow-up-square-fill"></i> 2%</span> </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default LeftSideOverview