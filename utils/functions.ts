export const formatNumber = (value: string | number, decimals: number = 0) => {
  return parseFloat(value.toString())
    .toFixed(decimals)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
