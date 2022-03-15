import { AbstractControl } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirm = control.get('cPassword');

  if (password && confirm && password.value !== confirm.value) {
    confirm.setErrors({ misMatch: true });
    return { misMatch: true };
  } else return null;
}
