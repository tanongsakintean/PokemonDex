import { AppDispatch, RootState } from './index';
import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux'


export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSector : TypedUseSelectorHook<RootState> = useSelector;