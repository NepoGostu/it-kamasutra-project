import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion,

}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onChange={callback} item={[]}
                                              onClick={onClickCallback}/>
export const UnCollapsedMode = () => <Accordion title={'Menu'} collapsed={false} onChange={callback}
                                                item={[{title: 'Dima', value: 1}, {
                                                    title: 'Valera',
                                                    value: 2
                                                }, {title: 'Viktor', value: 3}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion title={'Menu'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}
                      item={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}]}
                      onClick={onClickCallback}/>
}



