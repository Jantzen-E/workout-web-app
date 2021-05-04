import React from 'react';
import trapsImage from '../images/traps/traps.jpg';
// import neckBridgeThumbnail from '../images/traps/neckBridgeThumbnail.jpg';
import shrugThumbnail from '../images/traps/shrugThumbnail.jpg';
import rearShrugThumbnail from '../images/traps/rearShrugThumbnail.jpg';
import shrugVid from '../videos/traps/shrugs.mp4';
import trainingVideo from '../videos/traps/diveBomb.mp4';

function Traps() {
    return(
        <div className="App">
            <div className="table">
                <table>
                <tr className="headings">
                    <th className="muscleGroup">Traps</th>
                    <th>Exercise</th>
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
                        <video width="432" height="240" autoplay controls muted poster={ shrugThumbnail }>
                            <source src={ shrugVid } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Behind the back shrugs</td>
                    <td className="explanation">
                        This is the same concept as the weighted shrugs but this time, hold the weights or bar behind your back
                        which will help you to keep your chest out.  Then pull up using your traps to get a great exercise.
                    </td>
                    <td>
                        <video width="432" height="240" autoplay controls muted poster={ rearShrugThumbnail }>
                            <source src={ trainingVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                {/* <tr>
                    <td></td>
                    <td className="nameOfExercise">Neck bridges</td>
                    <td className="explanation">
                        Get into the headstand stance and remove your arms so that your weight is on your toes and top of your head.
                        Very carefully rock back and forth while controlling the movement with your neck.
                    </td>
                    <td>
                        <video width="432" height="240" autoplay controls muted poster={ neckBridgeThumbnail }>
                            <source src={ trainingVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr> */}
                </table>
            </div>
        </div>
    )
}

export default Traps;