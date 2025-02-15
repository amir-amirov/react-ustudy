import { useAppDispatch, useAppSelector as useSelector } from "../index";
import { appActions } from "./slice";

export const useApp = () => {
  const dispatch = useAppDispatch();

  const toggleSorted = () => dispatch(appActions.toggleSorted());

  const setRegion = (region: string) => {
    dispatch(appActions.setRegion(region));
  };

  const removeRegion = () => dispatch(appActions.removeRegion());

  return {
    app: useSelector(({ app }) => app),
    toggleSorted,
    setRegion,
    removeRegion,
  };
};
