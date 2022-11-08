import { logger } from './logger';

export default function classNames(...classes) {
  const b = classes.filter(Boolean).join(' ');
  console.log({ b });
  return b;
}
