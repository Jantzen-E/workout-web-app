import React from 'react';
import pecsImage from '../images/pecs.jpg';

function Pecs() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Pecs</th>
                    <th>How to target the pecs</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ pecsImage } className="pecsImage" alt="pectoralis muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Pecs;