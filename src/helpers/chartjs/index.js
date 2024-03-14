import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  DoughnutController,
  LineController,
  PieController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  TimeScale,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import gradient from 'chartjs-plugin-gradient'

// import 'chartjs-adapter-dayjs'

ChartJS.register(
  // bar chart
  BarController,
  BarElement,

  // doughnut chart
  DoughnutController,
  ArcElement,
  PieController,

  // line chart
  LineController,
  LineElement,
  PointElement,

  // plugins or scales
  Legend,
  Title,
  Tooltip,
  Filler,
  TimeScale,
  CategoryScale,
  LinearScale,
  LogarithmicScale
)
ChartJS.register(ChartDataLabels)
ChartJS.register(gradient)

ChartJS.defaults.responsive = true
ChartJS.defaults.maintainAspectRatio = false
ChartJS.defaults.animation = false
ChartJS.defaults.font.size = 13
