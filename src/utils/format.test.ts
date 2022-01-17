import * as format from './format'

describe('utils/format', () => {
  describe('formatDate', () => {
    it('should format date in format DD/MM/YYYY in parse full date', () => {
      const date = '10101900'
      const expectFormat = '10/10/1900'

      expect(format.formatDate(date)).toBe(expectFormat)
    })

    it('should return same value when date is full', () => {
      const expectValue = '10/10/1900'
      expect(format.formatDate(expectValue)).toBe(expectValue)
    })

    it('shoud format DD in insert only day', () => {
      const expectValue = '10'
      expect(format.formatDate(expectValue)).toBe(expectValue)
    })

    it('shoud format DD/MM in insert only day and month', () => {
      const value = '1010'
      const expectValue = '10/10'
      expect(format.formatDate(value)).toBe(expectValue)
    })
  })
})
