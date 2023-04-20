export const useRouter = () => ({
  push: (path: string) => console.log('Router push:', path),
})

export const usePathname = () => '/'
