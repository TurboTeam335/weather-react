import { useEffect, useRef } from 'react';

const useGoogleAutocomplete = (handleSelect) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (!searchInputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current, {
      types: ['(cities)'], 
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      handleSelect(place);
    });

    return () => {
      autocomplete.unbindAll();
    };
  }, [handleSelect]);

  return searchInputRef;
};

export default useGoogleAutocomplete;
