// import { AnyAction, createSlice } from '@reduxjs/toolkit';

// import { USER_STATE_INIT, WEIGHT_KGS, WEIGHT_LBS } from '@/constants/auth';
// import { apiReducerBuilder } from '@/utils/apiReducerBuilder';
// import { User } from '@/types/auth';

// import { changeOrganizationLogo, updateOrganization } from '../organizations/thunks';

// import {
//   acknowledgeCventResult,
//   changePassword,
//   changeProfilePicture,
//   changeUserPassword,
//   fetchCurrentUser,
//   login,
//   recoverAccount,
//   updateProfile,
//   verifyEmail,
//   verifyPassword,
//   verifyRecoveryEmail,
// } from './thunks';

// export type StateUser = User | typeof USER_STATE_INIT | null;

// export interface AuthState {
//   error: string | null;
//   isLoading: boolean;
//   user: StateUser;
//   weight: typeof WEIGHT_KGS | typeof WEIGHT_LBS | null;
// }

// const initialState: AuthState = {
//   isLoading: false,
//   error: null,
//   user: USER_STATE_INIT,
//   weight: null,
// };

// const slice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     resetAuthError: state => {
//       state.error = null;
//     },
//     setWeight: (state, action) => {
//       state.weight = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(fetchCurrentUser.pending, state => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
//       state.error = null;
//       state.isLoading = false;
//       state.user = action.payload;
//     });
//     builder.addCase(fetchCurrentUser.rejected, (state: any, action: any) => {
//       state.isLoading = false;
//       state.error = action.payload?.message === 'UNAUTHORIZED' ? action.payload?.message : null;
//       state.user = null;
//     });
//     builder.addCase(acknowledgeCventResult.fulfilled, (state: any, action) => {
//       state.error = null;
//       state.isLoading = false;
//       state.user.organization = action.payload;
//     });
//     builder.addCase(acknowledgeCventResult.rejected, (state: any, action: any) => {
//       state.isLoading = false;
//       state.error = action.payload?.message === 'UNAUTHORIZED' ? action.payload?.message : null;
//     });
//     apiReducerBuilder(builder, login);
//     apiReducerBuilder(builder, recoverAccount);
//     apiReducerBuilder(builder, verifyEmail);
//     apiReducerBuilder(builder, verifyRecoveryEmail);
//     apiReducerBuilder(builder, changePassword);
//     apiReducerBuilder(builder, changeUserPassword);
//     apiReducerBuilder(builder, verifyPassword);
//     apiReducerBuilder(builder, changeOrganizationLogo, (state: any, action: AnyAction) => {
//       state.user.organization = action.payload;
//     });
//     apiReducerBuilder(builder, updateOrganization, (state: any, action: AnyAction) => {
//       state.user.organization = action.payload;
//     });
//     apiReducerBuilder(builder, updateProfile, (state: any, action: AnyAction) => {
//       state.user = { ...action.payload, organization: state.user.organization };
//     });
//     apiReducerBuilder(builder, changeProfilePicture, (state: any, action: AnyAction) => {
//       state.user = { ...action.payload, organization: state.user.organization };
//     });
//   },
// });

// export const { resetAuthError, setWeight } = slice.actions;

// export default slice.reducer;
