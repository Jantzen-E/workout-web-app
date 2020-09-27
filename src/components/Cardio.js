import React from 'react';
import cardioImage from '../images/heart.jpg';

function Cardio() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Cardio</th>
                    <th>How to target the heart</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ cardioImage } className="cardioImage" alt="heart muscle"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table> 
        </div>
    )
}

export default Cardio;