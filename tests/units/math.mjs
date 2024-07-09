export function sum (nb1, nb2) {
  return nb1 + nb2
}

export function minus (nb1, nb2) {
  return nb1 - nb2
}

export function multiply (nb1, nb2) {
  return nb1 * nb2
}

export function divide (nb1, nb2) {
  if(nb2 !== 0) return nb1 / nb2
  throw new Error('Division par 0 impossible!')
}