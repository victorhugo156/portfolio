// Timeline2.tsx
import React, { useRef, useState } from 'react';
import {
  Wrapper,
  List,
  Item,
  Title,
  DataBox,
  Heading,
  Small,
  Paragraph,
  Close
} from './styles';

type Event = {
  date: string;
  title: string;
  heading: string;
  description: string;
};

export function Timeline({ events }: { events: Event[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle expand/collapse
  const toggle = (idx: number) =>
    setExpandedIndex(prev => (prev === idx ? null : idx));

  // Handle mouse move for panning
  const onMouseMove = (e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    const list = wrapper.querySelector<HTMLUListElement>('ul')!;
    const wrapperWidth = wrapper.clientWidth;
    const listWidth = list.clientWidth;
    const percent = e.pageX / wrapperWidth;
    const maxOffset = wrapperWidth - listWidth;
    list.style.left = `${(percent * maxOffset).toFixed(1)}px`;
  };

  return (
    <Wrapper
      ref={wrapperRef}
      onMouseMove={onMouseMove}
    >
      <List>
        {events.map((evt, idx) => (
          <Item
            key={evt.date + idx}
            data-date={evt.date}
          >
            <Title>{evt.title}</Title>
            <DataBox
              className={expandedIndex === idx ? 'show' : ''}
              onClick={() => toggle(idx)}
            >
              <Heading>{evt.heading}</Heading>
              <Small>{evt.date}</Small>
              <Paragraph>{evt.description}</Paragraph>
              <Close>Click to close</Close>
            </DataBox>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}
