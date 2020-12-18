import React from 'react';
import tricepsImage from '../images/triceps/triceps.png';
import trapVideo from '../videos/traps/video.mp4';
import diamondPushupThumbnail from '../images/triceps/diamondPushupThumbnail.jpg';
import sideTriRiseThumbnail from '../images/triceps/sideTriRiseThumbnail.JPG';
import triPushupThumbnail from '../images/triceps/triPushupThumbnail.png';
import skullCrusherThumbnail from '../images/triceps/skullCrusherThumbnail.jpg';
import chairDipThumbnail from '../images/triceps/chairDipThumbnail.jpg';
import tricepPressThumbnail from '../images/triceps/tricepPressThumbnail.jpg';
import sphinxPushupThumbnail from '../images/triceps/sphinxPushupThumbnail.jpg';
import chairSkullCrusherThumbnail from '../images/triceps/chairSkullCrusherThumbnail.jpg';
import triExtensionThumbnail from '../images/triceps/triExtensionThumbnail.jpg';
import tricepKickbackThumbnail from '../images/triceps/tricepKickbackThumbnail.jpg';
import clavShExtensionThumbnail from '../images/triceps/clavShExtensionThumbnail.jpg';
import isoBurnoutThumbnail from '../images/triceps/isoBurnoutThumbnail.jpg';
import cobraThumbnail from '../images/triceps/cobraThumbnail.jpg';

function Triceps() {
    return(
        <div>
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Triceps</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td><img src={ tricepsImage } className="tricepsImage" alt="triceps muscle"></img></td>
                    <td className="nameOfExercise">Tricep pushups</td>
                    <td className="explanation">Perform a push up with your hands closer together to put the focus on 
                        the triceps.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ triPushupThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">side tri rise</td>
                    <td className="explanation">Lay down on one side and grab your upper shoulder with the hand that is 
                        closest to the ground.  Plant your hand next to your side and push the weight of your body upward
                        to target one tricep at a time.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ sideTriRiseThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">diamond pushups</td>
                    <td className="explanation">Perform a push up similar to the tricep push up but turn your hands
                        inward so that they make a diamond shape
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ diamondPushupThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">laying down skull crushers</td>
                    <td className="explanation">Hold dumbbells in each hand and lay down on your back on a bench
                        or on the floor.  Extend the weights above your head but angled slightly back and then bend
                        at the elbow and lower the weights down next to your ears.  Then raise them up again.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ skullCrusherThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">chair dips</td>
                    <td className="explanation">Sit on the edge of a chair or bench and set your hands next to your
                        glutes.  Lift the weight of your body off the chair by extending your triceps and then lower
                        your body down just in front of the chair with your back sliding close to the surface of the
                        chair.  Lift your weight up until the tricep fully extends and repeat.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ chairDipThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">dumbell tricep press</td>
                    <td className="explanation">Lay down on a bench and hold 2 dumbbells close together on your
                        chest.  Raise them up together as they are touching and squeeze them together as you raise them.
                        Lower them back down to your chest and repeat.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ tricepPressThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">sphinx pushup</td>
                    <td className="explanation">Lay on your stomach with your weight on your elbows and your hands
                        pointed forward.  Lift the weight of your body upward so that your elbow is no longer touching
                        which will strenghten the tricep.  Lower your body and repeat.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ sphinxPushupThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">chair skull crushers</td>
                    <td className="explanation">You can kneel or stand next to a bench or chair and grab the edge
                        with your fingertips shoulder width apart.  Bend your arms and put your head between your arms
                        then extend your arms using your triceps which will lift your body up.  Repeat exercise.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ chairSkullCrusherThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">behind the head tricep extensions</td>
                    <td className="explanation">Hold a barbell or 2 dumbbells above your head with arms extended and 
                        slowly lower the weight behind your head by bending the elbows.  Lift weight up again and repeat.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ triExtensionThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">3 angle tricep kickbacks</td>
                    <td className="explanation">Lean forward with dumbbells in each hand and extend the weights behind
                        your back slowly then lower them.  Follow the 3 different grips that are shown in the video.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ tricepKickbackThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">1 hand clavicle/shoulder extension</td>
                    <td className="explanation">Perform this exercise one hand at a time.  It is similar to the behind 
                        the head tricep extension but on the 2nd repetition, lower the arm in front of your head and to
                        touch your clavicle.  Refer to the video for the correct form.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ clavShExtensionThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">iso tri extension burnout</td>
                    <td className="explanation">Perform the beginning portion of the tricep kickback but instead of 
                        lowering it, keep it extended behind you for an isometric tricep burnout.  Keep your arms there
                        for as long as you can.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ isoBurnoutThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">cobra pushup</td>
                    <td className="explanation">Perform the exercise as shown in the video.  At the top of the exercise,
                        your body will resemble the shape of a cobra.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ cobraThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Triceps;