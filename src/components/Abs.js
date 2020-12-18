import React from 'react';
import absImage from '../images/abs/abs.jpg';
import obliquesImage from '../images/abs/obliques.jpg';
import serratusImage from '../images/abs/serratus.jpg';

function Abs() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Abs</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ absImage } className="absImage" alt="ab muscles"></img><img src={ obliquesImage } className="obliquesImage" alt="oblique ab muscles"></img><img src={ serratusImage } className="serratusImage" alt="serratus anterior muscles"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Abs;