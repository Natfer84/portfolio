import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull  } from "tsparticles"; // Cargamos la versión ligera del motor
import ParticlesConfig from "../config/ParticlesConfig";


const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
      console.log(engine);
      await loadFull (engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={ParticlesConfig}
     />
  );
};

export default ParticlesBackground;
