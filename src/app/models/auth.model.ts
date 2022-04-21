export type SignupSteps =
  | 'email'
  | 'account_type'
  | 'location'
  | 'verify'
  | 'password';

export type ForgotSteps = 'prompt' | 'email' | 'newpassword';

export interface SignUpParam {
  fullName: string;
  username: string;
  email: string;
  password: string;
  isSeller: boolean;
  location: string;
  phone: string;
}
