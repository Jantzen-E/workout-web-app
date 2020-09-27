import React from 'react';
import tricepsImage from '../images/triceps.png';

function Triceps() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Triceps</th>
                    <th>How to target the triceps</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ tricepsImage } className="tricepsImage" alt="triceps muscle"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Triceps;