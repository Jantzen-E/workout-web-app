import React from 'react';
import glutesImage from '../images/glutes/glutes.png';
import glutesImage2 from '../images/glutes/glutes2.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import hipAbductionVideo from '../videos/glutes/hipAbduction.mp4';
import wideStanceVideo from '../videos/glutes/wideStance.mp4';
import hipThrustVideo from '../videos/glutes/hipThrusts.mp4';
import wideSquatThumbnail from '../images/glutes/wideSquatThumbnail.jpg';
import thrustThumbnail from '../images/glutes/thrustThumbnail.jpg';
import bandedHipAbductionThumbnail from '../images/glutes/bandedHipAbductionThumbnail.jpg';
import reverseLungeThumbnail from '../images/glutes/reverseLungeThumbnail.jpg';
import gluteKickbackThumbnail from '../images/glutes/gluteKickbackThumbnail.jpg';

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
                                <source src={ wideStanceVideo } type="video/mp4"/>
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
                                <source src={ hipThrustVideo } type="video/mp4"/>
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
                                <source src={ hipAbductionVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Reverse lunges</td>
                        <td className="explanation">Step behind you with one leg and let your body lower.  Your front knee
                            should not extend more forward than your toes and your back foot should remain aimed straight
                            while your back knee bends and gets close to the ground.  Then push forward so your feet are
                            together then step back with your opposite foot and repeat.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ reverseLungeThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Glute kick back with machine</td>
                        <td className="explanation">Put your foot on the small platform and kick your leg back as far as 
                            you can and as high as you can.  This exercise will build your glutes but also is good for 
                            your hamstrings.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ gluteKickbackThumbnail }>
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

export default Glutes;