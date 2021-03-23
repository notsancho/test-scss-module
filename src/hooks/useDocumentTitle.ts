import { useState, useEffect } from 'react';

const defaultTitle = '';
const getDocumentTitle = (title: string): string => `${title ? `${title}` : ''}${defaultTitle}`;

export const setDocumentTitle = (title?: string): string => (document.title = getDocumentTitle(title || defaultTitle));

export default function useDocumentTitle(defaultValue: string): Function {
  const [value, setValue] = useState('');

  useEffect(() => {
    const onSetDefaultValue = (): void => {
      if (defaultValue) {
        setValue(defaultValue);
      }
    };

    onSetDefaultValue();

    return () => {
      setDocumentTitle();
    };
  }, []);

  useEffect(() => {
    setDocumentTitle(value);
  }, [value]);

  return setValue;
}
