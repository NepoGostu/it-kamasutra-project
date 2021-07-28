import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion,

}

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onChange={callback}/>
export const UnCollapsedMode = () => <Accordion title={'Menu'} collapsed={false} onChange={callback}/>

export const ModeChanging  = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion title={'Menu'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
}



