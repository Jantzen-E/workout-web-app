import React from 'react';
import latsImage from '../images/lats.jpg';
import trapVideo from '../videos/video.mp4';
import pullUpThumbnail from '../images/pullUpThumbnail.jpg';
import lawnmowerThumbnail from '../images/lawnmowerThumbnail.jpg';

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
                        explanation here
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
                        explanation here
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
                        explanation here
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
                    <td className="nameOfExercise">Reverse grip bent over row</td>
                    <td clasName="explanation">
                        explanation here
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
                    <td className="nameOfExercise">Back flys</td>
                    <td clasName="explanation">
                        explanation here
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
                    <td className="nameOfExercise">Banana roll</td>
                    <td clasName="explanation">
                        explanation here
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
                    <td className="nameOfExercise">Towell pull</td>
                    <td clasName="explanation">
                        explanation here
                    </td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ lawnmowerThumbnail }>
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