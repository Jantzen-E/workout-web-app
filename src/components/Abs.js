import React from 'react';
import absImage from '../images/abs/abs.jpg';
import obliquesImage from '../images/abs/obliques.jpg';
import serratusImage from '../images/abs/serratus.jpg';

function Abs() {
    return(
        <div>
            <table>
                <tr>
                    <th className="muscleGroup">Abs</th>
                    <th>How to target the abs</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ absImage } className="absImage" alt="ab muscles"></img><img src={ obliquesImage } className="obliquesImage" alt="oblique ab muscles"></img><img src={ serratusImage } className="serratusImage" alt="serratus anterior muscles"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Abs;