"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { homePageCopy, homeStartingPoints } from "@/core/site";
import { publicAsset } from "@/core/paths";
import styles from "./starting-points-menu.module.css";

function StartingPointRow({ point, index }: { point: (typeof homeStartingPoints)[number]; index: number }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<gsap.core.Timeline | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => () => { transitionRef.current?.kill(); }, []);

  useEffect(() => {
    if (reducedMotion) {
      transitionRef.current?.kill();
      gsap.set([overlayRef.current, innerRef.current], { clearProps: "transform" });
    }
  }, [reducedMotion]);

  function reveal(show: boolean, edge = 1) {
    if (reducedMotion !== false || !overlayRef.current || !innerRef.current) return;
    transitionRef.current?.kill();
    const timeline = gsap.timeline({ defaults: { duration: 0.6, ease: "expo.out" } });
    transitionRef.current = timeline;
    if (show) {
      timeline.set(overlayRef.current, { y: 0, yPercent: edge * 101 });
      timeline.set(innerRef.current, { y: 0, yPercent: -edge * 101 });
    }
    timeline.to(overlayRef.current, { yPercent: show ? 0 : edge * 101 }, 0);
    timeline.to(innerRef.current, { yPercent: show ? 0 : -edge * 101 }, 0);
  }

  function pointerTransition(event: PointerEvent<HTMLAnchorElement>, show: boolean) {
    if (event.pointerType === "touch" || !window.matchMedia("(hover: hover)").matches) return;
    if (!show && document.activeElement === linkRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    reveal(show, event.clientY - bounds.top < bounds.height / 2 ? -1 : 1);
  }

  return (
    <Link ref={linkRef} href={point.href} className={styles.row}
      onPointerEnter={(event) => pointerTransition(event, true)}
      onPointerLeave={(event) => pointerTransition(event, false)}
      onFocus={() => reveal(true)}
      onBlur={() => reveal(false)}
      aria-describedby={`starting-point-description-${index}`}>
      <h3 className={styles.title}>{point.title}</h3>
      <span id={`starting-point-description-${index}`} className="sr-only">{point.summary} {point.detail}</span>
      <ArrowUpRight aria-hidden="true" className={styles.arrow} size={26} />
      <div ref={overlayRef} aria-hidden="true" className={styles.overlay}>
        <div ref={innerRef} className={styles.inner}>
          <div className={styles.track}>
            {[0, 1].map((group) => (
              <div key={group} className={styles.group}>
                {point.phrases.map((phrase) => (
                  <div key={phrase} className={styles.part}>
                    <span>{phrase}</span>
                    <div className={styles.image} style={{ backgroundImage: `url("${publicAsset(point.image)}")` }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function StartingPointsMenu() {
  return (
    <nav aria-label={homePageCopy.startingPoints.title} className={styles.menu}>
      {homeStartingPoints.map((point, index) => <StartingPointRow key={point.title} point={point} index={index} />)}
    </nav>
  );
}
