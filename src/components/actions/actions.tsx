import { Action } from '../action/action';
import { Display } from '../display/display';

export const Actions = () => {
  return (
    <div className="actions">
      <Display numbers={[]}></Display>
      <Action /*numbersLength={5}*/></Action>
    </div>
  );
};
