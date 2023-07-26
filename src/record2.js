function Records2() {

    let employees = [
        {
            "name": "Osric",
            "salary": 3000,
            "dept": "IT"
        },

        {
            "name": "Osric",
            "salary": 3000,
            "dept": "IT"
        },

        {
            "name": "Osric",
            "salary": 3000,
            "dept": "IT"
        },

        {
            "name": "Osric",
            "salary": 3000,
            "dept": "IT"
        }
    ]
    

    return (

        <table>
            {
                employees.map( (record)=>
                <tr>
                    <td>{record.name}</td>
                    <td>{record.salary}</td>
                    <td>{record.dept}</td>
                    <td>{record.salary*21/100}</td>
                </tr>
                )
            }
        </table>
    )
}

export default Records2;