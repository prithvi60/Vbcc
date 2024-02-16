export const customHorizontalAnimation = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";
  let slideStyle = {
    position: "absolute",
    display: "block",
    minHeight: "100%",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0,
    WebkitTransitionDuration: transitionTime,
    MozTransitionDuration: transitionTime,
    OTransitionDuration: transitionTime,
    transitionDuration: transitionTime,
    msTransitionDuration: transitionTime,
  };
  let slideShift = {
    transform: `translateX(-100%)`,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };
  if (!state.swiping) {
    slideShift = {
      ...slideShift,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
  }
  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
    prevStyle: {
      ...slideStyle,
      ...slideShift,
    },
  };
};
export const customVerticalAnimation = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";
  let slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0,
  };

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
    prevStyle: {
      ...slideStyle,
      opacity: 1,
      transform: `translateY(-200%)`,
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    },
  };
};
