import { EArrow } from './enums/Arrow';
import { EH } from './enums/H';
import { EPSize } from './enums/PSize';
import { EView } from './enums/View';
import Button from './components/Button/Button';
import H from './components/H/H';
import P from './components/P/P';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
