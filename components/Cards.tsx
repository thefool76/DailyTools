'use client'

import { Button } from "./ui/button"
import Link from "next/link"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const Cards = () => {
    return (
        <div className="grid grid-cols-3 gap-7 mx-5">
            <Card>
                <CardHeader>
                    <CardTitle className="font-bold text-xl">Click Counter 👆✨</CardTitle>
                    <CardDescription>Click-o-Meter: Tally laughs, eye rolls, and life's quirky twists in seconds. Tap, laugh, repeat!</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button asChild><Link href="/counters">Try now</Link></Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-bold text-xl">GitGiggles Stats Explorer 🛠️</CardTitle>
                    <CardDescription>Laugh your way through GitHub stats! GitGiggles - where your commits get a standing ovation! 😄📈</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button asChild><Link href="/gitGiggles">Try now</Link></Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-bold text-xl">Coming soon! 😴</CardTitle>
                    <CardDescription>Please wait 🙇‍♂️</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-bold text-xl">Coming soon! 😴</CardTitle>
                    <CardDescription>Please wait 🙇‍♂️</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-bold text-xl">Coming soon! 😴</CardTitle>
                    <CardDescription>Please wait 🙇‍♂️</CardDescription>
                </CardHeader>
            </Card>

        </div>
    )
}

export default Cards