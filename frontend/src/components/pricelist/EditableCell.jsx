import { useState, useCallback } from 'react'
import { parseMaybeNumber } from '../../utils/dataHelpers'

/**
 * Editable table cell with auto-save on blur
 * @param {Object} props - Component props
 * @param {string|number} props.value - Current cell value
 * @param {string} props.field - Field name for updates
 * @param {Function} props.onUpdate - Update callback
 * @param {string} props.type - Input type (text/number)
 */
export default function EditableCell({ value, field, onUpdate, type = 'text' }) {
  const [localValue, setLocalValue] = useState(value?.toString() || '')

  const handleBlur = useCallback((e) => {
    const newValue = e.target.value
    const processedValue = type === 'number' ? parseMaybeNumber(newValue) : newValue
    
    if (processedValue !== value) {
      onUpdate(field, processedValue)
    }
  }, [field, onUpdate, value, type])

  const handleChange = useCallback((e) => {
    setLocalValue(e.target.value)
  }, [])

  const getInputProps = () => {
    const baseProps = {
      className: 'input',
      value: localValue,
      onChange: handleChange,
      onBlur: handleBlur
    }

    if (field === 'description') {
      return { ...baseProps, style: { minWidth: 240 } }
    }

    return baseProps
  }

  return <input {...getInputProps()} />
}
