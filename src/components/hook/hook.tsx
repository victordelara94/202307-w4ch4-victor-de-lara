import { useState } from 'react';
import { Key } from '../key/key';
let displayNumbers = '';
Key;
export function usePhone() {
  const [numbers, setNumbers] = useState<string>('');

  const add = (number: string) => {
    displayNumbers += number;
    setNumbers(displayNumbers);
  };
  return { numbers, setNumbers, add };
}
