import { ThemeSwitcher } from './theme-switcher'
import { Avatar, AvatarImage } from './ui/avatar'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Avatar className="size-8 border-2 border-sky-500">
        <AvatarImage src="https://github.com/souorichard.png" />
      </Avatar>

      <ThemeSwitcher />
    </header>
  )
}
