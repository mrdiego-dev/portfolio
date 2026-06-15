import type { ISourceOptions } from "@tsparticles/engine";

export const options: ISourceOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: {
    color: {
      value: "#121212",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "repulse"],
      },
      onClick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 220,
        duration: 0.8,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },
  particles: {
    color: {
      value: "#9bb6c6",
    },
    links: {
      color: "#9bb6c6",
      distance: 180,
      enable: true,
      opacity: 0.9,
      width: 1.2,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "bounce",
      random: false,
      speed: 1.8,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 140,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
