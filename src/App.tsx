import React, {useState} from 'react';
import {Accordion} from './components/Accordion/Accordion';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
/*import {RatingPropsType, UncontrolRating} from './components/UncontrolRating/UncontrolRating';*/
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolAccordion} from './components/UncontrolAccordion/UncontrolAccordion';


type AppTitlePropsType = {
    title: string
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(true)


/*    const onChange = (value: RatingPropsType) => {
        console.log('onChange', value)
    }*/

    return (
        <div className={'App'}>
            <AppTitle title={'This is app component'}/>
            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>
           {/* <UncontrolRating
                onChange={onChange}
                selected={selected}
                setValue={setRatingValue}
                defaultValue={ratingValue}
            />*/}
            <UncontrolAccordion title={'Bla'}/>
            <Accordion
                title={'Users'}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />
            <UncontrolledOnOff onChange = {setSwitchOn}/>
           {/* <OnOff
                on={switchOn}
                onChange={setSwitchOn}/>*/}
        </div>
    );
}


function AppTitle(props: AppTitlePropsType) {
    return <>{props.title}</>
}


export default App;
