import React from 'react';
import calvesImage from '../images/calves/calves.jpg';
import trapVideo from '../videos/traps/video.mp4';
import calfRaiseThumbnail from '../images/calves/calfRaiseThumbnail.jpg';
import squatCalfRaiseThumbnail from '../images/calves/squatCalfRaiseThumbnail.jpg';
import anteriorTibialisThumbnail from '../images/calves/anteriorTibialisThumbnail.jpg';

function Calves() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Calves</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ calvesImage } className="calvesImage" alt="calf muscles"></img></td>
                    <td className="nameOfExercise">3 angle calf raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ calfRaiseThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Squat calf raises</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ squatCalfRaiseThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Anterior tibialis extensions</td>
                    <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ anteriorTibialisThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Calves;