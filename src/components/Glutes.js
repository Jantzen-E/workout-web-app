import React from 'react';
import glutesImage from '../images/glutes/glutes.png';
import glutesImage2 from '../images/glutes/glutes2.jpg';

function Glutes() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Glutes</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ glutesImage } className="glutesImage" alt="glute muscles"></img><img src={ glutesImage2 } className="glutesImage2" alt="gluteus medius muscles"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>Video goes here</td>
                </tr>
            </table>
        </div>
    )
}

export default Glutes;