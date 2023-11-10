import Count from 'react-countup'

const CountUp = (value: number | string) => <Count end={+value} separator="," />

export default CountUp
