// Timeline2.tsx
import React, { useRef, useState } from 'react';
import {
  Wrapper,
  List,
  Item,
  Dot,
  Title,
  Details,
} from './styles';

type Event = {
  date: string;
  title: string;
  heading: string;
};

export function Timeline({ events }: { events: Event[] }) {

  // ref to the scrolling container
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef    = useRef<HTMLUListElement>(null);

  // Tell TS that openIndex is number | null, not just null:
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // ignore if any button is down
    if (e.nativeEvent.buttons !== 0) return

    const wr = wrapperRef.current
    const ls = listRef.current
    if (!wr || !ls) return

    // get wrapper bounds, then compute x relative to *that*
    const rect = wr.getBoundingClientRect()
    let x      = e.clientX - rect.left
    // clamp into [0, width]
    x = Math.max(0, Math.min(x, rect.width))

    const pct       = x / rect.width
    const maxOffset = rect.width - ls.clientWidth
    ls.style.left   = `${pct * maxOffset}px`
  }




  return (
    <Wrapper ref={wrapperRef} onMouseMove={handleMouseMove}>
      <List ref={listRef}>
        {events.map((evt, idx) => (
          <Item key={idx} onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <Dot />
            <Title>{evt.title}</Title>
            <Details className={openIndex === idx ? 'open' : ''}>
              <h3>{evt.heading}</h3>
              <small>{evt.date}</small>
              <button onClick={() => setOpenIndex(idx)}>
                {openIndex === idx ? 'Close' : 'Open'}
              </button>
            </Details>
          </Item>
        ))}
      </List>
    </Wrapper>

  );
}
