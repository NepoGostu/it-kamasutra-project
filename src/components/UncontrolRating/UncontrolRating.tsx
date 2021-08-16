/*
import React, {useState} from 'react';

export type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

export type StarPropsType = {
    defaultValue?: RatingPropsType
    selected: any
    setValue: (value:RatingPropsType) => void
    onChange: (value: RatingPropsType) => void
}

export function UncontrolRating(props: StarPropsType) {

    let [value, setValue] = useState<RatingPropsType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star
                selected={value > 0}
                setValue={() => {
                    setValue(1)
                }}
                onChange={props.onChange}/>
            <Star
                selected={value > 1}
                setValue={() => {
                    setValue(2)
                }}
                onChange={props.onChange}/>
            <Star
                selected={value > 2}
                setValue={() => {
                    setValue(3)
                }}
                onChange={props.onChange}/>
            <Star
                selected={value > 3}
                setValue={() => {
                    setValue(4)
                }}
                onChange={props.onChange}/>
            <Star
                selected={value > 4}
                setValue={() => {
                    setValue(5)
                }}
                onChange={props.onChange}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue()
    }}>{props.selected ? <b>star </b> : 'star '}</span>

}
*/
