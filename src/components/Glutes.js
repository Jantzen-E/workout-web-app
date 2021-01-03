import React from 'react';
import glutesImage from '../images/glutes/glutes.png';
import glutesImage2 from '../images/glutes/glutes2.jpg';
import trapVideo from '../videos/traps/video.mp4';
import wideSquatThumbnail from '../images/glutes/wideSquatThumbnail.jpg';
import thrustThumbnail from '../images/glutes/thrustThumbnail.jpg';
import bandedHipAbductionThumbnail from '../images/glutes/bandedHipAbductionThumbnail.jpg';

function Glutes() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Glutes</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ glutesImage } className="glutesImage" alt="glute muscles"></img><img src={ glutesImage2 } className="glutesImage2" alt="gluteus medius muscles"></img></td>
                        <td className="nameOfExercise">Wide-stance squats</td>
                        <td className="explanation">Bend legs so that your body goes into a squat position with your 
                            feet in a stance wider than shoulder width.  Go as deep as you can putting most of your 
                            weight on your heels, then push your body back up with your legs.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ wideSquatThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Hip thrusts</td>
                        <td className="explanation">Push your hips up toward the ceiling when there is weight pressing
                            down for resistance.  Repeat until failure.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ thrustThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Banded hip abduction</td>
                        <td className="explanation">Anchor a band to something solid then around your ankle.  Extend
                            your ankle outward away from where the anchor point is and that will work your hip abductors
                            and your glutes.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ bandedHipAbductionThumbnail }>
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

export default Glutes;