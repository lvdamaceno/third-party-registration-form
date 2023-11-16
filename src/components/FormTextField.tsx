import { FormInput } from './FormInput'
import { FormLabel } from './FormLabel'

interface FormTextFieldProps {
    title: string
    nameId: string
    placeholder: string
    required?: boolean
}

export function FormTextField(props: FormTextFieldProps) {
    if (props.required == true) {
        return (
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <FormLabel title={props.title} required />
                <FormInput
                    nameId={props.nameId}
                    placeholder={props.placeholder}
                    required
                />
            </div>
        )
    } else {
        return (
            <div className="bg-white rounded-2xl border-zinc-300 border p-4 max-w-3xl flex flex-col gap-4">
                <FormLabel title={props.title} />
                <FormInput
                    nameId={props.nameId}
                    placeholder={props.placeholder}
                />
            </div>
        )
    }
}
