import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

/**
 * Типизированный хук useSelector
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
