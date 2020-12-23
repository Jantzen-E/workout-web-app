import React from 'react';
import cardioImage from '../images/cardio/heart.jpg';
import trapVideo from '../videos/traps/video.mp4';
import jumpRopeThumbnail from '../images/cardio/jumpRopeThumbnail.jpg';
import cyclingThumbnail from '../images/cardio/cyclingThumbnail.jpg';
import jacksThumbnail from '../images/cardio/jacksThumbnail.jpg';
import burpeesThumbnail from '../images/cardio/burpeesThumbnail.jpg';

function Cardio() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Cardio</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ cardioImage } className="cardioImage" alt="heart muscle"></img></td>
                    <td className="nameOfExercise">Jump rope</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ jumpRopeThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Cycling</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ cyclingThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Jumping jacks</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ jacksThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Burpees</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ burpeesThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table> 
        </div>
    )
}

export default Cardio;