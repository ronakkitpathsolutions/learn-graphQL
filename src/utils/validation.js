import { errorMessage } from "./constant/constantData"
import { emailRegex } from "./regex"

export const customValidation = (name, value) => {
    switch (name) {
        case 'name':
        case 'comment':
            if(!value || value.trim() === ""){
                return errorMessage['requiredMessage'][name]
            }else return ""
        case 'email':
            if(!value || value.trim() === ""){
                return errorMessage['requiredMessage'][name]
            }else if(!emailRegex.test(value)){
                return errorMessage['invalidMessage'][name]
            }else return ""
        default: return ""
    }
}
