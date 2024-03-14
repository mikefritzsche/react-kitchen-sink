import { Bar } from "react-chartjs-2";
import {uniqueId, upperFirst} from "lodash";
import {camelize, getColor, HEALTH_COLORS} from "../../../../../helpers";

import type { ModuleConfig } from "../../../types";

export default function BarModule(props: ModuleConfig) {
  console.log('barModule props: ', props)
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
      {props.breakdown ? <Bar id={uniqueId()} data={data} options={options}/> : null}
    </>)
}
