'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const counters = () => {
  const [count, setCount] = useState(0);

   const increaseCounter = () => {
    (setCount(count + 1));
  }

  const decreaseCounter = () => {
      if (count > 0) {
        setCount(count - 1)
      }  
  }

  return (
    <div className="flex justify-center">
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-center">
          Click Counter 🖱️
        </CardTitle>
        <CardDescription >
          Click-o-Meter: Tally laughs, eye rolls, and life's quirky twists in seconds. Tap, laugh, repeat!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-8xl text-center my-3">{count}</p>
        <div className="flex justify-center space-x-4">
        <Button onClick={increaseCounter} className="text-sm">Click Me! 😇</Button>
        <Button onClick={decreaseCounter} className="text-sm">Click Me! 😈</Button>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default counters