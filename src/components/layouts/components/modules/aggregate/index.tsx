import {ModuleConfig} from "../../../types";
import BarModule from "../bar";
import DonutModule from "../donut";
import {useEffect, useState} from "react";

function fetchLayoutData(id: string): Promise<any>{
  return Promise.resolve({
    data: breakdownsData[id]
  })
}
const breakdownsData = {
  // health
  '8418a81d-7c74-4b8d-8f48-50393131a232': {
    'healthy': 30,
    'neutral': 14,
    'at risk': 3,
  },
  // health
  'a2fd87f3-a939-47ca-9d39-0faf5ea37f39': {
    'healthy': 10,
    'neutral': 24,
    'at risk': 5,
  },
  // date
  '4361ef87-cb20-48d3-bd37-90b0418ead45': {
    '01/23/23': 10,
    '02/23/23': 24,
    '03/23/23': 5,
    '04/23/23': 13,
    '05/23/23': 34,
    '06/23/23': 28,
  },
}
export default function Aggregate(props: ModuleConfig) {
  console.log('Aggregate Module: ', props)
  const [breakdown, setBreakdown] = useState<any>({})
  useEffect(() => {
    fetchLayoutData(props.id).then((resp) => {
      setBreakdown(resp.data)
    })
  }, [])
  return (
    <>
      {props.config.type === 'bar' && <BarModule breakdown={breakdown} {...props} />}
      {props.config.type === 'donut' && <DonutModule breakdown={breakdown} {...props} />}
    </>
  )
}
