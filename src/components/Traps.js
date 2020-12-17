import React from 'react';
import trapsImage from '../images/traps/traps.jpg';
import trapVideo from '../videos/video.mp4';
import shrugThumbnail from '../images/traps/shrugThumbnail.jpg';
import neckBridgeThumbnail from '../images/traps/neckBridgeThumbnail.jpg';

function Traps() {
    return(
        <div className="table">
            <table>
            <tr className="headings">
                <th className="muscleGroup">Traps</th>
                <th>Name of exercise</th>
                <th>Instructions</th>
                <th>Examples</th>
            </tr>
            <tr>
                <td><img src={ trapsImage } className="trapsImage" alt="trapezius muscle"></img></td>
                <td className="nameOfExercise">Weighted shrugs</td>
                <td className="explanation">
                    Hold weight in each hand and shrug your shoulders while keeping your arms straight.
                    Do 10 shrugs then hold a shrug for 10 seconds.  Then 9 shrugs and hold for 9 seconds.
                    Go all the way to 1 and then back up to 10 following this pattern.
                </td>
                <td>
                    <video width="320" height="240" autoplay controls muted poster={ shrugThumbnail }>
                        <source src={ trapVideo } type="video/mp4"/>
                        Your browser does not support the video tag
                    </video>
                </td>
            </tr>
            <tr>
                <td></td>
                <td className="nameOfExercise">Neck bridges</td>
                <td className="explanation">
                    Get into the headstand stance and remove your arms so that your weight is on your toes and top of your head.
                    Very carefully rock back and forth while controlling the movement with your neck.
                </td>
                <td>
                    <video width="320" height="240" autoplay controls muted poster={ neckBridgeThumbnail }>
                        <source src={ trapVideo } type="video/mp4"/>
                        Your browser does not support the video tag
                    </video>
                </td>
            </tr>
            </table>
        </div>
    )
}

export default Traps;