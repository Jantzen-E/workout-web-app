import React from 'react';
import cardioImage from '../images/cardio/heart.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import jacksVid from '../videos/cardio/jacks.mp4';
import burpeesVid from '../videos/cardio/burpees.mp4';
import jumpSquatsVid from '../videos/cardio/jumpSquats.mp4';
import skatersVid from '../videos/cardio/skaters.mp4';
import tuckJumpsVid from '../videos/cardio/tuckJumps.mp4';
import jumpRopeThumbnail from '../images/cardio/jumpRopeThumbnail.jpg';
import cyclingThumbnail from '../images/cardio/cyclingThumbnail.jpg';
import jacksThumbnail from '../images/cardio/jacksThumbnail.jpg';
import burpeesThumbnail from '../images/cardio/burpeesThumbnail.jpg';
import tuckThumbnail from '../images/cardio/tuckThumbnail.jpg';
import inclineTreadmillThumbnail from '../images/cardio/inclineTreadmillThumbnail.jpg';
import skaterThumbnail from '../images/cardio/skaterThumbnail.jpg';
import jumpSquatThumbnail from '../images/cardio/jumpSquatThumbnail.jpg';
import ellipticalThumbnail from '../images/cardio/ellipticalThumbnail.jpg';
import stairThumbnail from '../images/cardio/stairThumbnail.jpg';
import kickThumbnail from '../images/cardio/kickThumbnail.jpg';
import medicineBallThumbnail from '../images/cardio/medicineBallThumbnail.jpg';

function Cardio() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Cardio</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ cardioImage } className="cardioImage" alt="heart muscle"></img></td>
                        <td className="nameOfExercise">Jump rope</td>
                        <td className="explanation">Jump the rope as shown in the video for as long as you can to get a 
                            cardio workout that will help you to burn calories.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ jumpRopeThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Cycling</td>
                        <td className="explanation">Use a real bike or the cycling exercise machines for a great cardio
                            workout.  You can adjust resistance and speed to change the intensity of the workout.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ cyclingThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Jumping jacks</td>
                        <td className="explanation">Move your legs out when your hands go together in a Jumping
                            motion as shown in the video.  Do this as long as you want or can.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ jacksThumbnail }>
                                <source src={ jacksVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Burpees</td>
                        <td className="explanation">Start in the standing position and crouch down until your hands
                            touch the floor.  Then put the weight on your hands and jump your feet back so that you are 
                            in the pushup position.  Do a pushup then jump your feet to where your hands are and stand up
                            again.  Repeat as many times as you can.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ burpeesThumbnail }>
                                <source src={ burpeesVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Tuck jumps</td>
                        <td className="explanation">Stand with your feet close together then jump in the air.  As you jump,
                            pull your knees close to your chest by "tucking" your lower body uppward.  Before you land, extend
                            your legs and land softly.  Repeat many times for a good cardio work out.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ tuckThumbnail }>
                                <source src={ tuckJumpsVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Incline treadmill</td>
                        <td className="explanation">Walk or jog on the treadmill while the treadmill is at the maximum incline 
                            possible.  This will allow you to burn calories faster and is a great work out.  For more intense 
                            cardio workout, increase speed as well.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ inclineTreadmillThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Speed skaters</td>
                        <td className="explanation">Jump back and forth with your weight on only one leg, and move your arms
                            like a speed skater.  Follow the video for the correct form.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ skaterThumbnail }>
                                <source src={ skatersVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Jump squats</td>
                        <td className="explanation"> Perform a squat with the correct form as shown in the video.  Then 
                            explode upward and when you are at the top of your motion, jump off the ground to make your quads 
                            work even harder.  Repeat this as many times as you can and you will see why it is under the cardio
                            category.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ jumpSquatThumbnail }>
                                <source src={ jumpSquatsVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Stair climber machine</td>
                        <td className="explanation">
                            The stair climber machine simulates stairs that keep going and going so you can set a goal for how
                            many minutes you want to walk on it and you will get a great cardio workout from this.  For more 
                            intense cardio workouts, you can increase the speed of the stairs to make you step faster.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ stairThumbnail }>
                                <source src={ jumpSquatsVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Elliptical</td>
                        <td className="explanation">
                            The elliptical is good because you are moving your arms and your legs.  It is a good alternative 
                            if you don't like running or using the treadmill because it is low impact meaning that it is not 
                            hard on your joints.  Increase intensity by increasing speed and/or resistance.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ ellipticalThumbnail }>
                                <source src={ jumpSquatsVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Butt kicks</td>
                        <td className="explanation">
                            This is a higher impact exercise where you jump up and down and when you jump up, kick yourself 
                            in the butt with your heels and then land on your feet.  Do this repeatedly and you will see why
                            this is a cardio workout.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ kickThumbnail }>
                                <source src={ jumpSquatsVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Overhead medicine ball throw downs</td>
                        <td className="explanation">
                            This gets your heart rate going and is a fun way to exercise because you get to throw something.
                            Lift the medicine ball over your head then throw it downward into the ground and repeat.  You can 
                            increase the weight of the ball or the speed of the exercise to increase intensity.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ medicineBallThumbnail }>
                                <source src={ jumpSquatsVid } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}

export default Cardio;