import { Required } from './Required'

const defaultRequired = true

interface LabelProps {
    title: string
    required?: boolean
}

export function Label(props: LabelProps) {
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
