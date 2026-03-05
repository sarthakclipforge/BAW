import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPConfig = () => {
  useGSAP(() => {
    // Global defaults
    gsap.defaults({
      ease: 'power4.out',
      duration: 1.2,
    });
  });
};
