import React from 'react';
import delts from '../images/delts.png';
import delts2 from '../images/delts.jpg';

function Delts() {
    return(
        <div className="table">
            <table>
                <tr>
                    <th className="muscleGroup">Deltoids</th>
                    <th>How to target the deltiods</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ delts } className="deltsImage" alt="deltoid muscle"></img><img src={ delts2 } className="deltsImage2" alt="deltoid muscle"></img></td>
                    <td>Weighted arm raises</td>
                    <td>Hold weight in each hand and shrug your shoulders</td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Scarecrow</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Shoulder flys</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>shoulder press</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>arm raises side to side</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>pours</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>weighted circle</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>upright row</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>y press</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
                <tr>
                    <td></td>
                    <td>pike push up</td>
                    <td></td>
                    <td><a href="https://www.google.com/">Video</a></td>
                </tr>
            </table>
        </div>
    )
}

export default Delts;