import React from 'react';
import quadsImage from '../images/quads/quads.png';
import trapVideo from '../videos/traps/video.mp4';
import pistolSquatThumbnail from '../images/quads/pistolSquatThumbnail.jpg';
import wallSitThumbnail from '../images/quads/wallSitThumbnail.jpg';
import legPressThumbnail from '../images/quads/legPressThumbnail.jpg';
import extensionThumbnail from '../images/quads/extensionThumbnail.jpg';
import bulgarianThumbnail from '../images/quads/bulgarianThumbnail.jpg';
import closeSquatThumbnail from '../images/quads/closeSquatThumbnail.jpg';

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
                        <td className="nameOfExercise">Assisted pistol squats</td>
                        <td className="explanation">Do a squat with one leg and at the bottom of the movement, you sit on
                            a bench or chair then push your body weight back up with that same leg again.  Repeat until
                            failure then switch legs.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pistolSquatThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
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
                            <video width="320" height="240" autoplay controls muted poster={ wallSitThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
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
                            <video width="320" height="240" autoplay controls muted poster={ legPressThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Leg extensions</td>
                        <td className="explanation">Sit in the leg extension seat and put your ankles on the round pad.  
                            Extend your legs while pushing the weight up and slowly lower them back down.  Repeat as needed. 
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ extensionThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
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
                            <video width="320" height="240" autoplay controls muted poster={ bulgarianThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Close-stance squats</td>
                        <td className="explanation">Perform a squat with the correct form as shown in the video with your 
                            feet close together.  This stance will put more focus on the quads as opposed to the glutes but 
                            it is a great overall leg workout.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ closeSquatThumbnail }>
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

export default Quads;