import { cn } from '@/lib/utils';
import React from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from '.';
import { Input } from '../ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="1" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            defaultValue={1000}
          />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />

        <CheckboxFiltersGroup
          title="Ингридиенты"
          limit={6}
          defaultItems={[
            { text: 'Сыр', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Сыр', value: '3' },
            { text: 'Сыр', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Сыр', value: '3' },
          ]}
          items={[
            { text: 'Сыр', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Сыр', value: '3' },
            { text: 'Сыр', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Сыр', value: '3' },
            { text: 'Сыр', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Сыр', value: '3' },
            { text: 'Сыр', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Сыр', value: '3' },
          ]}
          className="mt-12"
        />
      </div>
    </div>
  );
};
