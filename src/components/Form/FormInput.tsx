interface FormInputProps {
    nameId: string
    placeholder: string
    required?: boolean
}

export function FormInput(props: FormInputProps) {
    if (props.required == true) {
        return (
            <input
                className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                name={props.nameId}
                id={props.nameId}
                placeholder={props.placeholder}
                required
            />
        )
    } else {
        return (
            <input
                className="text-sm outline-0 border-b border-zinc-300 focus:border-red-500"
                name={props.nameId}
                id={props.nameId}
                placeholder={props.placeholder}
            />
        )
    }
}
