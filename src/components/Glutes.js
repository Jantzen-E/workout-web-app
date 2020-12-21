import React from 'react';
import glutesImage from '../images/glutes/glutes.png';
import glutesImage2 from '../images/glutes/glutes2.jpg';
import trapVideo from '../videos/traps/video.mp4';
import squatThumbnail from '../images/glutes/squatThumbnail.png';
import hipAbductionThumbnail from '../images/glutes/hipAbductionThumbnail.jpg';
import thrustThumbnail from '../images/glutes/thrustThumbnail.jpg';

function Glutes() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Glutes</th>
                    <th>Exercise</th>
                    <th>Instructions</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td><img src={ glutesImage } className="glutesImage" alt="glute muscles"></img><img src={ glutesImage2 } className="glutesImage2" alt="gluteus medius muscles"></img></td>
                    <td className="nameOfExercise">Squats</td>
                    <td className="explanation">Bend legs so that your body goes into a squat position.  Go as 
                        deep as you can putting most of your weight on your heels, then push your body back up with 
                        your legs.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ squatThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Hip Abduction</td>
                    <td className="explanation">Swing your legs outward against weight that is pushing inward to 
                        build your glutes.  See video for more details.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ hipAbductionThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Hip thrusts</td>
                    <td className="explanation">Push your hips up toward the ceiling when there is weight pressing
                        down for resistance.  Repeat until failure.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ thrustThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Glutes;