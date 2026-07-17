"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CopyTextProps = {
  value: string
  className?: string
  textClassName?: string
}

export function CopyText({ value, className, textClassName }: CopyTextProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)

      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={cn(
        "group flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lg shadow-black/5 transition-colors hover:bg-muted/40",
        className
      )}
    >
      <p className={cn("truncate text-lg text-blue-400", textClassName)}>{value}</p>

      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy text"}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
    </div>
  )
}
