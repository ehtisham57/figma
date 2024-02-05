import React from 'react'
import Image from 'next/image'
import img01 from "../images/boost.png"
import img02 from "../images/king.png"
import img03 from "../images/line.png"
import CircularProgress from '@mui/joy/CircularProgress';

const LeftSideMain = () => {
  return (
    <div> 
        <div className='container-fluid'>
    <div className='headinggfirsrt'>
        <p>WSTF FRONT-END HACKATHON</p>
    </div>

    <div className='Alluser'>
        <h4 className=''>All users <span> Detail  <i class="bi bi-caret-right"></i> </span></h4>
        <div className='Allusernumber'>
            <h1>2,431,340</h1>
        </div>
    </div>



    <div className='Cardss'>
        <div className='small-cards'>
            <div className='row'>
                <div className='cardsIcon col-lg-2'>
                    <Image
                        src={img01}
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />
                </div>
                <div className='col-lg-10'>
                    <p className='cardsIconText'>Total earning</p>
                    <h6 className='cardsIconHead'>540,549</h6>
                </div>

            </div>
        </div>
        <div className='small-cards'>
            <div className='row'>
                <div className='cardsIcon col-lg-2'>
                    <Image
                        src={img02}
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />
                </div>
                <div className='col-lg-10'>
                    <p className='cardsIconText'>Sales</p>
                    <h6 className='cardsIconHead'>1,205,677</h6>
                </div>

            </div>
        </div>
        <div className='small-cards'>
            <div className='row'>
                <div className='cardsIcon col-lg-2'>
                    <Image
                        src={img03}
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />
                </div>
                <div className='col-lg-10'>
                    <p className='cardsIconText'>Purchase</p>
                    <h6 className='cardsIconHead'>48,430,039</h6>
                </div>

            </div>
        </div>
    </div>

    <div className='row d-flex'>
        <div className="col-lg-6">
            <div className='row d-flex'>
                <div className='col-lg-4 rounddiv'>
                    <CircularProgress
                        color="primary"
                        size="lg" determinate
                        value={27}>
                        27%
                    </CircularProgress>
                </div>
                <div className='col-lg-8'>
                    <p className='cardsIconText'>92,980</p>
                    <h6 className='cardsIconText'>Active users</h6>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className='row d-flex'>
                <div className='col-lg-4'>
                    <CircularProgress
                        color="success"
                        size="lg" determinate
                        value={65}>
                        65%
                    </CircularProgress>
                </div>
                <div className='col-lg-8'>
                    <p className='cardsIconText'>22,652</p>
                    <h6 className='cardsIconText'>New users</h6>
                </div>
            </div>
        </div>

    </div>

</div></div>
  )
}

export default LeftSideMain