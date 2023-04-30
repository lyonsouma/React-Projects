import React from "react";

function Column(){
    return(
    //  <React.Fragment>
    // THE SECOND WAY OF ADDING A FRAMENT IS BY THE USE OF EMPTY OPENING AND CLOSING TAGS
    //IT'S DISADVANTAGE IS THAT IT DOESNT ALLOW PASSING IN OF THE KEY WORD
    <>
        <table></table>
        <td>Sun</td>
        <td>Mon</td>
        <td>Tue</td>
        <td>Wed</td>
        <td>Thur</td>
        <td>Fri</td>
        <td>Sat</td>
      {/* </React.Fragment> */}
    </>
     
    )
}
export default Column;