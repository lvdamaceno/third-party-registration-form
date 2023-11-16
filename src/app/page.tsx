import { Header } from '@/components/Header'
import { Form } from '@/components/Form'

export default function Home() {
    return (
        <div className=" bg-rose-100 flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4 mt-16 mb-16">
                <Header />
                <Form />
            </div>
        </div>
    )
}
