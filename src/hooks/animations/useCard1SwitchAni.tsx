import { useEffect, RefObject } from "react";
import { gsap } from "gsap";

const useCardAnimations = (
  card1Content: RefObject<HTMLDivElement | null>,
  card2Content: RefObject<HTMLDivElement | null>
) => {
  const grid1_tl1 = gsap.timeline({
    defaults: { duration: 2.5 },
    delay: 1.5,
    repeat: -1,
    yoyo: true,
  });
  const grid1_tl2 = gsap.timeline({
    defaults: { duration: 2.5 },
    delay: 1.5,
    repeat: -1,
    yoyo: true,
  });
  gsap.set(card2Content.current, { opacity: 0 });
  grid1_tl1.to(card1Content.current, {
    xPercent: 140,

    opacity: 0,
  });
  grid1_tl2.to(card2Content.current, {
    xPercent: 110,

    opacity: 1,
    ease: "back.inOut",
  });
  grid1_tl1.to(card2Content.current, {
    xPercent: -110,

    opacity: 0,
  });
  grid1_tl2.to(card1Content.current, {
    text: "UI Design",
    xPercent: 0,

    opacity: 1,
    ease: "back.inOut",
  });
  grid1_tl1.to(card2Content.current, {
    text: "Interaction Design",
    xPercent: 110,

    opacity: 1,
  });
  grid1_tl2.to(card1Content.current, {
    text: "UI Design",
    xPercent: 140,

    opacity: 0,
    ease: "back.inOut",
  });
  grid1_tl1.to(card2Content.current, {
    xPercent: -110,

    opacity: 0,
  });
  grid1_tl2.to(card1Content.current, {
    text: "Prototyping",
    xPercent: 0,

    opacity: 1,
    ease: "back.inOut",
  });
  grid1_tl1.to(card2Content.current, {
    text: "User Research",
    xPercent: 110,

    opacity: 1,
    ease: "back.inOut",
  });
  grid1_tl2.to(card1Content.current, {
    text: "Wireframing",
    xPercent: 140,

    opacity: 0,
  });
  grid1_tl1.to(card2Content.current, {
    xPercent: -110,

    opacity: 0,
  });
  grid1_tl2.to(card1Content.current, {
    text: "Visual Design",
    xPercent: 0,

    opacity: 1,
    ease: "back.inOut",
  });
  grid1_tl1.to(card2Content.current, {
    text: "User Research",
    xPercent: 110,

    opacity: 1,
  });
  grid1_tl2.to(card1Content.current, {
    text: "Branding",
    xPercent: 140,

    opacity: 0,
    ease: "back.inOut",
  });
};

export default useCardAnimations;
