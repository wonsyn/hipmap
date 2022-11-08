import { useFetchSingleShorts } from "../../../hoc/useFetch";

const Shorts = ({ id }: { id: number }) => {
  const { data } = useFetchSingleShorts(id);
  console.log(data);
  return <div></div>;
};

export default Shorts;
