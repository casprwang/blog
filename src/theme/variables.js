import amplifier from 'theme/utils/lighten'

const h = `hsla(0, 0%, 0%, 1)`
const p = `hsla(212, 30%, 11%, .95)`
const border = `hsla(212, 30%, 11%, 0.23)`
const background = `hsla(0, 0%, 100%, 1)`
const link = `hsla(192, 100%, 50%, 1)`

export const Colors = {
  h,
  p,
  border: amplifier(p, .08),
  background,
  link
}
