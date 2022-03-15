import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State({
  name: 'formstate',
  defaults: {
    RegForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {},
    },
  },
})
@Injectable()
export class SignUpFormState {}
