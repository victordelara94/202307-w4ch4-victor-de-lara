import { ReactNode, useContext } from 'react';
import { AppContext } from '../../context/context';

type Props = {
  children: ReactNode;
  number: string;
};
export const Key = ({ children, number }: Props) => {
  const {
    phoneContext: { add },
  } = useContext(AppContext);
  return (
    <li>
      <button onClick={() => add(number)} className="key">
        {children}
      </button>
    </li>
  );
};
