import React from 'react';
import abductorsImage from '../images/abductors/abductors.jpg';
import abductorsImage2 from '../images/abductors/abductors2.jpg';
import hipAbductionVideo from '../videos/glutes/hipAbduction.mp4';
import hipAbduction from '../videos/abductors/hipAbduction.mp4';
import multiHipMachine from '../videos/abductors/abductionMachine.mp4';
import stepOutThumbnail from '../images/abductors/stepOutThumbnail.png';
import hipAbductionThumbnail from '../images/abductors/hipAbductionThumbnail.jpg';
// import bandedHipAbductionThumbnail from '../images/glutes/bandedHipAbductionThumbnail.jpg';
import multiHipThumbnail from '../images/abductors/multiHipThumbnail.jpg';

function Abductors() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Leg Abductors</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ abductorsImage } className="abductorsImage" alt="outer thigh muscles"></img><img src={ abductorsImage2 } className="abductorsImage2" alt="outer thigh muscles"></img></td>
                        <td className="nameOfExercise">Banded step out</td>
                        <td className="explanation">This exercise is a similar exercise as the one below but can 
                            be done at home.  All you need is a band.  You step outward in one direction for 5 steps
                            while the band pulls inward then step in the opposite direction to work abductors in both
                            your legs.
                        </td>
                        <td>
                            <video className="abductorVideos" width="432" height="240" autoplay controls muted poster={ stepOutThumbnail }>
                                <source src={ hipAbductionVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Hip abduction machine</td>
                        <td className="explanation">You start this exercise with your legs close together and you push
                            them outward against the weight to focus on the abductors.
                        </td>
                        <td>
                            <video className="abductorVideos" width="432" height="240" autoplay controls muted poster={ hipAbductionThumbnail }>
                                <source src={ hipAbduction } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    {/* <tr>
                        <td></td>
                        <td className="nameOfExercise">Banded Hip Abduction</td>
                        <td className="explanation">Anchor a band to something solid then around your ankle.  Extend
                            your ankle outward away from where the anchor point is and that will work your hip abductors
                            and your glutes.
                        </td>
                        <td>
                            <video className="abductorVideos" width="432" height="240" autoplay controls muted poster={ bandedHipAbductionThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr> */}
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Hip Abduction with multi hip machine</td>
                        <td className="explanation">Adjust the roller to the correct height and position so that you can 
                            push your leg outward against the resistance.  See video for more details.
                        </td>
                        <td>
                            <video className="abductorVideos" width="432" height="240" autoplay controls muted poster={ multiHipThumbnail }>
                                <source src={ multiHipMachine } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}

export default Abductors;