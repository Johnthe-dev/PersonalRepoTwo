import { createFileRoute } from '@tanstack/react-router'
import { AboutMe } from "../pages/AboutMe";

export const Route = createFileRoute('/about')({
    component: AboutMeRoute,
})

function AboutMeRoute() {
    return <AboutMe />
}