import React from 'react';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';

const LanguageView: React.FC = () => {
  const { getView } = useLanguageViewModel();
  const ViewComponent = getView('sampleView');

  const renderView = () => {
    return (
      <>
        <ViewComponent />
      </>
    );
  };

  return <>{renderView()}</>
};

export default LanguageView;
