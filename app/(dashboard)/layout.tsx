import { ReactNode } from "react"

type Tprops = {
    children: ReactNode
}

export default function Dashboardlayout({ children }: Tprops) {
    return (
        <section>
            {children}
        </section>
    )
}