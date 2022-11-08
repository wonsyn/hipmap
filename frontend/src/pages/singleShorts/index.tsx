import { useParams } from "react-router-dom";
import Shorts from "./component/Shorts";

const SingleShorts = () => {
  const param = useParams();
  console.log(param);

  return (
    <div>
      <div>{param.id && <Shorts id={parseInt(param.id)} />}</div>
    </div>
  );
};

export default SingleShorts;
