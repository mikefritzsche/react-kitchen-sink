import {uniqueId, upperFirst} from 'lodash';
import {camelize, getColor, HEALTH_COLORS} from '../../../../../helpers';
import { Doughnut as Donut } from 'react-chartjs-2';

import { type ModuleConfig } from '../../../types'

export default function DonutModule(props: ModuleConfig) {
  const labels = props.breakdown ? Object.keys(props.breakdown).map((label) => upperFirst(label)) : []

  const bgColors = labels.map((label, index) => {
    console.log('label: ', label, camelize(label))
    return props.config.dataType === 'health'
      ? HEALTH_COLORS[camelize(label)]
      : getColor(index)
  })
  const datasets = props.breakdown
    ?  [{
      label: '',
      data: Object.values(props.breakdown),
      backgroundColor: bgColors
    }]
    : []
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const data = {
    labels,
    datasets,
  };
  return (
    <>
      {props.breakdown ? <Donut id={uniqueId()} data={data} options={options}/> : null}
    </>
  )
}
