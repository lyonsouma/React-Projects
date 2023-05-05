const Map = () => {
    /*
    let Prices = [200 , 250, 50, 230]
return(
    <div>
       <h1>
        {
            Prices.map((increase)=> increase * 0.1 + increase + ' ,')
        }
       </h1>
    </div>
)
*/
/*
let students = ['John' ,'joe' , 'lyons' , 'kelly'];

let studentList = students.map((student)=>(
    <h1 key ={student}>{student}</h1>
)
)
return <div>
    {studentList}
</div>
*/

                       // OBJECT
/*
    let students = [
        {id :1, Name :"Lyons", course: "Software"},
        {id :2, Name :"John", course: "Cyber Sec"},
        {id :3, Name :"Brian", course: "DataBase"}
    ]

    let StudentList = students.map((student)=>(
        <h1 key = {student.id}>{student.Name},{ student.course}</h1>
    ))
return <div>{StudentList}</div>
*/

                //OBJECT 2
/*
    let students = [
 
        {id:1, Name : 'Edwin', Age: '12'},
        {id:2, Name : 'Kevin', Age: '22'},
        {id:3, Name : 'Lucy', Age: '90'},
        {id:4, Name : 'Brian', Age: '122'},
        {id:5, Name : 'Eddna', Age: '37'},
        {id:6, Name : 'Faith', Age: '34'},
        {id:7, Name : 'joe', Age: '15'},

    ]

let StudentList = students.map((student)=>(
    <h1 key ={student.id}>{student.Name} is {student.Age} years</h1>
))
return <div>
    {StudentList}
</div>
*/

let Grades = ['A', 'B', 'C', 'D'];
let GradeList = Grades.map ((grade)=>(grade))

return <div>
    {GradeList}
</div>
}
export default Map