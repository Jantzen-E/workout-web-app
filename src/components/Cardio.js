import React from 'react';
import cardioImage from '../images/cardio/heart.jpg';

function Cardio() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Cardio</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ cardioImage } className="cardioImage" alt="heart muscle"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table> 
        </div>
    )
}

export default Cardio;