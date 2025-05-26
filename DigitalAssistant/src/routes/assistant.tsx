import { createFileRoute } from '@tanstack/react-router'
import Assistant from "../pages/Assistant/Assistant.tsx";

export const Route = createFileRoute('/assistant')({
    component: AssistantRoute,
})

function AssistantRoute() {
    return <Assistant />
}