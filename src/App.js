import React from "react";
import StudentsTable from "./components/StudentsTable"

class App extends React.Component {
  state = {
    groups: [
      {
        group_name: "A1",
        students: [
          {
            name: "Ani",
            surname: "Sargsyan",
            grades: [
              { subject: "Angular", grade: 8 },
              { subject: "React", grade: 10 }
            ]
          },
          {
            name: "Davit",
            surname: "Davtyan",
            grades: [
              { subject: "Angular", grade: 6 },
              { subject: "React", grade: 4 }
            ]
          }
        ]
      },
      {
        group_name: "B1",
        students: [
          {
            name: "Lilia",
            surname: "Voskanyan",
            grades: [
              { subject: "Node", grade: 10 },
              { subject: "React", grade: 9 }
            ]
          },
          {
            name: "Sahak",
            surname: "Vardanyan",
            grades: [
              { subject: "Node", grade: 7 },
              { subject: "React", grade: 8 }
            ]
          }
        ]
      }
    ]
  }
  plusGrade(i, j, k) {
    let elm = this.state.groups[i].students[j].grades[k]
    if (elm.grade < 10) {
      elm.grade++
    }
    this.setState({
      groups: this.state.groups
    })
  }
  minusGrade(i, j, k) {
    let elm = this.state.groups[i].students[j].grades[k]
    if (elm.grade > 0) {
      elm.grade--
    }
    this.setState({
      groups: this.state.groups
    })
  }
  render() {
    return <>
      <table className="table table-success table-hover">
        <thead>
          <tr>
            <th>Group</th>
            <th>Students</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.groups.map((elm, i) => <tr key={i}>
              <td>{elm.group_name}</td>
              <td><StudentsTable
                stable={elm.students}
                plusGrade={this.plusGrade.bind(this, i)}
                minusGrade={this.minusGrade.bind(this, i)}
              /></td>
            </tr>)
          }
        </tbody>
      </table>



    </>
  }
}

export default App;
