"use client";

import { useId, useRef, useState, type PointerEvent } from "react";
import type { TeamMember } from "@/core/site";
import { Placeholder } from "./placeholder";

export function TeamShowcase({ members }: { members: TeamMember[] }) {
  const id = useId();
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; scroll: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const [dragging, setDragging] = useState(false);

  function startDrag(event: PointerEvent<HTMLElement>) {
    // Keep native touch scrolling and momentum on the portrait row.
    if (event.pointerType === "touch" && event.currentTarget === track.current) return;
    if (event.button !== 0 || !event.isPrimary || !track.current) return;
    suppressClick.current = false;
    drag.current = { x: event.clientX, scroll: track.current.scrollLeft, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLElement>) {
    if (!drag.current || !track.current) return;
    const delta = event.clientX - drag.current.x;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    track.current.scrollLeft = drag.current.scroll - delta;
  }

  function endDrag() {
    if (drag.current) suppressClick.current = drag.current.moved;
    drag.current = null;
    setDragging(false);
  }

  function scrollTo(left: number) {
    track.current?.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  const pointerHandlers = {
    onPointerDown: startDrag,
    onPointerMove: moveDrag,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onLostPointerCapture: endDrag,
  };

  return (
    <div className="w-full">
      <div className="mx-auto mb-8 flex max-w-7xl justify-end px-6 md:px-10 lg:px-12">
        <button
          type="button"
          aria-label="Show more team members"
          aria-controls={id}
          {...pointerHandlers}
          onClick={(event) => {
            if ((event.detail !== 0 && suppressClick.current) || !track.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = track.current;
            scrollTo(scrollLeft >= scrollWidth - clientWidth - 2 ? 0 : scrollLeft + clientWidth * 0.75);
          }}
          className={`inline-flex min-h-11 touch-none select-none items-center gap-4 rounded-full bg-[#1c1c1e] px-6 py-3 text-xs font-semibold tracking-[0.16em] text-white transition-colors hover:bg-[#2c2c34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4262ff] ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <span aria-hidden="true">&larr;</span>
          DRAG
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <p id={`${id}-instructions`} className="sr-only">
        Drag or swipe to explore the team. Use the left and right arrow keys when this row is focused, or activate the Show more team members button.
      </p>
      <div
        ref={track}
        id={id}
        role="region"
        aria-label="Our team"
        aria-describedby={`${id}-instructions`}
        tabIndex={0}
        {...pointerHandlers}
        onDragStart={(event) => event.preventDefault()}
        onKeyDown={(event) => {
          const row = track.current;
          if (!row) return;
          const destinations: Record<string, number> = {
            ArrowLeft: row.scrollLeft - 240,
            ArrowRight: row.scrollLeft + 240,
            Home: 0,
            End: row.scrollWidth - row.clientWidth,
          };
          if (event.key in destinations) {
            event.preventDefault();
            scrollTo(destinations[event.key]);
          }
        }}
        className={`overflow-x-auto overscroll-x-contain select-none px-6 pb-4 pt-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#4262ff] md:px-10 lg:px-12 [&::-webkit-scrollbar]:hidden ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <ul className="flex w-max min-w-full list-none justify-between gap-8 md:gap-12">
          {members.map((member, index) => (
            <li
              key={member.name}
              className={`flex w-32 shrink-0 flex-col items-center text-center md:w-40 xl:w-44 ${index % 2 === 1 ? "mt-10 md:mt-12" : ""}`}
            >
              <Placeholder
                src={member.src}
                alt={member.src ? member.name : ""}
                rounded="full"
                className="aspect-square w-full"
                imageStyle={member.portrait ? {
                  position: "absolute",
                  width: `${member.portrait.width}%`,
                  maxWidth: "none",
                  height: "auto",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-${member.portrait.x}%, -${member.portrait.y}%)`,
                } : undefined}
              />
              <p className="mt-4 text-sm font-medium leading-5 text-[#1c1c1e]">
                {member.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-[#6b6f7e]">
                {member.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
