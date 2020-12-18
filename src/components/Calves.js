import React from 'react';
import calvesImage from '../images/calves/calves.jpg';

function Calves() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Calves</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ calvesImage } className="calvesImage" alt="calf muscles"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Calves;