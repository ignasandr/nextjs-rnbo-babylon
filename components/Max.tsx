'use client';

import { createDevice } from '@rnbo/js';
import type { Device } from '@rnbo/js';
import { useEffect } from 'react';

export default function Max() {
    let context: AudioContext;
    let device: Device;

    useEffect(() => {
        let AudioContext = window.AudioContext;
        context = new AudioContext();
        setup();
    }, []);
    let gain: any;

    const setup = async () => {
        let patcher = await fetch("rnbo/pitchslide/patch.export.json").then((res) => res.json());

        device = await createDevice({ context, patcher });

        device.node.connect(context.destination);

        device.parameters.forEach(parameter => {
            console.log(parameter.id, parameter.name);
        })

        gain = device.parametersById.get("gain");
    }

    function handleClick() {
        if (!context) return;
        context.state === "suspended" && context.resume();
    }

    function handleParam(e: any) {
        if (!context) {
            console.log("no context");
            return;
        }
        context.state === "suspended" && context.resume();
        if (!device) {
            console.log("no device");
            return;
        }
        const param = device.parametersById.get(e.target.name);
        param.value = e.target.value;
    }

    return (
        <div className='w-512'>
            {/* <button onClick={handleClick}>Play</button> */}
            <input name= "gain" type="range" min="0" max="100" defaultValue="0" onChange={handleParam} className="range range-primary my-3"/>
            <input name= "pitch" type="range" min="40" max="88" step="12" defaultValue="0" onChange={handleParam} className="range range-secondary my-3"/>
            <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <input name= "glide_ms" type="range" min="0" max="2000" defaultValue="0" onChange={handleParam} className="range range-accent my-3"/>
        </div> 
    )
}