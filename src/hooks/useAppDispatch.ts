import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';

/**
 * Типизированный хук useDispatch
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
