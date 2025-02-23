import * as React from "react"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({  ...props }, ref) => {
  return (
    <textarea
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-relaxed focus:outline-primary"
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
