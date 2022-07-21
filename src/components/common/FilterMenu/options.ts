import {IOption} from "../MySelect/MySelect";

export const durationOptions:IOption[] = [
    {value: "", text: 'duration'},
    {value: "0_x_5", text: '5 days'},
    {value: "5_x_10", text: '<10 days'},
    {value: "10_x",  text: '>=10 days'}
];

export const levelOptions:IOption[] = [
    {value: "", text: 'level'},
    {value: "easy", text: 'easy'},
    {value: "moderate", text: 'moderate'},
    {value: "difficult",  text: 'difficult'}
];