import { API } from '@/app/api';
import { IReviewForm } from '@/interfaces/review-form.interface';

export async function createReview(formData: IReviewForm, productId: string) {
  const res = await fetch(API.review.createDemo, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({ ...formData, productId }),
  });
  const data = (await res.json()) as Promise<string>;
  return data;
}
