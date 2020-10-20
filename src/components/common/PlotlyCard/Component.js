import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import '../../../styles/PlotlyCardTheme.less';
import { cardContainerActs } from '../../../state/actions';

import {
  CloudOutlined,
  HomeOutlined,
  TeamOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

import { Switch } from 'antd';

const icons = {
  Population: <TeamOutlined style={{ fontSize: '1.5rem' }} />,
  'Average Household Income': <HomeOutlined style={{ fontSize: '1.5rem' }} />,
  'Average Temperature': <CloudOutlined style={{ fontSize: '1.5rem' }} />,
  'Cost of Living': <DollarCircleOutlined style={{ fontSize: '1.5rem' }} />,
};

export default ({ props }) => {
  const { graphLabel, data } = props;
  const [graphTypeState, setGraphTypeState] = useState('bar');
  const cardHeight = 64 * data.length;

  const relativeProperty = () => {
    switch (graphLabel) {
      case 'Population':
        return graphTypeState === 'line' ? 'populationhist' : 'population';
      case 'Average Household Income':
        return graphTypeState === 'line'
          ? 'historicalincome'
          : 'householdincome';
      case 'Average Temperature':
        return graphTypeState === 'line'
          ? 'historicalweather'
          : 'averagetemperature';
      case 'Cost of Living':
        return graphTypeState === 'line'
          ? 'historicalyearlyhousecost'
          : 'averagehouse';
      default:
        return;
    }
  };

  const graphTypeHandler = () => {
    if (graphTypeState === 'bar') {
      setGraphTypeState('line');
    }
    if (graphTypeState === 'line') {
      setGraphTypeState('bar');
    }
  };

  const relativePropertyLineGraph = {
    historicalweather: {
      x: 'month',
      y: 'temperature',
    },
    populationhist: {
      x: 'year',
      y: 'pop',
    },
    historicalyearlyhousecost: {
      x: 'year',
      y: 'housingcost',
    },
    historicalincome: {
      x: 'year',
      y: 'householdincome',
    },
  };

  return (
    <div className="card">
      <div className="cardInfo">
        {icons[graphLabel]}
        <h3 className="plotlyName">{graphLabel}</h3>
        <div className="antdSwitch">
          <Switch
            checkedChildren="Historical"
            size="small"
            onChange={graphTypeHandler}
            disabled={data.length === 1 ? true : false}
          />
        </div>
      </div>

      <div className="plotContainer">
        <Plot
          data={data.map(citydata => {
            return graphTypeState === 'line' &&
              citydata.cityid !== 0 &&
              citydata[relativeProperty()] !== undefined
              ? /// LINE GRAPH
                {
                  x: citydata[relativeProperty()].map(value => {
                    return value[
                      relativePropertyLineGraph[relativeProperty()].x
                    ];
                  }),
                  y: citydata[relativeProperty()].map(value => {
                    return value[
                      relativePropertyLineGraph[relativeProperty()].y
                    ];
                  }),
                  type: graphTypeState,
                  mode: 'lines+points',
                  marker: {
                    color: citydata.color,
                  },
                  name: `${citydata.cityname}, ${citydata.citystate}`,
                  orientation: 'h',
                  hoverinfo: 'skip',
                  showlegend: false,
                }
              : {
                  /// BAR GRAPH
                  x: [citydata[relativeProperty()]],
                  type: graphTypeState,
                  mode: 'markers',
                  marker: {
                    color: citydata.color,
                  },
                  name: `${citydata.cityname}, ${citydata.citystate}`,
                  orientation: 'h',
                  hoverinfo: 'skip',
                  showlegend: false,
                };
          })}
          layout={{
            plot_bgcolor: 'transparent',
            paper_bgcolor: 'transparent',
            autosize: true,
            margin: { l: 0, t: 0, r: 0, b: 0 },
            yaxis: {
              automargin: true,
              visible: graphTypeState === 'bar' ? false : true,
            },
            xaxis: {
              automargin: true,
              visible: true,
            },
            font: {
              color: '#ffffff',
            },
          }}
          useResizeHandler
          style={{
            width: '100%',
            height: `${cardHeight}px`,
          }}
          config={{
            displayModeBar: false,
            staticPlot: true,
            responsive: true,
          }}
        />
      </div>
    </div>
  );
};
