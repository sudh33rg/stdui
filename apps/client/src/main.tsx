import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { SS } from '@studio-ui/core';
import { StudioUiElements } from '@studio-ui/elements';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <StudioUiElements text={SS} />
    </BrowserRouter>
  </StrictMode>
);
