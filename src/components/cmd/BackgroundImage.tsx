import particlesConfig from '@/config/particle-config';
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 
import type { RecursivePartial } from "tsparticles-engine";
import type { IOptions } from "tsparticles-engine";

const BackgroundImage = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // console.log(engine);
        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // await console.log(container);
    }, []);
    
  return (
    <div id="particle-background" className='absolute top-0 w-full h-screen -z-10'>
         <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesConfig as RecursivePartial<IOptions>} height="100vh" width='100vh'/>
    </div>
  )
}

export default BackgroundImage
