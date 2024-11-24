import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { VarialbesType } from "../../../types";

function ChartRender() {
  const dataChart = useSelector((state: RootState) => state.chart.dataChart);

  if(!dataChart) {
    return (
      <div className='flex items-center justify-center h-[350px]'>
        No data
      </div>
    )
  }

  const series = dataChart.map((item: VarialbesType) => {
    const data = [];
    for(let i = 0; i < 6; i++) {
      data.push(Math.floor(Math.random() * 100))
    }
    return {
      name: item.name,
      data
    }
  })

  return (
    <>
      <Chart
        type="bar"
        width="100%"
        height={350}
        options={{
          chart: {
            type: 'bar',
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          },
          yaxis: {
            title: {
              text: '(con)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " con"
              }
            }
          }
        }}
        series={series}
      />
    </>
  )
}

export default ChartRender