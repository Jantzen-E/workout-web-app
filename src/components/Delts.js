import React from 'react';
import delts from '../images/delts.png';
import delts2 from '../images/delts.jpg';
import trapVideo from '../videos/video.mp4';
import armRaiseThumbnail from '../images/armRaiseThumbnail.jpg';
import scarecrowThumbnail from '../images/scarecrowThumbnail.jpg';
import shoulderFlyThumbnail from '../images/shoulderFlyThumbnail.jpg';
import shoulderPressThumbnail from '../images/shoulderPressThumbnail.jpg';
import poursThumbnail from '../images/pours.jpg';
import circlesThumbnail from '../images/circlesThumbnail.jpg';
import uprightRowThumbnail from '../images/uprightRowThumbnail.jpg';
import ypressThumbnail from '../images/ypressThumbnail.jpg';
import pikeThumbnail from '../images/pikeThumbnail.jpg';

function Delts() {
    return(
        <div className="table">
            <table>
                <tr className="headings">
                    <th className="muscleGroup">Deltoids</th>
                    <th>Name of exercise</th>
                    <th>Instructions</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td><img src={ delts } className="deltsImage" alt="deltoid muscle"></img><img src={ delts2 } className="deltsImage2" alt="deltoid muscle"></img></td>
                    <td className="nameOfExercise">Weighted arm raises</td>
                    <td className="explanation">
                        Hold weight in each hand and lift the weight up in front of your body.  Slowly lower it.  
                        Then raise the weight to the side of your body (like a shoulder fly) to exercise the 
                        delt from a different angle. 
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ armRaiseThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Scarecrow</td>
                    <td className="explanation">
                        Hold dumbells in each hand above your shoulders so that they are close to your ears with your
                        elbows out.  Then rotate the weights forward until the weights are hanging below your elbows.
                        Then rotate the weights up and back again until they are in the position you started in.
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ scarecrowThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">Leaning forward shoulder flys</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ shoulderFlyThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">shoulder press</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ shoulderPressThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">pours</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ poursThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">weighted circle</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ circlesThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">upright row</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ uprightRowThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">y press</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ ypressThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">pike push up</td>
                    <td className="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ pikeThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Delts;