import React from 'react';
import quadsImage from '../images/quads/quads.png';

function Quads() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Quads</th>
                    <th>How to target the quads</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ quadsImage } className="quadsImage" alt="quadriceps muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Quads;