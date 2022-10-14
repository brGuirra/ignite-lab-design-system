import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { SignIn } from './SignIn';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions/signin', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login realizado!',
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText('Digite o seu e-mail'),
      'br.guirra@email.com'
    );
    userEvent.type(canvas.getByPlaceholderText('*********'), 'senha123');
    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    });
  },
};
