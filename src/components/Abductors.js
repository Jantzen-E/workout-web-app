import React from 'react';
import abductorsImage from '../images/abductors/abductors.jpg';
import abductorsImage2 from '../images/abductors/abductors2.jpg';
import trapVideo from '../videos/traps/video.mp4';
import pullUpThumbnail from '../images/lats/pullUpThumbnail.jpg';

function Abductors() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Leg Abductors</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ abductorsImage } className="abductorsImage" alt="outer thigh muscles"></img><img src={ abductorsImage2 } className="abductorsImage2" alt="outer thigh muscles"></img></td>
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

export default Abductors;