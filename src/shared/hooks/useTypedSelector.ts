import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
