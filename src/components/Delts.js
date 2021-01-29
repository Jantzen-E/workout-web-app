import React from 'react';
import delts from '../images/delts/delts.png';
import delts2 from '../images/delts/delts.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import armRaiseThumbnail from '../images/delts/armRaiseThumbnail.jpg';
import scarecrowThumbnail from '../images/delts/scarecrowThumbnail.jpg';
import shoulderFlyThumbnail from '../images/delts/shoulderFlyThumbnail.jpg';
import shoulderPressThumbnail from '../images/delts/shoulderPressThumbnail.jpg';
import poursThumbnail from '../images/delts/pours.jpg';
import circlesThumbnail from '../images/delts/circlesThumbnail.jpg';
import uprightRowThumbnail from '../images/delts/uprightRowThumbnail.jpg';
import ypressThumbnail from '../images/delts/ypressThumbnail.jpg';
import rearDeltThumbnail from '../images/delts/rearDeltThumbnail.jpg';
import pikeThumbnail from '../images/delts/pikeThumbnail.jpg';
import facePullThumbnail from '../images/delts/facePullThumbnail.jpg';
import frontRaiseVid from '../videos/delts/frontRaise.mp4';

function Delts() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Deltoids</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Examples</th>
                    </tr>
                    <tr>
                        <td><img src={ delts } className="deltsImage" alt="deltoid muscle"></img><img src={ delts2 } className="deltsImage2" alt="deltoid muscle"></img></td>
                        <td className="nameOfExercise">Weighted arm raises</td>
                        <td className="explanation">
                            Hold weight in each hand and lift the weight up in front of your body.  Slowly lower it.  
                            Then raise the weight to the side of your body (like a shoulder fly) to exercise the 
                            delt from a different angle. 
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ armRaiseThumbnail }>
                                <source src={ frontRaiseVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Scarecrow</td>
                        <td className="explanation">
                            Hold dumbells in each hand above your shoulders so that they are close to your ears with your
                            elbows out.  Then rotate the weights forward until the weights are hanging below your elbows.
                            Then rotate the weights up and back again until they are in the position you started in.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ scarecrowThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Leaning forward shoulder flys (bent arm and straight arm)</td>
                        <td className="explanation">
                            Sit down while holding dumbells in each hand while letting the weight hang down.  Lean your body
                            slightly forward and slowly extend both arms out to the side.  Then slowly lower them down to
                            the hanging position again.  For the bent arm variation, bend your arm at the elbow so that your
                            forearm and your bicep are at a 90 degree angle and do the exercise as explained above.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ shoulderFlyThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">shoulder press</td>
                        <td className="explanation">
                            Hold dumbells in each hand just above your shoulders.  Extend your arms all the way above your head 
                            until the dumbells lightly touch above your head.  Then lower them back down slowly to the position
                            just above your shoulders.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ shoulderPressThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">y press</td>
                        <td className="explanation">
                            Do the same things as the shoulder press but when you extend your arms above your head, the weights should
                            get farther apart so that your body looks like a "Y" when they are fully extended.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ ypressThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">pours</td>
                        <td className="explanation">
                            Hold dumbells in each hand and exend them out to your sides with one side of the dumbell pointing up
                            as if you are holding 2 cups of water.  Then rotate the dumbells forward as if you were pouring the 
                            liquid out.  Return to the first position and repeat.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ poursThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">weighted circle</td>
                        <td className="explanation">
                            Hold dumbells in each hand and extend each weight to your side so that your arms are parallel to the 
                            ground.  Then move your arms in a circle by rotating forward first for 30 seconds.  Then rotate the 
                            opposite way for 30 seconds.  Repeat as needed.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ circlesThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">upright row</td>
                        <td className="explanation">
                            Hold dumbells in each hand and let them hang down in front of you.  The dumbells should be close
                            together (almost touching).  Raise them straight up until the weights are just under your chin 
                            and your elbows are as high as your ears.  Then lower the weights down slowly to the original position 
                            then repeat.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ uprightRowThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">pike push up</td>
                        <td className="explanation">
                            Your feet should be a lot closer to your hands compared to a normal push up.  Your butt should be sticking
                            up in the air.  Using your shoulders, lower your upper body slowly until the top of your head touches the 
                            ground.  Then push your body back up until your arms are extended again.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ pikeThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Rear delt fly</td>
                        <td className="explanation">
                            Grab the bar and push your hands outward and then squeeze your shoulder blades in the back which will engage 
                            the back side of your shoulder.  Then move your hands slowly to the original position and repeat.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ rearDeltThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Face Pulls</td>
                        <td className="explanation">
                            Using bands or the cable machine and rope, face the machine or anchor point and pull the tension toward your 
                            face while letting your elbows point straight out to the side and by squeezing your shoulder blades together.
                            Watch the video for the correct form.  This exercise primarily works the rear delts.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ facePullThumbnail }>
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

export default Delts;