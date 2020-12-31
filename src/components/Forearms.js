import React from 'react';
import forearmsImage from '../images/forearms/forearms.jpg';
import trapVideo from '../videos/traps/video.mp4';
import hangThumbnail from '../images/forearms/hangThumbnail.jpg';
import twistThumbnail from '../images/forearms/twistThumbnail.jpg';
import reverseCurlThumbnail from '../images/forearms/reverseCurlThumbnail.jpg';

function Forearms() {
    return(
        <div className="App">
            <div className="table">
                <table>
                    <tr className="headings">
                        <th className="muscleGroup">Forearms</th>
                        <th>Exercise</th>
                        <th>Instructions</th>
                        <th>Example</th>
                    </tr>
                    <tr>
                        <td><img src={ forearmsImage } className="forearmsImage" alt="forearm muscles"></img></td>
                        <td className="nameOfExercise">Reverse curl</td>
                        <td className="explanation">Hold weight with the back of your hand facing forward and perform a 
                            curl.  Raise and lower the weight repeatedly with that grip to exercise your forearms
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ reverseCurlThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Weighted rope twist</td>
                        <td className="explanation">Hold your arms out straight in front of you with a bar that 
                            has a rope with weight on it.  Roll the weight up and then back down.  Can be done with
                            palm up grip and palm down grip and can be rolled toward you and away from you.
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ twistThumbnail }>
                                <source src={ trapVideo } type="video/mp4"/>
                                Your browser does not support the video tag
                            </video>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="nameOfExercise">Bar hang</td>
                        <td className="explanation">Hang from a pull up bar for as long as you can and that will
                            strengthen your grip and your forearms
                        </td>
                        <td>
                            <video width="320" height="240" autoplay controls muted poster={ hangThumbnail }>
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

export default Forearms;