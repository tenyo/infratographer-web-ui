import VaIcon from "./components/va-icon"
import iconsConfig from "./icons-config/icons-config"

export default {
  icons: iconsConfig,
  breakpoint: {
    enabled: true,
    bodyClass: true,
    thresholds: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  components: {
    VaIcon,
    VaButton: {
      round: true,
    },
    presets: {
      VaButton: {
        outline: {
          backgroundOpacity: 0,
          hoverBehaviour: "opacity",
          hoverOpacity: 0.07,
          pressedBehaviour: "opacity",
          pressedOpacity: 0.13,
        },
        plain: {
          round: false,
          plain: true,
          hoverBehaviour: "mask",
          hoverOpacity: 0.15,
          pressedBehaviour: "mask",
          pressedOpacity: 0.13,
        },
      },
    },
  },
}
