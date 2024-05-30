export function cf(num: number, lang = 'ru-RU'): string {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(num);
}
