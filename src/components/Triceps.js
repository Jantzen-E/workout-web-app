import React from 'react';
import tricepsImage from '../images/triceps/triceps.png';
import trapVideo from '../videos/video.mp4';
import diamondPushupThumbnail from '../images/triceps/diamondPushupThumbnail.jpg';
import sideTriRiseThumbnail from '../images/triceps/sideTriRiseThumbnail.JPG';
import triPushupThumbnail from '../images/triceps/triPushupThumbnail.png';
import skullCrusherThumbnail from '../images/triceps/skullCrusherThumbnail.jpg';
import chairDipThumbnail from '../images/triceps/chairDipThumbnail.jpg';
import tricepPressThumbnail from '../images/triceps/tricepPressThumbnail.jpg';
import sphinxPushupThumbnail from '../images/triceps/sphinxPushupThumbnail.jpg';
import chairSkullCrusherThumbnail from '../images/triceps/chairSkullCrusherThumbnail.jpg';
import triExtensionThumbnail from '../images/triceps/triExtensionThumbnail.jpg';
import tricepKickbackThumbnail from '../images/triceps/tricepKickbackThumbnail.jpg';
import clavShExtensionThumbnail from '../images/triceps/clavShExtensionThumbnail.jpg';
import isoBurnoutThumbnail from '../images/triceps/isoBurnoutThumbnail.jpg';
import cobraThumbnail from '../images/triceps/cobraThumbnail.jpg';

function Triceps() {
    return(
        <div>
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Triceps</th>
                    <th>Name of exercise</th>
                    <th>Instructions</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td><img src={ tricepsImage } className="tricepsImage" alt="triceps muscle"></img></td>
                    <td className="nameOfExercise">Tricep pushups</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ triPushupThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">side tri rise</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ sideTriRiseThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">diamond pushups</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ diamondPushupThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">laying down skull crushers</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ skullCrusherThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">chair dips</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ chairDipThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">dumbell tricep press</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ tricepPressThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">sphinx pushup</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ sphinxPushupThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">chair skull crushers</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ chairSkullCrusherThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">behind the head tricep extensions</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ triExtensionThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">3 angle tricep kickbacks</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ tricepKickbackThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">1 hand clavicle/shoulder extension</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ clavShExtensionThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">iso tri extension burnout</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ isoBurnoutThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">cobra pushup</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ cobraThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                {/* <tr>
                    <td></td>
                    <td className="nameOfExercise">laying down tri lifts</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr> */}
            </table>
        </div>
    )
}

export default Triceps;