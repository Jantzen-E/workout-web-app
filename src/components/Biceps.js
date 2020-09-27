import React from 'react';
import bicepsImage from '../images/biceps.jpg';

function Biceps() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Biceps</th>
                    <th>How to target the biceps</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ bicepsImage } className="bicepsImage" alt="biceps muscle"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Biceps;