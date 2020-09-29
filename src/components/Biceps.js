import React from 'react';
import bicepsImage from '../images/biceps.jpg';
import trapVideo from '../videos/video.mp4';
import armRaiseThumbnail from '../images/armRaiseThumbnail.jpg';
import supinationThumbnail from '../images/supinationThumbnail.jpg';
import inOutThumbnail from '../images/inOutThumbnail.jpg';
import staticThumbnail from '../images/staticThumbnail.jpg';
import elbowsBehindThumbnail from '../images/elbowsBehindThumbnail.jpg';
import crossBodyThumbnail from '../images/crossBodyThumbnail.jpg';
import halfCurlThumbnail from '../images/halfCurlThumbnail.jpg';
import hammerThumbnail from '../images/hammerThumbnail.jpg';
import inOutHammerThumbnail from '../images/inOutHammerThumbnail.jpg';
import staticHammerThumbnail from '../images/staticHammer.jpg';
import crossHammerThumbnail from '../images/crossHammerThumbnail.jpg';
import halfHammerThumbnail from '../images/halfHammerThumbnail.jpg';
import dragCurlThumbnail from '../images/dragCurlThumbnail.jpg';
import hammerPronationThumbnail from '../images/hammerPronationThumbnail.jpg';
import faceCurlsThumbnail from '../images/faceCurlsThumbnail.jpg';
import waiterThumbnail from '../images/waiterThumbnail.jpg';
import burnoutThumbnail from '../images/burnoutThumbnail.jpg';
import legCurlThumbnail from '../images/legCurlThumbnail.jpg';

function Biceps() {
    return(
        <div>
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Biceps</th>
                    <th>Name of exercise</th>
                    <th>Instructions</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td><img src={ bicepsImage } className="bicepsImage" alt="biceps muscle"></img></td>
                    <td className="nameOfExercise">Full supination concentration</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">In & out</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ inOutThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Static arm curl</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ staticThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Cross body curls</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ crossBodyThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">half curls (2 types)</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ halfCurlThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">hammer curls</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ hammerThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">In & out hammer curls</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ inOutHammerThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Static hammer arm curl</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ staticHammerThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Cross body hammer curl</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ crossHammerThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">half hammer curls (2 types)</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ halfHammerThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Close body drag curl</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ dragCurlThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Hammer pronation curls</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ hammerPronationThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Band curls toward face</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ faceCurlsThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Band curls with elbows behind back</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ elbowsBehindThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Waiter's curl</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ waiterThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Iso/eccentric burnout</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ burnoutThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Towel curls/leg curls</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ legCurlThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Biceps;