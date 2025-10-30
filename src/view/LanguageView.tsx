import React from 'react';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';

const LanguageView: React.FC = () => {
  const { getView } = useLanguageViewModel();

  const renderView = () => {
    const ViewComponent = getView();
    return (
      <>
        <ViewComponent />
      </>
    );
  };

  return <>{renderView()}</>
};

export default LanguageView;
