import React from "react";
import GradesTable from "./GradesTable"

class StudentsTable extends React.Component {
    render() {
        const { stable, plusGrade, minusGrade } = this.props
        return <>
            <table className="table table-warning table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stable.map((elm, j) => <tr key={j}>
                            <td>{elm.name}</td>
                            <td>{elm.surname}</td>
                            <td>
                                <GradesTable
                                    gtable={elm.grades}
                                    plusGrade={plusGrade.bind(this, j)}
                                    minusGrade={minusGrade.bind(this, j)}
                                />
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    }
}

export default StudentsTable