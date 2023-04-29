import { atom, useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

type Props = {
  countFromServer: number;
};

const countAtom = atom(0);

const CounterPage = ({ countFromServer }: Props) => {
  useHydrateAtoms([[countAtom, countFromServer]]);
  const [count] = useAtom(countAtom);
  // count would be the value of `countFromServer`, not 0.
  return <div>count: {count}</div>;
};
