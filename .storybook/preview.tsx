import React from 'react';
import type { Preview } from '@storybook/react';

import { inter } from '../src/styles/fonts';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      return (
        <main className={`${inter.className} antialiased`}>{story()}</main>
      );
    },
  ],
};

export default preview;
