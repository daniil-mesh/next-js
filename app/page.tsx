import Button from './components/Button/Button';
import Htag from './components/Htag/Htag';
import { EArrow } from './enums/Arrow';
import { EHtag } from './enums/Htag';
import { EView } from './enums/View';

export default function Home() {
  return <main>
    <Htag tag={EHtag.H1}>Text</Htag>
    <Button>Primary</Button>
    <Button view={EView.Ghost} arrow={EArrow.Right}>Button</Button>
  </main>;
}
