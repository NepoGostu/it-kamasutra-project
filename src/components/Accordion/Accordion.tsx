import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    item: ItemType []
    onClick: (value: any) => void
}

type AccordionBodyPropsType = {
    item: ItemType []
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

type ItemType = {
    title: string
    value: any
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody
            item = {props.item}
            onClick={() => {props.onClick(props.onClick)}}
            />}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onChange()}>{props.title} </h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <div>
        <ul>
            {props.item.map ((i,index) => <li key={index} onClick={() => {props.onClick(i.value)}}>{i.title}</li>)}
        </ul>
    </div>
}