import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"

export type CardProps = React.ComponentPropsWithoutRef<"div">

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
    />
  )
}

export type CardContentProps = React.ComponentPropsWithoutRef<"div">

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div {...props} className={cn("p-4", className)}>
      {children}
    </div>
  )
}
