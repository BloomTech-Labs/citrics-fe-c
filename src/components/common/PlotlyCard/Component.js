import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import '../../../styles/PlotlyCardTheme.less';
import { cardContainerActs } from '../../../state/actions';

import {
  CloudOutlined,
  IdcardOutlined,
  TeamOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

const icons = {
  population: <TeamOutlined style={{ fontSize: '1.5rem' }} />,
  averageage: <IdcardOutlined style={{ fontSize: '1.5rem' }} />,
  averagetemperature: <CloudOutlined style={{ fontSize: '1.5rem' }} />,
  averagehouse: <DollarCircleOutlined style={{ fontSize: '1.5rem' }} />,
};

export default ({ props }) => {
  const { graphLabel, data } = props;
  const [graphTypeState, setGraphTypeState] = useState('bar');
  const cardHeight = 64 * data.length;

  const relativeProperty = () => {
    switch (graphLabel) {
      case 'Population':
        return 'population';
      case 'Average Age':
        return 'averageage';
      case 'Average Temperature':
        return 'averagetemperature';
      case 'Cost of Living':
        return 'averagehouse';
      default:
        return;
    }
  };

  return (
    <div className="card">
      <div className="cardInfo">
        {icons[relativeProperty()]}
        <h3 className="plotlyName">{graphLabel}</h3>
      </div>

      <div className="plotContainer">
        <Plot
          data={data.map(citydata => {
            return {
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
              visible: false,
            },
            xaxis: {
              automargin: true,
              visible: false,
            },
            font: {
              color: 'white',
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
