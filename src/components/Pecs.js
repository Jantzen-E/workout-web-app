import React from 'react';
import pecsImage from '../images/pecs/pecs.jpg';
import trapVideo from '../videos/video.mp4';
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
        <div>
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Pecs</th>
                    <th>Name of exercise</th>
                    <th>Instructions</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td><img src={ pecsImage } className="pecsImage" alt="pectoralis muscles"></img></td>
                    <td className="nameOfExercise">incline bench press</td>
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
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
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ sidePushThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Pecs;