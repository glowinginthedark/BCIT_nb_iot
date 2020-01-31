import React, {
    Component
} from 'react';
import Chart from 'react-apexcharts';

export class TemperatureChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Temperature',
                type: 'line',
                data: [14, 12, 18, 11, 16, 9, 13, 15]
            }],
            options: {
                chart: {
                    height: 400,
                    type: 'line',
                    id: "Temperature"
                },
                title: {
                    text: "Temperature",
                    align: 'left',
                },
                xaxis: {
                    categories: ['Jan 12', 'Jan 13', 'Jan 14', 'Jan 15', 'Jan 16', 'Jan 17', 'Jan 18', 'Jan 19']
                },
                yaxis: {
                    show: true,
                    showAlways: true,
                    seriesName: undefined,
                    labels: {
                        show: true,
                        align: 'right',
                        style: {
                            color: 'black',
                            fontSize: '12px',
                        },
                    },
                    title: {
                        text: 'Temperature (Celsius)',
                        style: {
                            color: 'blue',
                            fontSize: '12px',
                        },
                    },

                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },

            },
        };
    }

    render() {
        return ( 
            <div className = 'app' >
                <div className = 'row' >
                    <div className = 'mixed-chart' >
                        <Chart 
                            options = {this.state.options}
                            series = {this.state.series}
                            type = 'line'
                            width = '500' 
                        />
                    </div> 
                </div> 
            </div>
        );
    }
}

export default TemperatureChart