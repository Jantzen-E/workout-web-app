import React from 'react';
import hamstringsImage from '../images/hamstrings.jpg';

function Hamstrings() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Hamstrings</th>
                    <th>How to target the hamstrings</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ hamstringsImage } className="hamstringsImage" alt="hamstring muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Hamstrings;