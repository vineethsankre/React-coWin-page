import {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

class VaccinationCoverage extends Component {
  DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  renderBarChart = coverageDetails => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={coverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <YAxis
          tickFormatter={this.DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" />
      </BarChart>
    </ResponsiveContainer>
  )
  render() {
    const {coverageDetails} = this.props
    return (
      <div className="container">
        <h1 className="heading">Vaccination Coverage</h1>
        {this.renderBarChart(coverageDetails)}
      </div>
    )
  }
}

export default VaccinationCoverage
