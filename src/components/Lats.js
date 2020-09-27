import React from 'react';
import latsImage from '../images/lats.jpg';

function Lats() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Lats</th>
                    <th>How to target the lats</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ latsImage } className="latsImage" alt="latissimus dorsi muscle"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Lats;