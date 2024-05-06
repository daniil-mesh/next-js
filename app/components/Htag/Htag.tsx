import { ReactElement } from 'react';
import { EHtag } from '@/app/enums/Htag';
import HtagProps from './Htag.props';
import style from './Htag.module.css';

function Htag ({ tag, children }: HtagProps): ReactElement {
  switch (tag) {
    case EHtag.H1:
      return <h1 className={style.h1}>{children}</h1>
    case EHtag.H2:
      return <h2 className={style.h2}>{children}</h2>
    case EHtag.H3:
      return <h3 className={style.h3}>{children}</h3>
    default:
      return <></>
  }
}
export default Htag
