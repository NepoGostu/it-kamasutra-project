import React from 'react';
import {Accordion} from './Accordion';
import './App.css';
import {Rating} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';

type AppTitlePropsType = {
    title: string
}

function App() {
    return (
        <div className="App">
            <OnOff/>
            <AppTitle title={'This is app component'}/>
            <Rating value={2}/>
            <Accordion
                title = {'Menu'}
                collapsed = {true}/>
            <Accordion
                title = {'Users'}
                collapsed = {false}
            />
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


function AppTitle(props: AppTitlePropsType) {
    return <>{props.title}</>
}


export default App;
