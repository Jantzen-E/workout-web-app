import React from 'react';
import adductorsImage from '../images/adductors/adductors.jpg';
import trainingVideo from '../videos/traps/diveBomb.mp4';
import sideLungeThumbnail from '../images/adductors/sideLungeThumbnail.jpg';
import hipAdductorThumbnail from '../images/adductors/hipAdductorThumbnail.jpg';

function Adductors() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Leg Adductors</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ adductorsImage } className="adductorsImage" alt="inner thigh muscles"></img></td>
                        <td className="nameOfExercise">slide lunges</td>
                        <td className="explanation">Follow the form shown in the video to see how to perform this
                            exercise.  You can use socks on a tile floor or the furniture sliders on carpet to complete
                            the slide lunge.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ sideLungeThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Hip adductor machine</td>
                        <td className="explanation">This machine allows you to pull your legs together and squeeze in 
                            the middle to work out the leg adductors.
                        </td>
                        <td>
                            <video width="432" height="240" autoplay controls muted poster={ hipAdductorThumbnail }>
                                <source src={ trainingVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Adductors;