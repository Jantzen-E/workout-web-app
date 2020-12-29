import React from 'react';
import absImage from '../images/abs/abs.jpg';
import obliquesImage from '../images/abs/obliques.jpg';
import serratusImage from '../images/abs/serratus.jpg';
import trapVideo from '../videos/traps/video.mp4';
import pullUpThumbnail from '../images/lats/pullUpThumbnail.jpg';
import bicycleThumbnail from '../images/abs/bicycleThumbnail.jpg';
import heelsToHeavensThumbnail from '../images/abs/heelsToHeavensThumbnail.jpg';
import crunchThumbnail from '../images/abs/crunchThumbnail.jpg';
import reverseCrThumbnail from '../images/abs/reverseCrThumbnail.jpg';
import scissorThumbnail from '../images/abs/scissorThumbnail.jpg';
import flutterThumbnail from '../images/abs/flutterThumbnail.jpg';
import twistThumbnail from '../images/abs/twistThumbnail.jpg';
import sideCrunchThumbnail from '../images/abs/sideCrunchThumbnail.jpg';
import heelTouchThumbnail from '../images/abs/heelTouchThumbnail.jpg';

function Abs() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Abs</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ absImage } className="absImage" alt="ab muscles"></img><img src={ obliquesImage } className="obliquesImage" alt="oblique ab muscles"></img><img src={ serratusImage } className="serratusImage" alt="serratus anterior muscles"></img></td>
                        <td className="nameOfExercise">Bicycles</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ bicycleThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Heels to the heavens</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ heelsToHeavensThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Crunches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ crunchThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Reverse Crunches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ reverseCrThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Scissors</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ scissorThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Flutter kick</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ flutterThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Mason Twist</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ twistThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Side Crunches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ sideCrunchThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Circle Crunches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Sit ups</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">heel touches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ heelTouchThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">knee crunches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">side hip raise</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">in and outs</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Hang from pullup bar leg raise</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">cross leg/wide leg sit up</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">leg climb</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">plank variations (jump ins, rolls, jacks, mountain climbers)</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Leg raises</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Cross crunches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Roll up v-up</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Oblique v-up</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Windshield wipers</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">5 angle leg crunches</td>
                        <td className="explanation">Hold weight in each hand and shrug your shoulders</td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ pullUpThumbnail }>
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

export default Abs;