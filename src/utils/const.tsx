export const delay = (m: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, m)
  })
}
