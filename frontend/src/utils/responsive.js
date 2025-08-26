import { useState, useEffect } from 'react'

/**
 * Responsive utilities for breakpoint management
 */

/**
 * Get current screen breakpoint based on window width
 * @returns {string} Current breakpoint identifier
 */
export const getBreakpoint = () => {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  if (width < 540) return 'phone-portrait'
  if (width < 820) return 'phone-landscape'
  if (width < 1100) return 'tablet'
  return 'desktop'
}

/**
 * Get visible columns for current breakpoint
 * @param {string} breakpoint - Current breakpoint
 * @returns {Array} Array of column identifiers
 */
export const getResponsiveColumns = (breakpoint) => {
  const columnSets = {
    desktop: ['arrow', 'article_no', 'name', 'in_price', 'price', 'unit', 'in_stock', 'description', 'actions'],
    tablet: ['arrow', 'article_no', 'name', 'price', 'unit', 'in_stock', 'actions'],
    'phone-landscape': ['arrow', 'name', 'price', 'unit', 'actions'],
    'phone-portrait': ['arrow', 'name', 'price', 'actions']
  }
  
  return columnSets[breakpoint] || columnSets.desktop
}

/**
 * Hook for responsive breakpoint detection
 * @returns {string} Current breakpoint
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint())
  
  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return breakpoint
}
