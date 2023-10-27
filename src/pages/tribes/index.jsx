import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TribesTable from "../../components/TribesTable";
import { fetchTribes } from "../../store/actions/tribes";

export default function Tribes() {
  const dispatch = useDispatch();
  const tribes = useSelector((state) => state.tribes.list);
  const isLoading = useSelector((state) => state.tribes.loading);
  const error = useSelector((state) => state.tribes.error);

  useEffect(() => {
    dispatch(fetchTribes());
  }, [dispatch]);

  return <TribesTable tribes={tribes} isLoading={isLoading} error={error} />;
}
