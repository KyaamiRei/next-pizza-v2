import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
};

export const cats = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn('inline-flex gap-1 rounded-2xl bg-gray-50 p-1', className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            'items flex h-11 rounded-2xl px-5 font-bold',
            activeIndex === index &&
              'bg-white text-primary shadow-md shadow-gray-200'
          )}
          key={index}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
