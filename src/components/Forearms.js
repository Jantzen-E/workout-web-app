import React from 'react';
import forearmsImage from '../images/forearms/forearms.jpg';

function Forearms() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Forearms</th>
                    <th>How to target the forearms</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ forearmsImage } className="forearmsImage" alt="forearm muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Forearms;