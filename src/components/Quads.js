import React from 'react';
import quadsImage from '../images/quads/quads.png';

function Quads() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Quads</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ quadsImage } className="quadsImage" alt="quadriceps muscles"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Quads;