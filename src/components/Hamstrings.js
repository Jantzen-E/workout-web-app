import React from 'react';
import hamstringsImage from '../images/hamstrings/hamstrings.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import hamstringCurlVideo from '../videos/hamstrings/hamstringCurl.mp4';
import curlThumbnail from '../images/hamstrings/curlThumbnail.jpg';
import exerciseBallThumbnail from '../images/hamstrings/exerciseBallThumbnail.jpg';
import nordicCurlThumbnail from '../images/hamstrings/nordicCurlThumbnail.jpg';
import stiffLegThumbnail from '../images/hamstrings/stiffLegThumbnail.jpg';
import singleDeadliftThumbnail from '../images/hamstrings/singleDeadliftThumbnail.jpg';
import multiHipThumbnail from '../images/hamstrings/multiHipThumbnail.jpg';
import romanianThumbnail from '../images/hamstrings/romanianThumbnail.jpg';

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
                            <video className="hamstringVideos" width="432" height="240" autoplay controls muted poster={ curlThumbnail }>
                                <source src={ hamstringCurlVideo } type="video/mp4"/>
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
                            <video className="hamstringVideos" width="432" height="240" autoplay controls muted poster={ exerciseBallThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
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
                            <video className="hamstringVideos" width="432" height="240" autoplay controls muted poster={ nordicCurlThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
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
                            <video className="hamstringVideos" width="432" height="240" autoplay controls muted poster={ stiffLegThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Single leg romanian deadlift</td>
                        <td className="explanation">Start with your feet together and a weight in your right hand.  Then lift your right leg as your
                            body leans forward with a flat back and lower your right hand to the level of your left shin.  Raise your body back up 
                            and put your feet together again.  Repeat as many times as necessary then do the opposite to work out your other leg.
                        </td>
                        <td>
                            <video className="hamstringVideos" width="432" height="240" autoplay controls muted poster={ singleDeadliftThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Dumbbell romanian deadlift</td>
                        <td className="explanation">
                            This is the same concept as the single leg romanian deadlift but it takes the element of balance out of the exercise.
                            Do a deadlift as shown in the video with dumbbells.
                        </td>
                        <td>
                            <video className="hamstringVideos" width="432" height="240" autoplay controls muted poster={ romanianThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Hamstring extension on multi hip machine</td>
                        <td className="explanation">Press your leg against the roller backwards and raise your hamstring up as you are pushing.
                            See the video for correct form.
                        </td>
                        <td>
                            <video className="hamstringVideos" width="432" height="240" autoplay controls muted poster={ multiHipThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
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