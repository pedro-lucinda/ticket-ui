export const useRouter = jest.fn(() => ({
  push: (path: string) => console.log('Router push:', path),
}))

export const usePathname = () => '/'
