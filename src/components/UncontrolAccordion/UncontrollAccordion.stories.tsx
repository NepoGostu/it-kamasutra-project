import React, {useState} from 'react';
import {UncontrolAccordion} from './UncontrolAccordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrolAccordion',
    component: UncontrolAccordion,

}

const callback = action('uncontrolAccordion mode change event fired')


export const ModeChanging  = () => {
    return <UncontrolAccordion title={'Menu'} />
}



