import { useContext, useCallback } from 'react';
import { LanguageContext } from './LanguageContext';
import { viewMap } from 'src/services/viewMap';
import { getEventMap } from './eventMapper';

export const useLanguageViewModel = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageViewModel must be used within a LanguageProvider');
  }

  const { state, dispatch } = context;
  const eventMap = getEventMap(dispatch);

  const dispatchEvent = useCallback((eventName: keyof typeof eventMap, payload: any) => {
    const eventAction = eventMap[eventName];
    if (eventAction) {
      eventAction(payload);
    } else {
      console.warn(`No event action found for event: ${eventName}`);
    }
  }, [eventMap]);

  const getView = (viewName: string) => {
    const view = viewMap(viewName, state.language);
    return view;
  }

  return {
    language: state.language,
    getView,
    dispatchEvent,
  };
};
