import {Link} from "react-router-dom";
import {Responsive, WidthProvider} from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import {Bar, Doughnut} from 'react-chartjs-2';
import faker from 'faker';

import './styles.css'
import {uniqueId} from "lodash";
import {useState} from "react";

export function LayoutsList() {
  return (
    <div className="layouts-list" style={{minWidth: 140, fontSize: 14, borderRight: '1px solid #ccc', padding: 10}}>
      <div><Link to={'/layouts/home'}>Home</Link></div>
      <div><Link to={'/layouts/my-custom-layout'}>My Custom Layout</Link></div>
    </div>
  )
}

type ModuleConfig = {
  config: {
    type: string
  }
  [key: string]: unknown
}

function Aggregate(props: ModuleConfig) {
  return (
    <div style={{padding: 10}}>
      {props.config.type === 'bar' && <BarModule {...props} />}
      {props.config.type === 'donut' && <DonutModule {...props} />}
    </div>)
}

function BarModule(props: ModuleConfig) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  return (<div style={{height: '100%', width: '100%'}}><Bar id={uniqueId()} data={barData()} options={options}/></div>)
}

function DonutModule(props: ModuleConfig) {
  return (<div style={{padding: 10}}>Donut - {JSON.stringify(props)}</div>)
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

const barLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const barDataSets = [
  {
    label: 'Dataset 1',
    data: barLabels.map(() => faker.datatype.number({min: 0, max: 1000})),
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  },
  {
    label: 'Dataset 2',
    data: barLabels.map(() => faker.datatype.number({min: 0, max: 1000})),
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
]
const barData = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  return {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
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

const LayoutsData = {
  default: [],
  'home': [],
  'my-custom-layout': [],
}

function fetchLayoutData(layoutId: string) {
  return Promise.resolve()
}

const layouts: Record<string, string | unknown> = {
  default: {
    title: 'Default',
    gridItems: [
      {
        id: 1,
        layout: [{i: '1', x: 0, y: 0, w: 5, h: 2, static: true}],
        name: "Item One", type: 'aggregate', config: {type: 'bar'}
      },
    ],
  },
  'home': {
    title: 'Home',
    gridItems: [
      {id: 1, layout: [{i: '1', x: 0, y: 0, w: 5, h: 2,  static: true}], name: "Item One", type: 'aggregate', config: {type: 'bar'}},
      {id: 2, layout: [{i: '2', x: 5, y: 0, w: 3, h: 2,  static: true}], name: "Item Two", type: 'aggregate', config: {type: 'donut'}},
      {id: 3, layout: [{i: '3', x: 8, y: 0, w: 3, h: 2,  static: true}], name: "Item Three", type: 'aggregate', config: {type: 'bar'}},
    ],
  },
  'my-custom-layout': {
    title: 'My Custom Layout',
    gridItems: [
      {id: 1, layout: [{i: '1', x: 0, y: 0, w: 5, h: 2,  static: true}], name: "Item One", type: 'aggregate', config: {type: 'bar'}},
      {id: 2, layout: [{i: '2', x: 5, y: 0, w: 3, h: 2,  static: true}], name: "Item Two", type: 'aggregate', config: {type: 'donut'}},
      {id: 3, layout: [{i: '3', x: 8, y: 0, w: 3, h: 2,  static: true}], name: "Item Three", type: 'aggregate', config: {type: 'bar'}},
      {id: 4, layout: [{i: '4', x: 0, y: 3, w: 5, h: 2,  static: true}], name: "Item Four", type: 'aggregate', config: {type: 'donut'}},
      {id: 5, layout: [{i: '5', x: 5, y: 3, w: 3, h: 2,  static: true}], name: "Item Five", type: 'aggregate', config: {type: 'bar'}},
      {id: 6, layout: [{i: '6', x: 8, y: 3, w: 3, h: 2,  static: true}], name: "Item Six", type: 'aggregate', config: {type: 'donut'}},
      {id: 7, layout: [{i: '7', x: 0, y: 6, w: 5, h: 2,  static: true}], name: "Item Seven", type: 'aggregate', config: {type: 'bar'}},
      {id: 8, layout: [{i: '8', x: 5, y: 6, w: 3, h: 2,  static: true}], name: "Item Eight", type: 'aggregate', config: {type: 'donut'}},
      {id: 9, layout: [{i: '9', x: 8, y: 6, w: 3, h: 2,  static: true}], name: "Item Nine", type: 'aggregate', config: {type: 'donut'}}
    ],
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
  const [isEditing, setIsEditing] = useState(true)
  if (!isEditing) {
    layouts[layoutId].gridItems.layout.map((item: any) => {
      item.static = true
      return item
    })
  }
  return <div className="layouts-container">
    <ResponsiveGridLayout
      className="layout"
      layouts={{lg: layouts[layoutId].gridItems.layout ?? []}}
      breakpoints={{lg: 1200}}
      cols={{lg: 12}}
      onDragStop={onMoveCard}
      onResizeStop={onResizeCard}
      // draggableCancel={isEditing ? '.MyNonDraggableAreaClassName' : ''}
      // isResizable={!isEditing}
      // isDraggable={!isEditing}
    >
      {layouts[layoutId].gridItems.map((item, i) => {
        return (
          <div key={item.id} className="grid-item">
            <DynamicModuleComponent {...item} />
          </div>
        );
      })}
    </ResponsiveGridLayout>
  </div>
}
