
import * as React from 'react'
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ButtonSizeDropdownProps {
  initialSize?: ButtonSize;
  onChange?: (size: ButtonSize) => void;
}

const buttonSizes = ['default', 'sm', 'lg', 'icon'] as const
type ButtonSize = typeof buttonSizes[number]

export function ButtonSizeDropdown({ initialSize = 'default', onChange }: ButtonSizeDropdownProps)  {
  console.log('initialsize',initialSize);
  const [selectedSize, setSelectedSize] = React.useState<ButtonSize>(initialSize)
  const handleBtnSizeChange=(size:ButtonSize)=>{
    setSelectedSize(size)
    onChange(size)

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          Button Size: {selectedSize}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        {buttonSizes.map((size) => (
          <DropdownMenuItem
            key={size}
            onSelect={() => handleBtnSizeChange(size)}
          >
            {size}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

