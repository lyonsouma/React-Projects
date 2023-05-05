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

let students = ['John' ,'joe' , 'lyons' , 'kelly'];

let studentList = students.map((student)=>(
    <h1 key ={student}>{student}</h1>
)
)
return <div>
    {studentList}
</div>
}
export default Map