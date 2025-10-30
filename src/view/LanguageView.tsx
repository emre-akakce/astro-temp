import React from 'react';
import { useLanguageViewModel } from '../viewmodel/language/useLanguageViewModel';
import { viewMap } from './viewMap';


const LanguageView: React.FC = () => {
  const { language } = useLanguageViewModel();

  const renderView = () => {
    const ViewComponent = viewMap[language] || viewMap['generic'];
    return (
      <>
        <ViewComponent />
      </>
    );
  };

  return <>{renderView()}</>
};

export default LanguageView;
