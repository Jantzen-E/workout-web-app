import React from 'react';
import latsImage from '../images/lats.jpg';
import trapVideo from '../videos/video.mp4';
import pullUpThumbnail from '../images/pullUpThumbnail.jpg';
import lawnmowerThumbnail from '../images/lawnmowerThumbnail.jpg';
import heavyPantsThumbnail from '../images/heavyPantsThumbnail.jpg';
import bentOverRowThumbnail from '../images/bentOverRow.gif';
import backFlyThumbnail from '../images/backFly.jpg';
import bananaRollThumbnail from '../images/bananaRollThumbnail.jpg';
import towelLatThumbnail from '../images/towelLatThumbnail.jpg';

function Lats() {
    return(
        <div>
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Lats</th>
                    <th>Name of exercise</th>
                    <th>Instructions</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td><img src={ latsImage } className="latsImage" alt="latissimus dorsi muscle"></img></td>
                    <td className="nameOfExercise">Pull-ups</td>
                    <td clasName="explanation">
                        Raise both of your hands above your head and with an overhand grip, grab the bar.  Pull
                        your body upward until your head gets above the bar and slowly lower your body down again.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Lawnmower</td>
                    <td clasName="explanation">
                        Lean forward and grab a dumbell with only one hand.  Pull the weight up as if you are starting
                        a lawnmower.  Then slowly lower the weight back down.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ lawnmowerThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Heavy pants</td>
                    <td clasName="explanation">
                        With one foot slightly in front of the other, hold dumbells in each hand next to your ankles,
                        and pull the dumbells up until they almost touch the front of your shoulder.  The exercise
                        looks like you are pulling up heavy pants.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ heavyPantsThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Reverse grip bent over row</td>
                    <td clasName="explanation">
                        Grab a barbell or a dumbell in each hand with an underhand grip.  The weight will start 
                        by your knees with your body leaned forward slightly, and then you pull the weight up so
                        that your lats are engaged.  Your elbows will raise up behind your back and you squeeze
                        the weight there and slowly lower it back down.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ bentOverRowThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Back flys (bent arm & straight arm)</td>
                    <td clasName="explanation">
                        Hold weights in each hand while standing up.  Bend forward until your torso is parallel with
                        the ground.  Let the weights hang under your chest.  Then extend them each to the side until 
                        they are parallel with the ground, then lower them slowly to the hanging position.  For the 
                        bent arm variation, follow the same instructions above but make sure during the movement that 
                        your biceps and forearms form a 90 degree angle. 
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ backFlyThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Banana roll</td>
                    <td clasName="explanation">
                        Lay on your stomach and raise your ankles and upper torso off the ground so that just your
                        belly is touching the ground.  Hold that position for 30 seconds then roll over to your side.
                        Keep your ankles and shoulder off the ground for 30 seconds then roll to your back.  Keep your
                        head and ankles off the ground and hold for the same amount of time.  Then roll to your other 
                        side and keep ankles and shoulder off the ground for the same amount of time.  Repeat the whole
                        process above.  This exercise will strenthen your core which includes muscles in your back.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ bananaRollThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Towell pull</td>
                    <td clasName="explanation">
                        Lay on your stomach and hold a towel in your hands.  Lift up your head and hold the towel to your
                        chest while pulling your elbows back.  Then extend your arms all the way above your head while
                        keeping your hands wide (always pulling outward on the towell).  This exercise is a great substitute
                        for a lat pulldown if you are at home and don't have workout equipment.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ towelLatThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Lats;