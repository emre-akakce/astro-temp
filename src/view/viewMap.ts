import { lazy } from 'react';

const ViewTr = lazy(() => import('./ViewTr'));
const ViewUae = lazy(() => import('./ViewUae'));
const ViewGeneric = lazy(() => import('./ViewGeneric'));

export const viewMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  tr: ViewTr,
  uae: ViewUae,
  generic: ViewGeneric,
};
