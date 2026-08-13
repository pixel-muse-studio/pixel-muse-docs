export function rewriteKoreanLinks(markdown) {
  return markdown
    .replace(/(\]\()\/ko\//g, '$1/')
    .replace(/(\b(?:href|src)=["'])\/ko\//g, '$1/')
}
