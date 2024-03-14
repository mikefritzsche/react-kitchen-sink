import {Link} from "react-router-dom";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
// import {Responsive, WidthProvider} from "react-grid-layout";

import './LayoutStyles.scss'
import './styles.css'
import {useEffect, useState} from "react";

import Aggregate from "./components/modules/aggregate";
import {Button} from "@mui/material";

export function LayoutsList() {
  return (
    <div className="layouts-list" style={{minWidth: 140, fontSize: 14, borderRight: '1px solid #ccc', padding: 10}}>
      <div><Link to={'/layouts/home'}>Home</Link></div>
      <div><Link to={'/layouts/my-custom-layout'}>My Custom Layout</Link></div>
    </div>
  )
}

const components = {
  aggregate: Aggregate
}
const pieData = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const donutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const layouts: Record<string, string | unknown> = {
  default: {
    title: 'Default',
    gridItems: [
      {
        id: 1,
        name: "Item One",
        type: 'aggregate',
        config: {
          type: 'bar'
        }
      },
    ],
    layout: [
      {i: '1', x: 0, y: 0, w: 5, h: 2}
    ],
  },
  'home': {
    title: 'Home',
    gridItems: [
      {
        id: '8418a81d-7c74-4b8d-8f48-50393131a232',
        name: "Item One",
        type: 'aggregate',
        config: {
          type: 'bar',
          dataType: 'health'
        }
      },
      {
        id: 'a2fd87f3-a939-47ca-9d39-0faf5ea37f39',
        name: "Item Two",
        type: 'aggregate',
        config: {
          type: 'donut',
          dataType: 'health'
        }
      },
      {
        id: '4361ef87-cb20-48d3-bd37-90b0418ead45',
        name: "Item Three",
        type: 'aggregate',
        config: {
          type: 'bar',
          dataType: 'months'
        }
      },
    ],
    layout: [
      {i: '8418a81d-7c74-4b8d-8f48-50393131a232', x: 0, y: 0, w: 5, h: 2},
      {i: 'a2fd87f3-a939-47ca-9d39-0faf5ea37f39', x: 5, y: 0, w: 3, h: 2},
      {i: '4361ef87-cb20-48d3-bd37-90b0418ead45', x: 8, y: 0, w: 3, h: 2},
    ]
  },
  'my-custom-layout': {
    title: 'My Custom Layout',
    gridItems: [
      {id: 1, name: "Item One", type: 'aggregate', config: {type: 'bar'}},
      {id: 2, name: "Item Two", type: 'aggregate', config: {type: 'donut'}},
      {id: 3, name: "Item Three", type: 'aggregate', config: {type: 'bar'}},
      {id: 4, name: "Item Four", type: 'aggregate', config: {type: 'donut'}},
      {id: 5, name: "Item Five", type: 'aggregate', config: {type: 'bar'}},
      {id: 6, name: "Item Six", type: 'aggregate', config: {type: 'donut'}},
      {id: 7, name: "Item Seven", type: 'aggregate', config: {type: 'bar'}},
      {id: 8, name: "Item Eight", type: 'aggregate', config: {type: 'donut'}},
      {id: 9, name: "Item Nine", type: 'aggregate', config: {type: 'donut'}}
    ],
    layout: [
      {i: '1', x: 0, y: 0, w: 5, h: 2,  static: true},
      {i: '2', x: 5, y: 0, w: 3, h: 2,  static: true},
      {i: '3', x: 8, y: 0, w: 3, h: 2,  static: true},
      {i: '4', x: 0, y: 3, w: 5, h: 2,  static: true},
      {i: '5', x: 5, y: 3, w: 3, h: 2,  static: true},
      {i: '6', x: 8, y: 3, w: 3, h: 2,  static: true},
      {i: '7', x: 0, y: 6, w: 5, h: 2,  static: true},
      {i: '8', x: 5, y: 6, w: 3, h: 2,  static: true},
      {i: '9', x: 8, y: 6, w: 3, h: 2,  static: true},
    ]
  }
}

function onMoveCard(props) {
  console.log('onMoveCard: ', props)
}

function onResizeCard(props) {
  console.log('onResizeCard: ', props)
}

function DynamicModuleComponent(props) {
  const Module = components[props.type]
  return <Module {...props} />
}

export default function Layout({layoutId}: { layoutId: string }) {
  const [isEditing, setIsEditing] = useState(false)
  const [ editText, setEditText ] = useState('')

  useEffect(() => {
    setEditText(isEditing ? 'Save Layout' : 'Edit Layout')
  }, [])
  useEffect(() => {
    setEditText(isEditing ? 'Save Layout' : 'Edit Layout')
  }, [isEditing])
  return <div className="layouts-container">
    <Button
      size="small"
      variant="outlined"
      onClick={() => setIsEditing(!isEditing)}
    >
      {editText} - {isEditing ? 'On' : 'Off'}
    </Button>
    <ReactGridLayout
      className="layout"
      layout={layouts[layoutId].layout}
      onDragStop={onMoveCard}
      onResizeStop={onResizeCard}
      // draggableCancel={isEditing ? '.MyNonDraggableAreaClassName' : ''}
      isResizable={isEditing}
      isDraggable={isEditing}
    >
      {layouts[layoutId].gridItems.map((item) => {
        return (
          <div key={item.id} className="grid-item">
            <DynamicModuleComponent {...item} />
          </div>
        );
      })}
    </ReactGridLayout>
  </div>
}
