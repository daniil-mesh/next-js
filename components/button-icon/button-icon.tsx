import React from 'react';

import { cn } from '@/helpers/class-names';
import { EIconType, EIconView } from '@/enums/icon';

import { ButtonIconProps } from './button-icon.props';
import CloseSvg from './close.svg';
import MenuSvg from './menu.svg';
import styles from './button-icon.module.css';
import UpSvg from './up.svg';

export const ButtonIcon = ({
  view,
  icon,
  className,
  ...props
}: ButtonIconProps) => {
  const iconSvg = ((iconType: EIconType) => {
    switch (iconType) {
      case EIconType.Close:
        return <CloseSvg />;
      case EIconType.Menu:
        return <MenuSvg />;
      case EIconType.Up:
        return <UpSvg />;
    }
  })(icon);

  return (
    <button
      className={cn(
        styles.button,
        className,
        [styles.primary, view === EIconView.Primary],
        [styles.white, view === EIconView.White]
      )}
      {...props}
    >
      {iconSvg}
    </button>
  );
};
