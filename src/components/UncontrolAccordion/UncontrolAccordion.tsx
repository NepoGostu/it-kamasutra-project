import React, {useState} from 'react';

type AccordionPropsType = {
    title: string

}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UncontrolAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick()}>{props.title} </h3>
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