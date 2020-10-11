import React from 'react';
import tricepsImage from '../images/triceps.png';
import trapVideo from '../videos/video.mp4';
import supinationThumbnail from '../images/supinationThumbnail.jpg';

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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">leaning forward tricep extensions</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
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
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="nameOfExercise">laying down tri lifts</td>
                    <td className="explanation">explanation here</td>
                    <td>
                        <video width="320" height="240" autoplay controls muted poster={ supinationThumbnail }>
                            <source src={ trapVideo } type="video/mp4"/>
                            Your browser does not support the video tag
                        </video>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Triceps;