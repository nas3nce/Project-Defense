import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"


export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value

        

        if (!value) {
            return  { emailInvalid:  true }
        }

        const regex = new RegExp('^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$')

        return regex.test(value) ? null : { emailInvalid: true }
    }
}