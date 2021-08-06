import React from 'react';
import quadsImage from '../images/quads/quads.png';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import quadExtensionVideo from '../videos/quads/quadExtensions.mp4';
import pistolSquatThumbnail from '../images/quads/pistolSquatThumbnail.jpg';
import wallSitThumbnail from '../images/quads/wallSitThumbnail.jpg';
import legPressThumbnail from '../images/quads/legPressThumbnail.jpg';
import extensionThumbnail from '../images/quads/extensionThumbnail.jpg';
import bulgarianThumbnail from '../images/quads/bulgarianThumbnail.jpg';
import closeSquatThumbnail from '../images/quads/closeSquatThumbnail.jpg';
import lungeThumbnail from '../images/hamstrings/lungeThumbnail.jpg';
import forwardLungesThumbnail from '../images/quads/forwardLungesThumbnail.jpg';
import jumpLungeThumbnail from '../images/quads/jumpLungeThumbnail.jpg';
import prisonerThumbnail from '../images/glutes/prisonerThumbnail.jpg';

function Quads() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Quads</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ quadsImage } className="quadsImage" alt="quadriceps muscles"></img></td>
                        <td className="nameOfExercise">Close-stance squats</td>
                        <td className="explanation">Perform a squat with the correct form as shown in the video with your 
                            feet close together.  This stance will put more focus on the quads as opposed to the glutes but 
                            it is a great overall leg workout.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ closeSquatThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Prisoner squat</td>
                        <td className="explanation">
                            Perform a squat as shown in the video and place your hands on the top of your head and with
                            your elbows flared while you do so.  This will help you with your form by keeping your chest 
                            out and your back straight so that you don't hunch over or round the back. 
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ prisonerThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Leg press</td>
                        <td className="explanation">Sit down in the leg press seat and place your feet on the platform.
                            Push your legs out away from you until your legs are extended then lower them back down slowly.
                            Repeat as needed.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ legPressThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">3-direction Leg extensions</td>
                        <td className="explanation">Sit in the leg extension seat and put your ankles on the round pad.  
                            Extend your legs while pushing the weight up and slowly lower them back down.  Repeat as needed. 
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ extensionThumbnail }>
                                <source src={ quadExtensionVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Assisted pistol squats</td>
                        <td className="explanation">Do a squat with one leg and at the bottom of the movement, you sit on
                            a bench or chair then push your body weight back up with that same leg again.  Repeat until
                            failure then switch legs.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ pistolSquatThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Wall sit pulses</td>
                        <td className="explanation">Do a wall sit but instead of holding still, pulse up and down so that
                            your body is moving up and down the whole time.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ wallSitThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Bulgarian split squats</td>
                        <td className="explanation">Put one foot in front of you and your back foot should rest on a bench
                            or chair.  Lower your body down until your back knee gets close to the ground.  Then push your 
                            body weight back up using your leg muscles.  Repeat as needed. 
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ bulgarianThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Static lunges</td>
                        <td className="explanation">Separate your legs and lower your body bending at the knees so your 
                            body goes straight down.  Your front knee should not extend more forward than your toes and 
                            your back foot should remain straight while your back knee barely taps the ground.  Then 
                            push your body weight straight back up and repeat as many times as you can.  Then switch to 
                            the other leg.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ lungeThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Forward lunges</td>
                        <td className="explanation">Step in front of you with one leg and let your body lower.  Your
                            front knee should not extend more forward than your toes and your back foot should remain
                            straight while your back knee barely taps the ground.  Then stand up and do the same thing
                            with the other leg.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ forwardLungesThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Lunge jumps</td>
                        <td className="explanation">
                            Perform a lunge then jump at the top of the movement to change your stance so the opposite foot 
                            is in front.  Then repeat alternating each time which foot is in front.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ jumpLungeThumbnail }>
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

export default Quads;