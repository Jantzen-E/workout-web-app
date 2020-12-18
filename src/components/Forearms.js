import React from 'react';
import forearmsImage from '../images/forearms/forearms.jpg';

function Forearms() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Forearms</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ forearmsImage } className="forearmsImage" alt="forearm muscles"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Forearms;