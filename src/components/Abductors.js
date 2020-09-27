import React from 'react';
import abductorsImage from '../images/abductors.jpg';
import abductorsImage2 from '../images/abductors2.jpg';

function Abductors() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Leg Abductors</th>
                    <th>How to target the leg abductors</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ abductorsImage } className="abductorsImage" alt="outer thigh muscles"></img><img src={ abductorsImage2 } className="abductorsImage2" alt="outer thigh muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table> 
        </div>
    )
}

export default Abductors;