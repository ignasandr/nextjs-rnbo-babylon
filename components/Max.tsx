'use client';

import { createDevice } from '@rnbo/js'
import { useEffect } from 'react';

export default function Max() {
    let context: AudioContext;

    useEffect(() => {
        let AudioContext = window.AudioContext;
        context = new AudioContext();
        setup();
    }, []);
    // let gain: any;

    const setup = async () => {
        let patcher = await fetch("rnbo/patch.export.json").then((res) => res.json());

        let device = await createDevice({ context, patcher });

        device.node.connect(context.destination);

        device.parameters.forEach(parameter => {
            console.log(parameter.id, parameter.name);
        })

        const gain = device.parametersById.get("gain");
        console.log(gain);
        gain.value = 80;
        console.log(gain);
    }

    function handleClick() {
        context.state === "suspended" && context.resume();
        // context.state === "running" && context.suspend();
        // console.log(gain);
        console.log(context);
    }

    return (
        <div>Max component loaded...
            <button onClick={handleClick}>Play</button>
        </div> 
    )
}