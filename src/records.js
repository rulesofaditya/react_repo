function Records() {

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
    function doSomething(rec){
        return rec.name
    }
    function check(rec){
        if(rec.dept== "IT"){
            return true
        }else{
            return false
        }
    }

    let names1 = employees.map(doSomething)
    let names2 = employees.filter(check)

    return (

        <b>
            <u>{names1}</u>

             <br/>
            <u>{names2.length}</u>
        </b>
    )
}

export default Records;