import React from 'react';
import Projects from './Projects';

const obj = {
    one :{
        title:"Project Management System",
        d1:"This project is something like slack where you can create rooms, chats with other people and share ideas.",
        d2:`Here you can create rooms assign projects to the contributors, chat with them about the progress and everything 
        related to the project.`,
        d3:`It basically focuses on managing projects, which typically involves organizing and coordinating tasks, resources, and schedules to achieve specific goals.`,
        tech : {
            css:require('../assets/css.png'),
            html:require('../assets/html-5.png'),
            js:require('../assets/javascript.png'),
            react:require('../assets/react.png'),
            bootstrap:require('../assets/bootstrap.png'),
            firebase:require('../assets/firebase-480.png')
        },
        button:{
            site:"https://projectmanagement-4a0f2.web.app/login",
            github:"https://github.com/Ayushmaan2001/Project-Management"
        },
        img:require('../assets/project.PNG')
    },
        two: {
            title:"Movies Recommendation App",
            d1:"Movies and TV shows infotainment application made using ReactJS and styled in materialUI",
            d2:"The application offers couple of options; user can checkout the trending movies and TV shows as per IMDB ratings",
            d3:"User can search for the content as well. Clicking on the movie/tv show displays the details of it like Title, Plot and a YT miniplayer to play its trailer inside the app as well.",
            tech : {
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                mui:require('../assets/material-ui.png')
            },
            button:{
                site:" https://startling-pothos-879818.netlify.app/",
                github:"https://github.com/Ayushmaan2001/Movies-recommendation"
            },
            img:require('../assets/movies.PNG')
        },
        third: {
            title:"Finance Tracking",
            d1:"We can use this software for tracking and managing personal finances",
            d2:"It has both add and remove option for the item you add.",
            d3:"It is very useful in tracking your expenses and take action accordingly.",
            tech: {
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                bootstrap:require('../assets/bootstrap.png'),
            },
            button:{
                site:"https://mymoney-aebc4.web.app/login",
                github:"https://github.com/Ayushmaan2001/finance-tracking"
            },
            img:require('../assets/finance.PNG')
        },
        fourth:{
            title:"Sorting Visualizer",
            d1:"This Project is all about the sorting (visualise) i.e both internal and external sort. You can observe how different sorting algorithms perform and visualize how they rearrange elements step by step. This can be helpful for understanding the inner workings of sorting algorithms, their efficiency, and their impact on different types of data.",
            d2:`
                Bubble Sort\n\t,
                Insertion Sort\n\t,
                Selection Sort\n\t,
                Quick Sort\n\t,
                Merge Sort\n\t,
                Counting Sort\n\t,
                Heap Sort\n,
                K Way Merge External Sort\n\t
                Replacement Selection Sort\n\t
                and many more sorting Algorithms.
                `,
            d3:`
            User can view/ download the intermediate states of the Sorting `,
            tech:{
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                nodejs:require('../assets/nodejs.png'),
                antd:require('../assets/ant.png')
            },
            button:{
                site:"https://sorting-visualizer-main-g54y-n1uhb2eja-ayushmaan2001.vercel.app/",
                github:"https://github.com/Ayushmaan2001/sorting-visualizer-main"
            },
            img:require('../assets/sorting.PNG')
        },
        fifth :{
            title:"YouTubeMate",
            d1:"Developed a Youtube like application using ReactJs and Material UI which is responsive in nature. User can stream videos from variety of content creators and genres. Interface is similar to Youtube.",
            d2:`Users can search for content of their preference based on genre`,
    
            tech : {
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                mui:require('../assets/material-ui.png')
            },
            button:{
                site:"https://youtubemate1.netlify.app/",
                github:"https://github.com/Shubham-100/YouTubeMate"
            },
            img:require('../assets/tubemate.PNG')
        }
    }

const Project = ({PROJECTS}) => {
    return (
        <div className='bg-fifth p-3 md:p-20' ref={PROJECTS}>
            <div><h2 className='text-[1.4em]'>Work</h2></div>
            <div><h3 className='text-[#1c2273] text-[2.1rem]'>A Selection of Stuff I've Built</h3></div>
            <Projects title={obj.one.title} d1={obj.one.d1} d2={obj.one.d2} d3={obj.one.d3} tech={obj.one.tech} site={obj.one.button.site} github={obj.one.button.github} img={obj.one.img}/>
            <Projects  title={obj.two.title} d1={obj.two.d1} d2={obj.two.d2} d3={obj.two.d3} tech={obj.two.tech} site={obj.two.button.site} github={obj.two.button.github} img={obj.two.img}/>
            <Projects  title={obj.third.title} d1={obj.third.d1} d2={obj.third.d2} d3={obj.third.d3} tech={obj.third.tech} site={obj.third.button.site} github={obj.third.button.github} img={obj.third.img}/>
            <Projects  title={obj.fourth.title} d1={obj.fourth.d1} d2={obj.fourth.d2} d3={obj.fourth.d3} tech={obj.fourth.tech} site={obj.fourth.button.site} github={obj.fourth.button.github} img={obj.fourth.img}/>
            <Projects  title={obj.fifth.title} d1={obj.fifth.d1} d2={obj.fifth.d2} d3={obj.fifth.d3} tech={obj.fifth.tech} site={obj.fifth.button.site} github={obj.fifth.button.github} img={obj.fifth.img}/>
        </div>
    );
}

export default Project;
