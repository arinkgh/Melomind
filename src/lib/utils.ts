import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// merges Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}