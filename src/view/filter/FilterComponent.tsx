// src/view/filter/FilterComponent.tsx
import React from 'react';
import { useLanguageViewModel } from '../../viewmodel/language/useLanguageViewModel';

const FilterComponent: React.FC = () => {
  const { getView } = useLanguageViewModel();
  const View = getView('filter');
  return <View />;
};

export default FilterComponent;