const MapThree = () => {
let students = [

    {id:1, Name : 'Edwin', Age: '12'},
    {id:2, Name : 'Kevin', Age: '22'},
    {id:3, Name : 'Lucy',  Age: '90'},
    {id:4, Name : 'Brian', Age: '122'},
    {id:5, Name : 'Eddna', Age: '37'},
    {id:6, Name : 'Faith', Age: '34'},
    {id:7, Name : 'joe',   Age: '15'}

]

let StudentList = students.map((student)=>(
<h1 key ={student.id}>{student.Name} is {student.Age} years</h1>
))
return <div>
{StudentList}
</div>
}
export default MapThree