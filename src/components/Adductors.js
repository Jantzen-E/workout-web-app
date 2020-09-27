import React from 'react';
import adductorsImage from '../images/adductors.jpg';

function Adductors() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Leg Adductors</th>
                    <th>How to target the leg adductors (inner thighs)</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ adductorsImage } className="adductorsImage" alt="inner thigh muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Adductors;