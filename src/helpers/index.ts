export const DEFAULT_ENTRY_COLOR = '#f3f4f6'
export const DEFAULT_CHART_COLOR = '#cecefc'
export const DEFAULT_COLORS = [
  { background: '#ffd0cf', foreground: '#9a1c32' },
  { background: '#fcd4b5', foreground: '#823b05' },
  { background: '#ffde83', foreground: '#674c00' },
  { background: '#cfe57e', foreground: '#465511' },
  { background: '#a6e9d8', foreground: '#1f594d' },
  { background: '#9de8f2', foreground: '#0d5861' },
  { background: '#add8ff', foreground: '#005aad' },
  { background: '#e7d5f7', foreground: '#7023b1' },
  { background: '#f7d0eb', foreground: '#92186c' },
  { background: '#e5d6cd', foreground: '#724347' },
  { background: DEFAULT_ENTRY_COLOR, foreground: '#4b5563' },

  { background: '#f3878a', foreground: '#1f2937' },
  { background: '#f88a36', foreground: '#1f2937' },
  { background: '#f3b300', foreground: '#1f2937' },
  { background: '#94b223', foreground: '#1f2937' },
  { background: '#20bba1', foreground: '#1f2937' },
  { background: '#1cb7cc', foreground: '#1f2937' },
  { background: '#47a7ff', foreground: '#1f2937' },
  { background: '#c393ea', foreground: '#1f2937' },
  { background: '#eb84ca', foreground: '#1f2937' },
  { background: '#c19d8a', foreground: '#1f2937' },
  { background: '#d1d5db', foreground: '#1f2937' },
]
export const HEALTH_COLORS_PREV = [
  { background: '#d7f7e5', foreground: '#135b32' }, // healthy health tag
  { background: '#ffefb4', foreground: '#674c00' }, // neutral health tag
  { background: '#ffebea', foreground: '#9a1c32' }, // at risk health tag
]
export const OTHER_COLORS = [
  { background: '#c4c9f7', foreground: '#4b5563' },
  { background: DEFAULT_CHART_COLOR, foreground: '#4b5563' },
]

export const NEW_COLORS = [
  '#4747D1', // purple-4
  '#CECEFC', // purple-2
  '#238471', // kiwi-4
  '#52D6BB', // kiwi-2
  '#C05707', // orange-4
  '#FAB27A', // orange-2
  '#D7239E', // raspberry-4
  '#F1ADDC', // raspberry-2
  '#148190', // blueberry-4
  '#47D3E6', // blueberry-2
]

export const NEW_COLORS_TRENDS = [
  '#D7239E', // raspberry-4
  '#47A7FF', // blue-2
  '#F3B300', // yellow-4
  '#697F19', // lime-4
  '#9C50DD', // grape-4
  '#F88A36', // orange-3
  '#20BBA1', // kiwi-3
  '#EB84CA', // raspberry-3
  '#94B223', // lime-3
  '#C393EA', // grape-3
]

export const HEALTH_COLORS = {
  atRisk: '#DD304C',
  healthy: '#27BF69',
  neutral: '#FFCB3D',
  noValue: '#E5E7EB',
}

export const backgroundToForegroundColors = new Map()
// export const allColors = [...DEFAULT_COLORS, ...HEALTH_COLORS, ...OTHER_COLORS]
// allColors.forEach((color) => {
//   backgroundToForegroundColors.set(color.background, color.foreground)
// })
// export const healthColorsMap = {
//   'healthy': { background: '#d7f7e5', foreground: '#135b32' },
//   'neutral': { background: '#ffefb4', foreground: '#674c00' },
//   'atRisk': { background: '#ffebea', foreground: '#9a1c32' },
// }
export function getColor(index: number): string {
  while (index > NEW_COLORS_TRENDS.length - 1) {
    index = index - NEW_COLORS_TRENDS.length
  }
  return NEW_COLORS_TRENDS[index]
}
export const healthLabels = ['Healthy', 'Neutral', 'At Risk'];
export const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export function camelize(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
