import React from "react";

class GradesTable extends React.Component {
    render() {
        const { gtable, plusGrade, minusGrade } = this.props
        return <>
            <table className="table table-danger table-hover">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gtable.map((elm, k) => <tr key={k}>
                            <td>{elm.subject}</td>
                            <td>{elm.grade}
                                <button className="btn btn-warning" onClick={plusGrade.bind(this, k)}>+</button>
                                <button className="btn btn-danger" onClick={minusGrade.bind(this, k)}>-</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    }
}

export default GradesTable