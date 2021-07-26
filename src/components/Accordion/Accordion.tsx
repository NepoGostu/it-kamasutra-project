import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title} </h3>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}