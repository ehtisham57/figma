"use client"
import "./Mainpage.css"
import 'react-circular-progressbar/dist/styles.css';
import BasicModal from "../Charts/Modal"
import LeftSideMain from "../LeftSideMain/LeftSideMain"
import BottomGraph from "../bottomGraph/BottomGraph";

const Mainpage = () => {

        return (
        <div className='container-fluid px-10 mainDiv'>
            <div className='row container'>
                <div className='col-lg-5'>
                   <LeftSideMain />

                </div>
                <div className='col-lg-7'>
                    {/* <BubbleChart /> */}

                    <div>
                        {/* <BubbleChart /> */}
                        <BasicModal />
                        {/* <button onClick={openModal}>Open Bubble Chart Modal</button> */}
                        {/* <BubbleChart isOpen={isModalOpen} onRequestClose={closeModal} data={bubbleChartData} options={options} /> */}
                    </div>

                </div>
            </div>

            <div className='bottomdiv py-10 px-10 pb-10'>
                <BottomGraph />
            </div>

        </div>
    )
}

export default Mainpage