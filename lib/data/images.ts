/** Site imagery from /public — URL-safe filenames. */

export const siteImages = {
  heroPainting: {
    src: "/wallpainting.png",
    alt: "UUPL tethered aircraft painting a high-rise facade",
    width: 1448,
    height: 1086,
  },
  facadeWork: {
    src: "/wallpainting01.png",
    alt: "Facade painting coverage on a building elevation",
    width: 899,
    height: 656,
  },
  droneOnGround: {
    src: "/drone-on-ground.png",
    alt: "UUPL painting aircraft staged on the ground before flight",
    width: 592,
    height: 308,
  },
  tetherAndPump: {
    src: "/tether-and-pump.png",
    alt: "Ground power and paint pump unit with tether",
    width: 803,
    height: 337,
  },
  completeSystem: {
    src: "/completeimage.png",
    alt: "Complete UUPL tethered painting system overview",
    width: 478,
    height: 363,
  },
} as const;
