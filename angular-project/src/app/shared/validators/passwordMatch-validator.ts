import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        if (!control.value) return { passwordsDontMatch: true }

        const passwordControl = control.value.password;
        const rePassControl = control.value.rePassword;   
     
        return passwordControl === rePassControl ? null : { passwordsDontMatch: true }

    }
}
