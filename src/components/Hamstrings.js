import React from 'react';
import hamstringsImage from '../images/hamstrings/hamstrings.jpg';

function Hamstrings() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Hamstrings</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ hamstringsImage } className="hamstringsImage" alt="hamstring muscles"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Hamstrings;