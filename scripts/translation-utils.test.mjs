import assert from 'node:assert/strict'
import test from 'node:test'
import { rewriteKoreanLinks } from './translation-utils.mjs'

test('rewrites only Korean document links outside protected content', () => {
  const markdown = [
    '[문서](/ko/pmdurability/)',
    '<a href="/ko/guide/">가이드</a>',
    'PMXPROTECTED0000XPM'
  ].join('\n')

  assert.equal(rewriteKoreanLinks(markdown), [
    '[문서](/pmdurability/)',
    '<a href="/guide/">가이드</a>',
    'PMXPROTECTED0000XPM'
  ].join('\n'))
})
