import React from 'react';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';

const LanguageView: React.FC = () => {
  const { getView } = useLanguageViewModel();
  const ViewComponent = getView('sampleView');
  const AnotherViewComponent = getView('anotherSampleView');

  const renderView = () => {
    return (
      <>
        <ViewComponent />
        <AnotherViewComponent />
      </>
    );
  };

  return <>{renderView()}</>
};

export default LanguageView;
