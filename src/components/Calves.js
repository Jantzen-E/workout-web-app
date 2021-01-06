import React from 'react';
import calvesImage from '../images/calves/calves.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import calfRaiseThumbnail from '../images/calves/calfRaiseThumbnail.jpg';
import squatCalfRaiseThumbnail from '../images/calves/squatCalfRaiseThumbnail.jpg';
import anteriorTibialisThumbnail from '../images/calves/anteriorTibialisThumbnail.jpg';

function Calves() {
    return(
        <div className="App">
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
                        <td className="explanation">Do calf raises on the edge of a stair so that the back half of 
                            your foot is hanging over the edge.  Do calf raises with your feet turned slightly out, then
                            pointed straight forward, then turned slightly inward for the 3 angles.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ calfRaiseThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Squat calf raises</td>
                        <td className="explanation">Get in a low stance as shown in the video and push the weight of
                            your body up using your calf muscles.  Raise and lower your body repeatedly as needed.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ squatCalfRaiseThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Anterior tibialis extensions</td>
                        <td className="explanation">Put your heels on the ground or use a band and extend your feet 
                            forward then pull them back so that your toes point then get closer to your shin.  Do this
                            repeatedly as necessary until you can feel the muscles activate in the front of your leg.
                            This will help with shin splints but it is also good to work these muscles out after doing
                            calves.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ anteriorTibialisThumbnail }>
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

export default Calves;