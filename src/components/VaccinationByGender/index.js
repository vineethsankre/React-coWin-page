import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

class VaccinationByGender extends Component {
  renderPieChart = byGender => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={byGender}
          startAngle={0}
          endAngle={180}
          innerRadius="30%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </ResponsiveContainer>
  )
  render() {
    const {byGender} = this.props
    return (
      <div className="container">
        <h1 className="heading">Vaccination by gender</h1>
        {this.renderPieChart(byGender)}
      </div>
    )
  }
}

export default VaccinationByGender
