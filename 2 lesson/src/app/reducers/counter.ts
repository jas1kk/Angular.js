import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const COUNT_KEY = 'count';

export const increase = createAction('[COUNT] increase');
export const decrease = createAction('[COUNT] decrease');
export const clear = createAction('[COUNT] clear');
export const changeUpdatedAt = createAction(
	'[COUNT] change updated at',
	props<{ updatedAt: number }>()
 );

export interface CountState {
	count: number;
	updatedAt?: number;
}

export const initialState: CountState = {
	count: 0
}

export const countReducer = createReducer(
	initialState,
	on(increase, state => ({
		...state,
		count: state.count + 1
	})),
	on(decrease, state => ({
		...state,
		count: state.count - 1
	})),
	on(clear, state => ({
		...state,
		count: 0
	})),
	on(changeUpdatedAt, (state, action) => ({
		...state,
		updatedAt: action.updatedAt
	 }))
	);

	export const featureSelector = createFeatureSelector<CountState>(COUNT_KEY);
	export const countSelector = createSelector (
		featureSelector,
		state => state.count
	);
	export const updatedAtSelector = createSelector(
		featureSelector,
		state => state.updatedAt
	 );