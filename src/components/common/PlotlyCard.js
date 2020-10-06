import React from 'react';
import Plot from 'react-plotly.js';
import '../../styles/PlotlyCardTheme.css';

const PlotlyCard = props => {
  const { plotlyIcon, plotlyName, plotlyType } = props;

  return (
    <div className="card">
      <div className="cardInfo">
        <img src={plotlyIcon} className="plotlyIcon" alt={plotlyName} />
        <h3 className="plotlyName">{plotlyName}</h3>
      </div>

      <div className="plotContainer">
        <Plot
          className="plot"
          data={[
            {
              // x: ['giraffes', 'orangutans', 'monkeys'],
              x: [32],
              type: `${plotlyType}`,
              mode: 'lines+markers',
              marker: { color: 'green' },
              style: { background: 'green' },
              name: 'Los Angeles',
              orientation: 'h',
              hoverinfo: 'skip',
            },
            {
              // x: [1, 8, 1],
              x: [46],
              type: `${plotlyType}`,
              mode: 'lines+markers',
              marker: { color: 'red' },
              style: { background: 'green' },
              name: 'Long Beach',
              orientation: 'h',
              hoverinfo: 'skip',
            },
            {
              // x: [1, 7, 8],
              x: [78],
              type: `${plotlyType}`,
              mode: 'lines+markers',
              marker: { color: 'yellow' },
              style: { background: 'green' },
              name: 'San Diego',
              orientation: 'h',
              hoverinfo: 'skip',
            },
            {
              // x: [1, 7, 8],
              x: [89],
              type: `${plotlyType}`,
              mode: 'lines+markers',
              marker: { color: 'purple' },
              style: { background: 'green' },
              name: 'San Francisco',
              orientation: 'h',
              hoverinfo: 'skip',
            },
          ]}
          layout={{
            plot_bgcolor: 'white',
            paper_bgcolor: 'white',
            autosize: true,
          }}
          useResizeHandler="true"
          style={{
            width: '100%',
            height: '100%',
          }}
          config={{
            displayModeBar: false,
            staticPlot: true,
          }}
        />
      </div>
    </div>
  );
};

export default PlotlyCard;
