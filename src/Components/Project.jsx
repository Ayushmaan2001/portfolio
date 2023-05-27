import React from 'react';
import Projects from './Projects';

const obj = {
    one :{
        title:"Project Management System",
        d1:"This project is something like slack where you can create rooms, chats with other people and share ideas.",
        d2:`Here you can create rooms assign projects to the contributors, chat with them about the progress and everything 
        related to the project.`,
        d3:`This website is fast, safe and secure using firebase rules and react routes.`,
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
            d1:"This Website is like Watch Pedia where you can see the rating and launch dates",
            d2:"Here you can see the Trending Movies, Shows, Web series on the internet.",
            d3:"You can see the Trailer and information about the Movies/Show/Web series.",
            tech : {
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                mui:require('../assets/material-ui.png')
            },
            button:{
                site:" https://startling-pothos-879818.netlify.app/",
                github:""
            },
            img:require('../assets/movies.PNG')
        },
        third: {
            title:"Finance Tracking",
            d1:"This website is used to track your expenses what you spend on each item.",
            d2:"It has both add and remove option for the item you add.",
            d3:"This website is built using firebase rules and react routes so it’s safe and secure.",
            tech: {
                css:require('../assets/css.png'),
                html:require('../assets/html-5.png'),
                js:require('../assets/javascript.png'),
                react:require('../assets/react.png'),
                bootstrap:require('../assets/bootstrap.png'),
            },
            button:{
                site:"https://mymoney-aebc4.web.app/login",
                girhub:""
            },
            img:require('../assets/finance.PNG')
        },
        fourth:{
            title:"Sorting Visualizer",
            d1:"This Project is all about the sorting (visualise) i.e both internal and external sort.",
            d2:`
            Internal Sort
                Bubble Sort
                Insertion Sort
                Selection Sort
                Quick Sort
                Merge Sort
                Counting Sort
                Heap Sort`,
            d3:`
            External Sort
                K Way Merge External Sort
                Replacement Selection Sort
                User can also download the files (i.e both sorted and unsorted array files)
            `,
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
    }

const Project = () => {
    return (
        <div className='bg-fifth p-40'>
            <div><h2 className='text-[1.4em]'>Work</h2></div>
            <div><h3 className='text-[#1c2273] text-[2.1rem]'>A Selection of Stuff I've Built</h3></div>
            <Projects title={obj.one.title} d1={obj.one.d1} d2={obj.one.d2} d3={obj.one.d3} tech={obj.one.tech} site={obj.one.button.site} github={obj.one.button.github} img={obj.one.img}/>
            <Projects  title={obj.two.title} d1={obj.two.d1} d2={obj.two.d2} d3={obj.two.d3} tech={obj.two.tech} site={obj.two.button.site} github={obj.two.button.github} img={obj.two.img}/>
            <Projects  title={obj.third.title} d1={obj.third.d1} d2={obj.third.d2} d3={obj.third.d3} tech={obj.third.tech} site={obj.third.button.site} github={obj.third.button.github} img={obj.third.img}/>
            <Projects  title={obj.fourth.title} d1={obj.fourth.d1} d2={obj.fourth.d2} d3={obj.fourth.d3} tech={obj.fourth.tech} site={obj.fourth.button.site} github={obj.fourth.button.github} img={obj.fourth.img}/>
        </div>
    );
}

export default Project;
