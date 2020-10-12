import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import '../../styles/PlotlyCardTheme.less';
import {
  CloudOutlined,
  SafetyOutlined,
  TeamOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const icons = {
  populationdensityrating: <TeamOutlined style={{ fontSize: '1.5rem' }} />,
  safteyratingscore: <SafetyOutlined style={{ fontSize: '1.5rem' }} />,
  averagetemperature: <CloudOutlined style={{ fontSize: '1.5rem' }} />,
  costoflivingscore: <HomeOutlined style={{ fontSize: '1.5rem' }} />,
};

const PlotlyCard = props => {
  const { graphLabel, data } = props;
  const [graphTypeState, setGraphTypeState] = useState('bar');
  const cardHeight = 64 * data.length;

  const relativeProperty = () => {
    switch (graphLabel) {
      case 'Population Density':
        return 'populationdensityrating';
      case 'Safety Rating':
        return 'safteyratingscore';
      case 'Average Temperature':
        return 'averagetemperature';
      case 'Cost of Living':
        return 'costoflivingscore';
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

export default PlotlyCard;
