type Props = {
  numbers: [];
};
export const Display = ({ numbers }: Props) => {
  return <span className="number">{numbers.join('')}</span>;
};
