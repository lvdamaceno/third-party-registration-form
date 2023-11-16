import { Required } from './Required'

interface LabelProps {
    title: string
    required?: boolean
}

export function FormLabel(props: LabelProps) {
    if (props.required == true) {
        return (
            <label className="text-base font-bold italic uppercase">
                {props.title} <Required />
            </label>
        )
    } else {
        return (
            <label className="text-base font-bold italic uppercase">
                {props.title}
            </label>
        )
    }
}
