import React from 'react';
import adductorsImage from '../images/adductors/adductors.jpg';
import trapVideo from '../videos/traps/video.mp4';
import pullUpThumbnail from '../images/lats/pullUpThumbnail.jpg';

function Adductors() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Leg Adductors</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ adductorsImage } className="adductorsImage" alt="inner thigh muscles"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Adductors;