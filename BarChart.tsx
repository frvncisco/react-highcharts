import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsAccessibility from 'highcharts/modules/accessibility';

class BarChart extends React.Component<any, any> {
  constructor(props) {
    super(props);

    //init accessiblity module
    highchartsAccessibility(Highcharts);

    this.state = {
      chartOptions: {
        chart: {
          type: 'column',
          backgroundColor: '#fbf6f3',
        },
        accessiblity: {
          enabled: true,
          description:
            'waka waka waka waka this is the description text for my super awesome column bar chart',
          keyboardNavigation: {
            focusBorder: {
              style: {
                lineWidth: 3,
                color: '#aa1111',
                borderRadius: 5,
              },
              margin: 4,
            },
          },
        },
        title: {
          text: 'Chemical Engineering degree trends',
        },
        xAxis: {
          title: 'Year',
          categories: ['2017', '2018', '2019', '2020', '2021'],
          lineColor: 'black',
          lineWidth: '2',
        },
        yAxis: {
          title: '',
          gridLineWidth: '0',
          lineColor: 'black',
          lineWidth: '2',
        },
        tooltip: {
          split: true,
          useHTML: true,
          animation: false,
          backgroundColor: '#303638',
          borderColor: '#303638',
          borderRadius: '3',
          shadow: false,
          headerFormat: '{point.key}',
          // formatter: () => {
          //   return `There were <b></b> students enrolled`;
          // },
          style: {
            color: 'white',
            fontWeight: 'regular',
          },
        },
        series: [
          {
            name: 'Associates',
            data: [1200, 1200, 1200, 1200, 1200],
            color: '#003024',
            accessibility: {
              // we can add descriptions to each data series
              description:
                'Number of students studying for an associates degree in chemical engineering',
            },
          },
          {
            name: 'Bachelors',
            data: [1900, 1900, 1900, 1900, 1900],
            color: '#ff91e6',
            accessibility: {
              description:
                'Number of students studying for an bachelors degree in chemical engineering',
            },
          },
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this),
              },
            },
          },
        },
      },
      hoverData: null,
    };
  }

  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category });
  };

  render() {
    const { chartOptions, hoverData } = this.state;
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        <h3>Hovering over {hoverData}</h3>
      </div>
    );
  }
}

export default BarChart;
