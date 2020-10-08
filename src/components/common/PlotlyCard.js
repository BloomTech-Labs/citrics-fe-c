import React from 'react';
import Plot from 'react-plotly.js';
import '../../styles/PlotlyCardTheme.less';

const PlotlyCard = props => {
  const { plotlyIcon, plotlyName, plotlyType, data, by } = props;

  return (
    <div className="card">
      <div className="cardInfo">
        {plotlyIcon}
        <h3 className="plotlyName">{plotlyName}</h3>
      </div>

      <div className="plotContainer">
        <Plot
          data={data.map(citydata => {
            return {
              x: [citydata[by]],
              type: `${plotlyType}`,
              mode: 'lines+markers',
              marker: {
                color: '#' + (((1 << 24) * Math.random()) | 0).toString(16),
              },
              name: `${citydata.city}, ${citydata.state}`,
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
            },
            font: {
              color: 'white',
            },
          }}
          useResizeHandler
          style={{
            width: '100%',
            height: '100%',
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
