export const isBrowser = typeof window !== 'undefined'

export const copyToClipBoard = (text: string) => {
  isBrowser &&
    window.navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`✅ : ${text}`)
      })
      .catch(() => {
        alert('❌ 다시 시도해주세요.')
      })
}
