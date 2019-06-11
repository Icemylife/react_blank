/**
 * Class representing the Storage
 */
class Storage {
  /**
   * Creates wrapper around HTML5's native localStorage
   */
  constructor () {
    this.isLocalStorageSupported = typeof window.localStorage !== 'undefined' && window.localStorage !== null

    if (!this.isLocalStorageSupported) {
      console.warn('Local Storage is not supported in your browser')
    }
  }

  /**
   * Set item value
   *
   * @param key {string} - key name
   * @param value {any} - item value
   */
  setItem (key, value) {
    if (!this.isLocalStorageSupported) return

    window.localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : String(value))
  }

  /**
   * Get item by its key name
   *
   * @param key {string} - item key
   * @returns {any} - item value
   */
  getItem (key) {
    if (!this.isLocalStorageSupported) return null

    const result = window.localStorage.getItem(key)
    return result === undefined || result === null ? null : result
  }

  /**
   *  Remove item by its key name
   *
   * @param key {string}
   */
  removeItem (key) {
    if (!this.isLocalStorageSupported) return

    window.localStorage.removeItem(key)
  }

  /**
   *  Remove all items in the storage
   */
  clearStorage () {
    if (!this.isLocalStorageSupported) return

    window.localStorage.clear()
  }
}

export default new Storage()
