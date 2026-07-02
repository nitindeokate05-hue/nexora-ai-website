import type * as React from "react"
import { X } from "lucide-react"
import { NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import type { NavItem } from "@/types"
import { cn } from "@/utils"

type SidebarProps = React.ComponentProps<"aside"> & {
  items?: readonly NavItem[]
  brand?: React.ReactNode
  footer?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

function Sidebar({
  items = [],
  brand,
  footer,
  isOpen = true,
  onClose,
  className,
  ...props
}: SidebarProps) {
  return (
    <aside
      data-slot="sidebar"
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-sidebar-border bg-sidebar/94 text-sidebar-foreground shadow-elevated backdrop-blur-xl transition-transform duration-300 md:static md:translate-x-0 md:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className,
      )}
      {...props}
    >
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {brand}
        {onClose ? (
          <Button
            aria-label="Close sidebar"
            className="md:hidden"
            onClick={onClose}
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <X className="size-4" />
          </Button>
        ) : null}
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Sidebar">
        {items.map((item) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
              )
            }
            key={item.href}
            to={item.href}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      {footer ? <div className="border-t border-sidebar-border p-4">{footer}</div> : null}
    </aside>
  )
}

export { Sidebar }
