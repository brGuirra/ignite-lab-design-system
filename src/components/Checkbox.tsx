import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Check } from 'phosphor-react';
import { clsx } from 'clsx';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      className="h-6 w-6 p-[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
