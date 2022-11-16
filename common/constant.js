import { useState } from "react";

export const category  = [
    {title:'Excersise',icon:'run',status:'selected',iconSaved:'fitness-center'},
    {title:'Social',icon:'message-reply-text',status:'',iconSaved:'all-inbox'},
    {title:'Sport',icon:'basketball',status:'',iconSaved:'sports-baseball'},
    {title:'Music',icon:'music',status:'selected',iconSaved:'music-note'},
    {title:'Other',icon:'application',status:'',iconSaved:'devices-other'}
]

export function useForceRender() {
    const [value, setValue] = useState(0);
    return [() => setValue(value + 1)];
}
