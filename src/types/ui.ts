import { FunctionalComponent } from 'vue'

type optionsObject = {
  [key: string]: string
}

type colorObject = {
  [key: string]: string | undefined
  primary?: string
  secondary?: string
  transparent?: string
  danger?: string
  black?: string
  blue?: string
  gray?: string
  purple?: string
  pink?: string
  orange?: string
  green?: string
  slate?: string
  zinc?: string
  neutral?: string
  stone?: string
  amber?: string
  yellow?: string
  lime?: string
  emerald?: string
  tal?: string
  cyan?: string
  sky?: string
  indigo?: string
  violet?: string
  fuchsia?: string
  rose?: string
}

type sizeObject = {
  [key: string]: string | undefined
  xs?: string
  sm: string
  md: string
  lg?: string
  xl?: string
  square?: string
}

type iconObject = {
  [key: string]: FunctionalComponent
}

export { optionsObject, colorObject, sizeObject, iconObject }
