import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// check
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
