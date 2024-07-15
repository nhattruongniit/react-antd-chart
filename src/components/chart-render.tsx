import Chart from "react-apexcharts";

type IProps = {
  id: string
}

function ChartRender({ id }: IProps) {
  return (
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
      series={[{
        name: 'Bacon',
        data: [44, 55, 57, 56, 61, 102]
      }, {
        name: 'Chicken',
        data: [76, 85, 101, 98, 87, 150]
      }, {
        name: 'Rice',
        data: [35, 41, 36, 26, 45, 48]
      }]}
    />
  )
}

export default ChartRender