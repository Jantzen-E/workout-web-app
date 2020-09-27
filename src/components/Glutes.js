import React from 'react';
import glutesImage from '../images/glutes.png';
import glutesImage2 from '../images/glutes2.jpg';

function Glutes() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Glutes</th>
                    <th>How to target the glutes</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ glutesImage } className="glutesImage" alt="glute muscles"></img><img src={ glutesImage2 } className="glutesImage2" alt="gluteus medius muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Glutes;