import React from 'react';
import bicepsImage from '../images/biceps/biceps.jpg';
import trapVideo from '../videos/traps/video.mp4';
import supinationThumbnail from '../images/biceps/supinationThumbnail.jpg';
import inOutThumbnail from '../images/biceps/inOutThumbnail.jpg';
import staticThumbnail from '../images/biceps/staticThumbnail.jpg';
import elbowsBehindThumbnail from '../images/biceps/elbowsBehindThumbnail.jpg';
import crossBodyThumbnail from '../images/biceps/crossBodyThumbnail.jpg';
import halfCurlThumbnail from '../images/biceps/halfCurlThumbnail.jpg';
import hammerThumbnail from '../images/biceps/hammerThumbnail.jpg';
import inOutHammerThumbnail from '../images/biceps/inOutHammerThumbnail.jpg';
import staticHammerThumbnail from '../images/biceps/staticHammer.jpg';
import crossHammerThumbnail from '../images/biceps/crossHammerThumbnail.jpg';
import halfHammerThumbnail from '../images/biceps/halfHammerThumbnail.jpg';
import dragCurlThumbnail from '../images/biceps/dragCurlThumbnail.jpg';
import hammerPronationThumbnail from '../images/biceps/hammerPronationThumbnail.jpg';
import faceCurlsThumbnail from '../images/biceps/faceCurlsThumbnail.jpg';
import waiterThumbnail from '../images/biceps/waiterThumbnail.jpg';
import burnoutThumbnail from '../images/biceps/burnoutThumbnail.jpg';
import legCurlThumbnail from '../images/biceps/legCurlThumbnail.jpg';

function Biceps() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Biceps</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Examples</th>
                    </tr>
                    <tr>
                        <td><img src={ bicepsImage } className="bicepsImage" alt="biceps muscle"></img></td>
                        <td className="nameOfExercise">Full supination concentration</td>
                        <td className="explanation">
                            Perform a one armed curl as normal but at the top of the movement rotate your the pinky side
                            of your hand inward like you are trying to point it at your shoulder which will supinate
                            your arm even more.  Lower the weight back down and then repeat with the other arm.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">In & out</td>
                        <td className="explanation">
                            Do a normal curl by pulling the weights up to your shoulders and then lower them down.  
                            Then when you raise the weights up again, pull them out wider than your shoulders.  Lower
                            them down slowly and repeat alternating between normal curls and wide curls.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ inOutThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">In & out hammer curls</td>
                        <td className="explanation">
                            Perform the same exercise as above but with the hammer grip instead of the normal curl grip.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ inOutHammerThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">hammer curls</td>
                        <td className="explanation">
                            This is like a regular curl but you hold the weights at a different angle as if you were
                            lifting and lowering a hammer.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ hammerThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Static arm curl</td>
                        <td className="explanation">
                            Hold weights in each hand.  Raise one hand up to 90 degrees so that your forearm is  
                            parallel to the floor.  Hold it there while you do 4 curls with your other arm.  After
                            the 4 curls are done, raise your other arm up to the 90 degree point and maintain it there
                            during the whole time while you are doing 4 curls with the other arm.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ staticThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Static hammer arm curl</td>
                        <td className="explanation">
                            Perform the same exercise as explained above but grip the weights like a hammer instead
                            of the regular curl position.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ staticHammerThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Cross body curls</td>
                        <td className="explanation">
                            Sit down on a bench with your elbow resting on the inside of your knee.  With a weight
                            in your hand, do a curl across your body so that the weight almost scrapes across your 
                            opposite pectoral muscle.  Lower it down slowly and repeat as needed.  Then switch hands
                            and repeat instructions above.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ crossBodyThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Cross body hammer curl</td>
                        <td className="explanation">
                            Perform a similar exercise as explained above but grip the weights like a hammer instead of
                            the regular curl position.  You do not have to sit down for this exercise.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ crossHammerThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">half curls (2 types)</td>
                        <td className="explanation">
                            1st type: Hold dumbells in each hand while they are hanging and lift them up until they are 
                            perpendicular to your body.  Then lower them down until they are hanging again. 
                            Repeat that motion which should only be half of the range of motion because you don't 
                            raise the weights all the way to your shoulders.
                            <br></br>
                            <br></br>
                            2nd type: Hold dumbells in each hand and the follow the instructions above except for the
                            range of motion should be lowering the weights from your shoulders until your arms are 
                            perpendicular to your body but no lower.  Do not lower them to a hanging position.  See
                            video for further explanation.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ halfCurlThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">half hammer curls (2 types)</td>
                        <td className="explanation">
                            Perform the same exercise as explained in the previous exercise but with a hammer grip 
                            instead of the normal curl grip.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ halfHammerThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Close body drag curl</td>
                        <td className="explanation">
                            Do a curl but as you lift the dumbells or barbell up, let your elbows go behind your back
                            so that the barbell or dumbells drag straight up close to your body.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ dragCurlThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Hammer pronation curls</td>
                        <td className="explanation">
                            Perform a hammer curl but instead of back side of your hand facing outwards, pronate your arm
                            so that the back side of your hand faces upward.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ hammerPronationThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Band curls toward face</td>
                        <td className="explanation">
                            Anchor an exercise band to something solid and then do a curl toward your face with your 
                            elbows pointing toward where the band is anchored.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ faceCurlsThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Band curls with elbows behind back</td>
                        <td className="explanation">
                            Anchor the band behind you and start with your arms behind your back.  Curl your arms forward
                            until they get close to your shoulders.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ elbowsBehindThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Waiter's curl</td>
                        <td className="explanation">
                            Hold one dumbell with 2 hands like you are holding a platter of food.  Curl it up towards you
                            then lower it down slowly.  Repeat as many times as you can.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ waiterThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Iso/eccentric burnout</td>
                        <td className="explanation">
                            Hold the weights halfway between hanging position and your shoulders so that your arms
                            are parallel with the floor.  Hold them there as long as you can without lowering them.
                            When you get fatigued and your arms lower, raise them back up to the spot they were at
                            to get an isometric/eccentric exercise.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ burnoutThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Towel curls/leg curls</td>
                        <td className="explanation">
                            Stand up against a wall and wrap a towel under one of your legs.  Grab the towel like you
                            are holding dumbells and curl the weight of one of your legs up.  You can adjust the resistance
                            by pushing your leg down harder or softer depending on how hard you want to work out.
                            <br></br>
                            <br></br>
                            The leg curl is a similar concept except for you sit down and grab the opposite hamstring.  You 
                            curl the weight of your leg up and can adjust how hard it is by pressing your leg down more.
                            These 2 exercises are great alternatives if you don't have dumbells or a barbell.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ legCurlThumbnail }>
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

export default Biceps;