import { Heading, HeadingProps } from './Heading';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1 tag</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
