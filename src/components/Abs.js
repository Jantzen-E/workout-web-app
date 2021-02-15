import React from 'react';
import absImage from '../images/abs/abs.jpg';
import obliquesImage from '../images/abs/obliques.jpg';
import serratusImage from '../images/abs/serratus.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import bicycleThumbnail from '../images/abs/bicycleThumbnail.jpg';
import heelsToHeavensThumbnail from '../images/abs/heelsToHeavensThumbnail.jpg';
import crunchThumbnail from '../images/abs/crunchThumbnail.jpg';
import reverseCrThumbnail from '../images/abs/reverseCrThumbnail.jpg';
import scissorThumbnail from '../images/abs/scissorThumbnail.jpg';
import flutterThumbnail from '../images/abs/flutterThumbnail.jpg';
import twistThumbnail from '../images/abs/twistThumbnail.jpg';
import sideCrunchThumbnail from '../images/abs/sideCrunchThumbnail.jpg';
import heelTouchThumbnail from '../images/abs/heelTouchThumbnail.jpg';
import kneeCrunchThumbnail from '../images/abs/kneeCrunchThumbnail.jpg';
import sideRaiseThumbnail from '../images/abs/sideRaiseThumbnail.jpg';
import inOutThumbnail from '../images/abs/inOutThumbnail.jpg';
import hangThumbnail from '../images/abs/hangThumbnail.jpg';
import wideSitThumbnail from '../images/abs/wideSitThumbnail.jpg';
import legClimbThumbnail from '../images/abs/legClimbThumbnail.jpg';
import jumpInThumbnail from '../images/abs/jumpInThumbnail.jpg';
import circleThumbnail from '../images/abs/circleThumbnail.jpg';
import sitUpThumbnail from '../images/abs/sitUpThumbnail.jpg';
import legRaiseThumbnail from '../images/abs/legRaiseThumbnail.jpg';
import crossCrunchThumbnail from '../images/abs/crossCrunchThumbnail.jpg';
import vUpThumbnail from '../images/abs/vUpThumbnail.jpg';
import obliqueVThumbnail from '../images/abs/obliqueVThumbnail.jpg';
import wipersThumbnail from '../images/abs/wipersThumbnail.jpg';
import angleThumbnail from '../images/abs/angleThumbnail.jpg';
import abCircleThumbnail from '../images/abs/abCircleThumbnail.jpg';
import russianVTwistThumbnail from '../images/abs/russianVTwistThumbnail.jpg';
import jackKnifeThumbnail from '../images/abs/jackKnifeThumbnail.jpg';
import crunchTwistThumbnail from '../images/abs/crunchTwistThumbnail.jpg';
import ninetyNinetyThumbnail from '../images/abs/ninetyNinetyThumbnail.jpg';

function Abs() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Abs</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ absImage } className="absImage" alt="ab muscles"></img><img src={ obliquesImage } className="obliquesImage" alt="oblique ab muscles"></img><img src={ serratusImage } className="serratusImage" alt="serratus anterior muscles"></img></td>
                        <td className="nameOfExercise">Bicycles</td>
                        <td className="explanation">Lay on your back and perform this exercise cycling your legs as 
                            shown in the video.  Your upper body should tilt side to side at the same time so that your
                            elbow taps your knee on each repetition.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ bicycleThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Side Crunches</td>
                        <td className="explanation">Lay on your side and cruch your body upward to perform the side 
                            crunch.  See video for the correct form.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ sideCrunchThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Circle Crunches</td>
                        <td className="explanation">This is similar to a crunch but keep your legs extended and move
                            your upper body in a clock-wise motion and then do the same number of repetitions in a 
                            counter-clock-wise motion.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ circleThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">heel touches</td>
                        <td className="explanation">Use the same starting position as a sit up but move your body 
                            side to side so that your can touch your heels.  Repeat as needed.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ heelTouchThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Mason Twist</td>
                        <td className="explanation">Sit on the ground and pull your legs in toward your body.  Lift 
                            your heels off the ground and twist your upper body while tapping your hands on each side of
                            your hips.  Do this as many times as you can.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ twistThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">side hip raise</td>
                        <td className="explanation">Put your weight on one arm and one leg with your body facing forward
                            and raise your hips straight up and then lower them.  Repeat as many times as you can.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ sideRaiseThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">cross leg/wide leg sit up</td>
                        <td className="explanation">Lay down with your legs spread apart.  Sit up and touch your left
                            leg with your right hand.  Then lay down and do the opposite.  To make the exercise more 
                            difficult, sit with your legs crossed as shown in the video.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ wideSitThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Oblique v-up</td>
                        <td className="explanation">Lay on your side and raise your right elbow up toward your right
                            knee as shown in the video.  Then do the same on your left side.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ obliqueVThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Windshield wipers</td>
                        <td className="explanation">Lay on your back and straighten your legs pointing upward.  Move 
                            your legs like windshield wipers as shown in the video.  You can do it with bent legs for 
                            a slight modification.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ wipersThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">5 angle leg crunches</td>
                        <td className="explanation">Crunch your legs toward your upper body using the 5 angles that
                            are shown in the video.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ angleThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Seated ab circles</td>
                        <td className="explanation">
                            Sit down and extend your legs out.  Act as if you are drawing a circle with your feet 
                            by moving your feet around in a circle counter clockwise.  Do that for 30 seconds or 
                            for as long as you can then reverse the motion in a clockwise motion for the same amount 
                            of time.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ abCircleThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Russian V tuck twists</td>
                        <td className="explanation">
                            Lay down and as you sit up, bring your left leg close to your body as your upper body twists 
                            to the right.  Touch your hands on your right glute during the twist.  Lay back down and 
                            then repeat the exercise but just the opposite.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ russianVTwistThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Jackknife crunch</td>
                        <td className="explanation">
                            This exercise is similar to the russian v tuck but you don't twist at the top of the motion.  
                            As you sit up, bring one knee close to your body.  Then lay down and sit back up bringing the 
                            opposite knee close to your body.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ jackKnifeThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Crunch & twist</td>
                        <td className="explanation">
                            Perform a crunch, and then twist to one side then back to center.  Then lay back down and do the 
                            crunch and twist to the opposite side.  This exercise prolongs the contraction at the top of the 
                            exercise which is a great workout for your upper abs.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ crunchTwistThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">leg climb</td>
                        <td className="explanation">Lay down and extend one leg up.  Climb your leg with your hands 
                            focusing on using your ab muscles.  Then do it with the opposite leg.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ legClimbThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Cross crunches</td>
                        <td className="explanation">Crunch your right elbow up toward your left knee then vice versa.</td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ crossCrunchThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">90/90 crunch</td>
                        <td className="explanation">
                            For this crunch, your legs crunch up to 90 degrees and your elbows that are behind your head 
                            point up at 90 degrees.  You are crunching both your upper and lower body toward each other
                            for a great overall ab exercise.  Follow the video for the correct form.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ ninetyNinetyThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Scissors</td>
                        <td className="explanation">Lay on your back and scissor your legs from side to side as 
                            shown in the video.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ scissorThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Heels to the heavens</td>
                        <td className="explanation">Lay on your back and put your legs straight up.  Then raise your 
                            pelvis off the ground in a controlled way as shown in the video.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ heelsToHeavensThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Crunches</td>
                        <td className="explanation">Crunch your upper body toward your legs without pulling on your
                            neck.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ crunchThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Reverse Crunches</td>
                        <td className="explanation">Lay down and put bend your legs and lift them up.  Pull your legs in 
                            toward your upper body.  It is the reverse of the exercise above. 
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ reverseCrThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Flutter kick</td>
                        <td className="explanation">Lay on your back and flutter kick your legs up and down as shown 
                            in the video.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ flutterThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Sit ups</td>
                        <td className="explanation">Sit up from a laying down position and your feet touching the ground.
                            Sit up until your chest touches your legs then lower your body back down.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ sitUpThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">knee crunches</td>
                        <td className="explanation">Lay down with your head and shoulder blades elevated then crunch your
                            legs toward your body to contract your ab muscles.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ kneeCrunchThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">in and outs</td>
                        <td className="explanation">Sit down in the same position as the mason twist exercise but 
                            place your hands by your glutes on the ground and extend your legs out then bring them in.
                            Repeat as many times as you can.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ inOutThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Pull up bar leg raise</td>
                        <td className="explanation">Hang from a pull up bar and raise your knees up so your quads are 
                            parallel to the ground.  Then lower them down and repeat as many times as you can.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ hangThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">plank variations (jump ins, rolls, jacks, mountain climbers, marching, tuck etc.)</td>
                        <td className="explanation">Do a plank but instead of just holding still, you can do jumping
                            jacks with your legs, you can jump your feet in close to your hands, you can roll side to 
                            side, or you can do mountain climber planks by bending one leg at a time.  Do a variety of
                            these exercises for best results.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ jumpInThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Leg raises</td>
                        <td className="explanation">Lay flat then pull your legs up so that they are perpendicular to
                            the floor.  Then lower them down slowly and repeat.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ legRaiseThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Roll up v-up</td>
                        <td className="explanation">Lay down flat then sit up while your legs come toward you which makes
                            a "V" shape.  Then lay back down while extending your legs and flattening your body.  Repeat
                            as many times as you can.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ vUpThumbnail }>
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

export default Abs;