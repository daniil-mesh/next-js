'use client';

import { useState } from 'react';
import { EArrow } from '@/enums/arrow';
import { EH } from '@/enums/h';
import { EPSize } from '@/enums/p-size';
import { EView } from '@/enums/view';
import Button from '@/components/button/button';
import H from '@/components/h/h';
import P from '@/components/p/p';
import Rating from '@/components/rating/rating';

export default function Home() {
  const [rating, setRating] = useState(4);

  return (
    <>
      <H tag={EH.H1}>Text</H>
      <Button>Primary</Button>
      <Button view={EView.Ghost} arrow={EArrow.Right}>
        Button
      </Button>
      <P size={EPSize.Large}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum in
        aperiam facere incidunt sed doloribus soluta eligendi, sunt, accusamus,
        omnis magni officiis repudiandae quisquam ducimus nesciunt odio harum
        repellat saepe!
      </P>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
    </>
  );
}
