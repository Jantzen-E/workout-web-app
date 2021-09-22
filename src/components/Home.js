import React from 'react';




function Home() {
    return(
        <div className="homePage">
            <details>
                <summary className="questions">WHAT IS THIS WEBSITE?:</summary> 
                    <p>
                        This website is a compilation of exercises 
                        that I have learned over the years from people who are smarter than I am.  I have learned these 
                        from well-known workout programs, fitness gurus/body builders on social media, and from trying lots 
                        of different exercises out.  There are a lot more but these are the ones that I like the best.
                    </p> 
            </details>
            <details>
                <summary className="questions">WHO IS THIS SITE FOR?:</summary> 
                    <p>
                        This is for anyone who wants to improve their quality of life by doing exercise.  Exercise helps you feel better
                        by releasing chemicals in your brain that can improve your mood.  It can help improve depression, winter blues, and feelings of laziness and lack of energy. 
                    </p>
            </details>
            <details>
                <summary className="questions">WHY USE THIS SITE?:</summary>  
                    <p>
                        Use this site if you want to know which exercise works out certain muscles/muscle groups.  I broke it down in 
                        a simple way so that you can find exercises that focus primarily on specific muscle groups so that you can tailor your workouts to your needs.  For example,
                        if you feel like your upper body is in better shape than your legs, you can put a greater focus on the glutes, hamstrings, quads, calves etc. to build those
                        muscles so that you are satisfied with your overall look and so you are well balanced with your fitness goals.
                    </p>
            </details>
            <details>
                <summary className="questions">WHICH EXERCISES SHOULD I DO?:</summary>  
                    <p>
                        This all depends on what your goals are.  In my opinion, I would put a stronger focus on the
                        areas where you would like to improve with a lesser focus on the other areas.  I would still recommend working out all muscle groups but just change the focus
                        based on your personal goals.  If at any time you feel too much pressure on your joints, try using an alternative exercise that works the same muscle group.  I 
                        encourage you to do your own research as well to make sure that you are using the correct form as you exercise because if not, injuries are much more common.
                    </p>
            </details>
            <details>
                <summary className="questions">WHERE CAN I DO THESE EXERCISES?:</summary>  
                    <p>
                        Many of these exercises can be done from home with minimal equipment.  If you have 
                        exercise bands or dumbbells then you can do most of these.  Other equipment that is used are things that are common household items like chairs, couches,
                        doors, etc.  If you find an exercise that requires gym equipment that you don't have access to, there are alternative exercises that will most likely work so 
                        you can do more research if you don't find all the alternatives in this site.  Remeber, there are usually at least 3 ways to do each exercise.  There are 
                        free weights (like dumbbells), machines where you adjust the weight with a pin that you put in different holes, with a cable or exercise bands, or just using
                        your own body weight.  Do these exercises with that in mind and choose what you prefer or what is available to you.
                    </p>
            </details>
            <div className="asterisk">
                **Many of the exercises listed on this site work more than one muscle so they are found under the muscle 
                group that is considered the primary muscle targeted**
            </div>
        </div>
    )
}

export default Home;