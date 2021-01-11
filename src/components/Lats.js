import React from 'react';
import latsImage from '../images/lats/lats.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import pullUpThumbnail from '../images/lats/pullUpThumbnail.jpg';
import lawnmowerThumbnail from '../images/lats/lawnmowerThumbnail.jpg';
import heavyPantsThumbnail from '../images/lats/heavyPantsThumbnail.jpg';
import bentOverRowThumbnail from '../images/lats/bentOverRow.gif';
import backFlyThumbnail from '../images/lats/backFly.jpg';
import towelLatThumbnail from '../images/lats/towelLatThumbnail.jpg';

function Lats() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Lats</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Examples</th>
                    </tr>
                    <tr>
                        <td><img src={ latsImage } className="latsImage" alt="latissimus dorsi muscle"></img></td>
                        <td className="nameOfExercise">Pull-ups</td>
                        <td className="explanation">
                            Raise both of your hands above your head and with an overhand grip, grab the bar.  Pull
                            your body upward until your head gets above the bar and slowly lower your body down again.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Lawnmower</td>
                        <td className="explanation">
                            Lean forward and grab a dumbell with only one hand.  Pull the weight up as if you are starting
                            a lawnmower.  Then slowly lower the weight back down.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ lawnmowerThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Heavy pants</td>
                        <td className="explanation">
                            With one foot slightly in front of the other, hold dumbells in each hand next to your ankles,
                            and pull the dumbells up until they almost touch the front of your shoulder.  The exercise
                            looks like you are pulling up heavy pants.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ heavyPantsThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Reverse grip bent over row</td>
                        <td className="explanation">
                            Grab a barbell or a dumbell in each hand with an underhand grip.  The weight will start 
                            by your knees with your body leaned forward slightly, and then you pull the weight up so
                            that your lats are engaged.  Your elbows will raise up behind your back and you squeeze
                            the weight there and slowly lower it back down.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ bentOverRowThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Seated bent over dumbbell row</td>
                        <td className="explanation">
                            Hold weights in each hand behing your ankles while sitting on a chair.  Pull your weights up and back
                            and squeeze your shoulder blades together to activate your lats.  Follow the video for correct form. 
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ backFlyThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Towell pull</td>
                        <td className="explanation">
                            Lay on your stomach and hold a towel in your hands.  Lift up your head and hold the towel to your
                            chest while pulling your elbows back.  Then extend your arms all the way above your head while
                            keeping your hands wide (always pulling outward on the towell).  This exercise is a great substitute
                            for a lat pulldown if you are at home and don't have workout equipment.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ towelLatThumbnail }>
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

export default Lats;