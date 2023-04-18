import { renderHook, act } from '@testing-library/react-hooks'
import { useAuthStore } from '.'

describe('useAuthStore', () => {
  test('should set isAuthenticated to true when setIsAuthenticated is called', () => {
    const { result } = renderHook(() => useAuthStore())

    expect(result.current.isAuthenticated).toBe(false)

    act(() => {
      result.current.setIsAuthenticated(true)
    })

    expect(result.current.isAuthenticated).toBe(true)
  })
})
