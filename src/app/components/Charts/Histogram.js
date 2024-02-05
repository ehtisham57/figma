import React from 'react'
import Chart from 'react-google-charts'

const Histogram = () => {

    const HistogramData = [
        ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
        [-2 / 4, -1, 1, null],
        [-2 / 4, -1, 1, null],
        [-2 / 4, -1, 0, null],
        [-2 / 4, -1, 0, null],
        [2 / 3, -1, 0, null],
        [2 / 3, -1, 0, null],
        [-1 / 4, 0, 1, null],
        [-1 / 3, 0, -1, null],
        [-1 / 3, 0, null, null],
        [-1 / 3, 0, null, null],
    ]
    const chartOptions = {
        legend: {position: 'bottom', maxLines: 2 },
        colors: ['#DBDFF1', '#FF708B', '#FFA63F', '#8676FF'],
        interpolateNulls: false,
    }


    return (
        <div>
            <div className="container mt-1">
            <Chart
                width={'100%'}
                height={'100px'}
                chartType="Histogram"
                // loader={<div>Loading Chart</div>}
                data={HistogramData}
                options={chartOptions}
                // rootProps={{ 'data-testid': '5' }}
            />
        </div>
        </div>
    )
}

export default Histogram