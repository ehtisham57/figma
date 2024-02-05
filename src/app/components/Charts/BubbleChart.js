// import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const BubbleChart = () => {
    const options = {
        animationEnabled: true,
        // exportEnabled: true,
        // width:900,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            // text: "Sales Figures",/
            fontSize: 26
        },
        data: [
            {
                type: "bubble",
                innerHeight: "100%",
                outerHeight: "900px",

                dataPoints: [
                    { x: 64.8, y: 2.66, z: 12074.4, name: "India", color: "#695DFB" },
                    { x: 73.1, y: 1.61, z: 13313.8, name: "China", color: "#695DFB" },
                    { x: 78.1, y: 2.00, z: 306.77, name: "US", color: "#FAE634" },
                    { x: 68.5, y: 2.15, z: 237.414, name: "Indonesia", color: "#9352E5" },
                    { x: 72.5, y: 1.86, z: 193.24, name: "Brazil", color: "#695DFB" },
                    { x: 76.5, y: 2.36, z: 112.24, name: "Mexico", color: "#695DFB" },
                    { x: 50.9, y: 5.56, z: 154.48, name: "Nigeria", color: "#695DFB" },
                    { x: 68.6, y: 1.54, z: 141.91, name: "Russia", color: "#695DFB" },

                    { x: 82.9, y: 1.37, z: 127.55, name: "Japan", color: "#695DFB" },
                    { x: 79.8, y: 1.36, z: 81.90, name: "Australia", color: "#695DFB" },
                    { x: 72.7, y: 2.78, z: 79.71, name: "Egypt", color: "#695DFB" },
                    { x: 80.1, y: 1.94, z: 615.81, name: "UK", color: "#695DFB" },
                    { x: 55.8, y: 4.76, z: 39.24, name: "Kenya", color: "#695DFB" },
                    { x: 81.5, y: 1.93, z: 21.95, name: "Australia", color: "#695DFB" },
                    { x: 68.1, y: 4.77, z: 31.09, name: "Iraq", color: "#695DFB" },
                    { x: 27.9, y: 2.42, z: 5633.42, name: "Afganistan", color: "#695DFB" },
                    { x: 50.3, y: 5.58, z: 18.55, name: "Angola", color: "#695DFB" }
                ]
            }]
    }
    return (
        <div >
            <CanvasJSChart options={options} containerProps={{ width: '100% ', height: '600px' }} />
        </div>
    )
}

export default BubbleChart;                         