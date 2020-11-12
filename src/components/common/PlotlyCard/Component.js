import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import '../../../styles/PlotlyCardTheme.less';
import styles from './styles';
import { useSelector } from 'react-redux';
import { Collapse, UnmountClosed } from 'react-collapse';

import {
  CloudOutlined,
  HomeOutlined,
  TeamOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

import { Switch } from 'antd';

const icons = {
  Population: <TeamOutlined style={{ fontSize: '1.5rem' }} />,
  'Average Household Income': (
    <DollarCircleOutlined style={{ fontSize: '1.5rem' }} />
  ),
  'Average Temperature': <CloudOutlined style={{ fontSize: '1.5rem' }} />,
  'Average Home Price': <HomeOutlined style={{ fontSize: '1.5rem' }} />,
};

export default ({ props, display }) => {
  const { graphLabel, data } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [graphTypeState, setGraphTypeState] = useState('bar');
  const theme = useSelector(state => state.theme);
  const cardHeight = 64 * data.length;
  const sty = styles(display, theme);

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
      case 'Average Home Price':
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
    <div className="card" style={sty.card}>
      <div className="cardInfo">
        {icons[graphLabel]}
        <h3 className="plotlyName">{graphLabel}</h3>
        <div className="antdSwitch">
          <Switch
            checkedChildren="Collapse"
            unCheckedChildren="Expand"
            size="medium"
            onChange={() => setIsOpened(!isOpened)}
            disabled={data.length === 1 ? true : false}
          />
        </div>
      </div>
      <div className="plotContainer">
        <Collapse isOpened={isOpened}>
          <Plot
            data={data.map(citydata => {
              console.log(citydata);
              return graphTypeState === 'line' &&
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
                    name: citydata.citynamestate,
                    orientation: 'h',
                    hoverinfo: 'true',
                    showlegend: false,
                  }
                : {
                    /// BAR GRAPH
                    y: [citydata[relativeProperty()]],
                    type: 'bar',
                    mode: 'markers',
                    marker: {
                      color: citydata.color,
                    },
                    name: citydata.citynamestate,
                    orientation: 'v',
                    hoverinfo: 'true',
                    showlegend: false,
                  };
            })}
            layout={{
              plot_bgcolor: 'transparent',
              paper_bgcolor: 'transparent',
              autosize: true,
              width: '500',
              height: '500',
              margin: { l: 0, t: 0, r: 0, b: 0 },
              yaxis: {
                automargin: true,
                visible: true,
                gridcolor: '#ffffff20',
              },
              xaxis: {
                automargin: true,
                visible: true,
                gridcolor: '#ffffff20',
              },
              font: {
                color: '#ffffff80',
              },
              line: {
                color: 'white',
              },
            }}
            useResizeHandler
            style={{
              width: '60%',
              height: '50%',
            }}
            config={{
              displayModeBar: false,
              staticPlot: false,
              responsive: true,
            }}
          />
        </Collapse>
      </div>
    </div>
  );
};
