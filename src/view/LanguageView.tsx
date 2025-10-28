import React, { lazy, Suspense } from 'react';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';

const ViewTr = lazy(() => import('./ViewTr'));
const ViewUae = lazy(() => import('./ViewUae'));
const ViewGeneric = lazy(() => import('./ViewGeneric'));

const LanguageView: React.FC = () => {
  const { language } = useLanguageViewModel();

  const renderView = () => {
    switch (language) {
      case 'tr':
        return <ViewTr />;
      case 'uae':
        return <ViewUae />;
      default:
        return <ViewGeneric />;
    }
  };

  return <>{renderView()}</>
};

export default LanguageView;
