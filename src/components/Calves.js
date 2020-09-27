import React from 'react';
import calvesImage from '../images/calves.jpg';

function Calves() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Calves</th>
                    <th>How to target the calves</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ calvesImage } className="calvesImage" alt="calf muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Calves;