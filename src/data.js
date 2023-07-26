import { useState } from "react";

function Data2() {

    let records = [
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
    function addEmployee(){

        setEmployee((oldRecords)=>{
           
            let newRecord = {
                "name": "Peter",
                "salary": 3000,
                "dept": "IT"
            }
            return [...oldRecords,newRecord]
        })
        
        
    }
   let [employees,setEmployee]=useState(records)

    return (

       <>


       <input type="button" value="New Employee" onClick={addEmployee}/>
       <table>
        <tr>
            <td>Name</td>
            <td>Slary</td>
            <td>Dept</td>
        </tr>
        {
           employees.map((rec)=>
           <tr>

           
           <td>{rec.name}</td>
           <td>{rec.salary}</td>
           <td>{rec.dept}</td>

           </tr>
           )
        }
       </table>
       </>

    )
}

export default Data2;