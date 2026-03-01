import { useEffect, useState } from "react"
import { Warp } from "@paper-design/shaders-react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 -z-10 bg-[#00042e]" />
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Warp
        style={{ width: "100%", height: "100%" }}
        color1="hsla(220, 60%, 6%, 1)"
        color2="hsla(38, 80%, 25%, 1)"
        color3="hsla(30, 70%, 40%, 1)"
        scale={0.5}
        rotation={0}
        speed={0.12}
        proportion={0.35}
        softness={1}
        distortion={0.18}
        swirl={0.5}
        swirlIterations={8}
        shapeScale={0.1}
        shape={0}
      />
    </div>
  )
}