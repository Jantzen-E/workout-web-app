import React from 'react';
import pecsImage from '../images/pecs/pecs.jpg';
import trapVideo from '../videos/traps/video.mp4';
import inclineBenchThumbnail from '../images/pecs/inclineBenchThumbnail.jpg';
import benchPressThumbnail from '../images/pecs/benchPressThumbnail.jpg';
import declineBenchThumbnail from '../images/pecs/declineBenchThumbnail.png';
import dumbbellPressThumbnail from '../images/pecs/dumbbellPressThumbnail.jpg';
import flyCrossoverThumbnail from '../images/pecs/flyCrossoverThumbnail.jpg';
import mountainClimberThumbnail from '../images/pecs/mountainClimberThumbnail.jpg';
import standardPushupThumbnail from '../images/pecs/standardPushupThumbnail.jpg';
import militaryPushThumbnail from '../images/pecs/militaryPushThumbnail.jpg';
import widePushThumbnail from '../images/pecs/widePushThumbnail.jpg';
import declinePushThumbnail from '../images/pecs/declinePushThumbnail.jpg';
import divePushThumbnail from '../images/pecs/divePushThumbnail.jpg';
import staggeredThumbnail from '../images/pecs/staggeredThumbnail.jpg';
import prisonCellThumbnail from '../images/pecs/prisonCellThumbnail.jpg';
import sloMoThumbnail from '../images/pecs/sloMoThumbnail.jpg';
import sidePushThumbnail from '../images/pecs/sidePushThumbnail.jpg';

function Pecs() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Pecs</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Examples</th>
                    </tr>
                    <tr>
                        <td><img src={ pecsImage } className="pecsImage" alt="pectoralis muscles"></img></td>
                        <td className="nameOfExercise">incline bench press</td>
                        <td className="explanation">Perform a bench press with a slight incline to work out the upper 
                            portion of the chest as shown in the video.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ inclineBenchThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">flat bench press</td>
                        <td className="explanation">Press a barbell straight up from a flat bench to work
                            the mid chest as shown in the video.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ benchPressThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">decline bench press</td>
                        <td className="explanation">Put the bench at a slight decline and press the barbell
                            upwards to work out the lower portion of the chest as shown in the video.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ declineBenchThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">chest dumbell press</td>
                        <td className="explanation">Perform a bench press with dumbbells instead of a barbell which allows
                            your hands to get closer together at the top of the exercise.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ dumbbellPressThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">chest flys/cable crossovers (3 directions)</td>
                        <td className="explanation">You can use bands, cables, or weights to pull at 3 different angles
                            as shown in the video.  This will work all areas of the pec muscles.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ flyCrossoverThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">mountain climber pushups</td>
                        <td className="explanation">Perform a push up while one leg is bent with your knee close to your
                            elbow.  Push up then switch legs and repeat.  See video for more details.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ mountainClimberThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">standard pushups</td>
                        <td className="explanation">Do a standard width push up and repeat until failure</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ standardPushupThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">military pushups</td>
                        <td className="explanation">Do a standard push up but with your hands slightly closer together so
                            that they are directly under your shoulders.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ militaryPushThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">wide pushups</td>
                        <td className="explanation">Do a push up but with your hands placed wider than your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ widePushThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">decline pushups</td>
                        <td className="explanation">Put your feet up on a chair or something higher than where your hands
                            are so that you can work your upper chest as you do push ups until failure
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ declinePushThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">dive bomber pushups</td>
                        <td className="explanation">See video for details on how to perform this exercise</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ divePushThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">staggered hands pushups</td>
                        <td className="explanation">Do a push up with your right hand slightly back then switch hands after
                            every push up
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ staggeredThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">prison cell pushups</td>
                        <td className="explanation">Do a push up then at the top of the exercise, bring your knee forward.  
                            Then extend your leg back to normal push up position.  Do another push up and repeat with the
                            opposite leg.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ prisonCellThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">slo-mo pushups</td>
                        <td className="explanation">Lower your body very slowly as you perform a push up then raise your 
                            body at a normal pace.  Then lower your body at a normal pace but push up very slowly.  Then
                            do both lowering and pushing up very slowly.  Repeat until failure.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ sloMoThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">side to side pushups</td>
                        <td className="explanation">From the standard push up position, step one of your hands out wider
                            to the side and perform a push up.  Then go back to standard push up position.  Then step your
                            opposite hand out to the side and perform another push up.  Repeat until failure.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ sidePushThumbnail }>
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

export default Pecs;