import Chart from "react-apexcharts";

function ChartRender() {
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
            categories: ['Admin', 'Member', 'Operator'],
          },
          yaxis: {
            title: {
              text: '(member)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " member"
              }
            }
          }
        }}
        series={[{
          name: 'Admin',
          data: [44, 55, 57]
        }, {
          name: 'Member',
          data: [76, 85, 101]
        }, {
          name: 'Operator',
          data: [35, 41, 36]
        }]}
      />
    </>
  )
}

export default ChartRender