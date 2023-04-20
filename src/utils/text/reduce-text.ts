// function that reduce the text size and add "..." if it's too long
export const reduceText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'
  }
  return text
}
