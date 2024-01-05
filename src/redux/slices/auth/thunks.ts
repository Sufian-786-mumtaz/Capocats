// import { createAsyncThunk } from '@reduxjs/toolkit';

// import AuthService from '@/services/AuthService';

// export const authUser = createAsyncThunk(
//   'auth/authUser',
//   async ({ username, password }: { username: string; password: string }) => {
//     return await AuthService.authenticateUser({
//       username,
//       password,
//     });
//   }
// );

// export const verifyPassword = createAsyncThunk(
//   'auth/verifyPassword',
//   async ({ username, password }: { username: string; password: string }) => {
//     return await AuthService.authenticateUser({
//       username,
//       password,
//     });
//   }
// );

// export const resendVerificationEmail = createAsyncThunk('auth/resendVerificationEmail', async (email: string) => {
//   return await AuthService.resendVerificationEmail(email);
// });

// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ username, password }: { username: string; password: string }, { dispatch, rejectWithValue }) => {
//     try {
//       const response: any = await dispatch(authUser({ username, password }));

//       if (response.error) {
//         if (response.error.code === 'NotAuthorizedException') {
//           rejectWithValue('INVALID_USERNAME_PASSWORD');
//         }
//         rejectWithValue(response.error);
//       }

//       if (response.payload === undefined) {
//         return rejectWithValue({ message: 'INVALID_USERNAME_PASSWORD' });
//       }

//       if (!response.payload.attributes.email_verified) {
//         await AuthService.logout();
//         await AuthService.resendVerificationEmail(response.payload.attributes.email);
//         return { message: 'EMAIL_NOT_VERIFIED' };
//       }

//       return await dispatch(fetchCurrentUser({}));
//     } catch (e: any) {
//       return rejectWithValue({ message: e.error_description });
//     }
//   }
// );

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/fetchCurrentUser',
//   async (params: any, { rejectWithValue }: any) => {
//     try {
//       let cognitoUser;
//       if (!params?.accessToken) {
//         cognitoUser = await AuthService.getCognitoUser();
//         if (!cognitoUser) {
//           return null;
//         }
//       }

//       AuthService.setAxiosInterceptors(params?.logoutCallback);
//       const userData = await AuthService.fetchProfile();
//       return userData;
//     } catch (e: any) {
//       if (e.message === 'UNAUTHORIZED') {
//         await AuthService.logout();
//       }
//       return rejectWithValue(e);
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async ({ preventReset }: { preventReset: boolean }, { dispatch }) => {
//     if (!preventReset) {
//       dispatch({ type: 'RESET_STATE' });
//     }
//     return await AuthService.logout();
//   }
// );

// export const verifyEmail = createAsyncThunk('auth/verifyEmail', async (token: string) => {
//   return await AuthService.verifyEmail(token);
// });

// export const verifyRecoveryEmail = createAsyncThunk('auth/verifyRecoveryEmail', async (token: string) => {
//   return await AuthService.verifyRecoveryEmail(token);
// });

// export const recoverAccount = createAsyncThunk('auth/recoverAccount', async (email: string) => {
//   return await AuthService.handleRecoverAccount(email);
// });

// export const changeProfilePicture = createAsyncThunk('auth/changeProfilePicture', async (picture: any) => {
//   return await AuthService.changeProfilePicture(picture);
// });

// export const updateProfile = createAsyncThunk('auth/updateProfile', async (data: any) => {
//   return await AuthService.updateProfile(data);
// });

// export const checkResourceAvailablity = createAsyncThunk(
//   'auth/checkResourceAvailablity',
//   async ({ resource, clientId }: any) => {
//     return await AuthService.checkResourceAvailablity(resource, clientId);
//   }
// );

// export const changePassword = createAsyncThunk(
//   'auth/changePassword',
//   async ({ email, password }: { email: string; password: string }) => {
//     return await AuthService.changePassword(email, password);
//   }
// );

// export const acknowledgeCventResult = createAsyncThunk('auth/acknowledgeCventResult', async () => {
//   return await AuthService.acknowledgeCventResult();
// });

// export const changeUserPassword = createAsyncThunk(
//   'auth/changeUserPassword',
//   async (data: any, { rejectWithValue }) => {
//     try {
//       const resp = await AuthService.changeUserPassword(data);
//       return resp;
//     } catch (error: any) {
//       if (error.code === 'NotAuthorizedException') {
//         return rejectWithValue({ error: { message: 'OLD_PASSWORD_INCORRECT' } });
//       }
//       return rejectWithValue(error);
//     }
//   }
// );
