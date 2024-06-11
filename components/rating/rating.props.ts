import { HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export default interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  error?: FieldError;
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
