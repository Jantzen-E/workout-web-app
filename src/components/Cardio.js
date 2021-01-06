import React from 'react';
import cardioImage from '../images/cardio/heart.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import jumpRopeThumbnail from '../images/cardio/jumpRopeThumbnail.jpg';
import cyclingThumbnail from '../images/cardio/cyclingThumbnail.jpg';
import jacksThumbnail from '../images/cardio/jacksThumbnail.jpg';
import burpeesThumbnail from '../images/cardio/burpeesThumbnail.jpg';

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
                                <source src={ trainingVideo } type="video/mp4"/>
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

export default Cardio;