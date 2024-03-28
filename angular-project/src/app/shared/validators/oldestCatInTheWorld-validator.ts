import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function WorldRecordCatCheck(value? : string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        if(value) return null

        if (!control.value) return { oldestCat: true }

        return Number(control.value) < 38 ? null : { oldestCat: true }
    }
}
