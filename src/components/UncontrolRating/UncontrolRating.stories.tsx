import React from 'react';
import {UncontrolRating} from './UncontrolRating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrolRating',
    component: UncontrolRating,
}

const callback = action('rating changed inside component')

export const EmptyStars = () => <UncontrolRating defaultValue={0} onChange = {callback} selected={callback} setValue={callback}/>
export const Rating1 = () => <UncontrolRating defaultValue={1} onChange = {callback} selected={callback} setValue={callback}/>
export const Rating2 = () => <UncontrolRating defaultValue={2} onChange = {callback} selected={callback} setValue={callback}/>
export const Rating3 = () => <UncontrolRating defaultValue={3} onChange = {callback} selected={callback} setValue={callback}/>
export const Rating4 = () => <UncontrolRating defaultValue={4} onChange = {callback} selected={callback} setValue={callback}/>
export const Rating5 = () => <UncontrolRating defaultValue={5} onChange = {callback} selected={callback} setValue={callback}/>




