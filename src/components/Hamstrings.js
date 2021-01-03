import React from 'react';
import hamstringsImage from '../images/hamstrings/hamstrings.jpg';
import trapVideo from '../videos/traps/video.mp4';
import curlThumbnail from '../images/hamstrings/curlThumbnail.jpg';
import exerciseBallThumbnail from '../images/hamstrings/exerciseBallThumbnail.jpg';
import nordicCurlThumbnail from '../images/hamstrings/nordicCurlThumbnail.jpg';
import stiffLegThumbnail from '../images/hamstrings/stiffLegThumbnail.jpg';
import lungeThumbnail from '../images/hamstrings/lungeThumbnail.jpg';

function Hamstrings() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Hamstrings</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ hamstringsImage } className="hamstringsImage" alt="hamstring muscles"></img></td>
                        <td className="nameOfExercise">Hamstring curl</td>
                        <td className="explanation">Lay on your stomach and put your ankles under the ankle pad.  Curl
                            your legs toward your body then extend them again to complete a hamstring curl.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ curlThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">bridge on rolling chair or exercise ball</td>
                        <td className="explanation">Lay on your back and place your feet on the ball or the rolling
                            chair.  Then roll the ball/chair closer to your body by pulling your ankles closer to your
                            glutes which will imitate a hamstring curl.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ exerciseBallThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Nordic Hamstring Curl</td>
                        <td className="explanation">This is a hamstring curl where your glutes get closer to your 
                            ankles instead of your ankles getting closer to your glutes.  Your ankles are anchored
                            and your hamstrings pull the weight of your body so that your body moves up and down.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ nordicCurlThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Stiff-leg deadlift</td>
                        <td className="explanation">Place your feet in a close stance and pull a barbell up by lifting
                            your back up until you are standing vertically.  Keep your hamstrings extended and focus the
                            work there.  Check out the video for the correct form.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ stiffLegThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Lunges</td>
                        <td className="explanation">Step in front of you with one leg and let your body lower.  Your
                            front knee should not extend more forward than your toes and your back foot should remain
                            straight while your back knee barely taps the ground.  Then stand up and do the same thing
                            with the other leg.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ lungeThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Hamstrings;