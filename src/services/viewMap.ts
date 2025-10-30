import { lazy } from 'react';

const ViewTr = lazy(() => import('../view/ViewTr'));
const ViewUae = lazy(() => import('../view/ViewUae'));
const ViewGeneric = lazy(() => import('../view/ViewGeneric'));

export const viewMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  tr: ViewTr,
  uae: ViewUae,
  generic: ViewGeneric,
};
