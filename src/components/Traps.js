import React from 'react';
import trapsImage from '../images/traps.jpg';

function Traps() {
    return(
        <div className="table">
            <table>
            <tr>
                <th className="muscleGroup">Traps</th>
                <th>How to target the trapezius</th>
                <th>Instructions</th>
                <th>Example</th>
            </tr>
            <tr>
                <td><img src={ trapsImage } className="trapsImage" alt="trapezius muscle"></img></td>
                <td>Weighted shrugs</td>
                <td>Hold weight in each hand and shrug your shoulders while keeping your arms straight</td>
                <td><a href="https://www.google.com/">Video</a></td>
            </tr>
            <tr>
                <td></td>
                <td>Neck bridges</td>
                <td>Arch your back when you are sitting on the ground and put weight on your neck and toes to strengthen your traps</td>
                <td><a href="https://www.google.com/">Video</a></td>
            </tr>
            </table>
        </div>
    )
}

export default Traps;