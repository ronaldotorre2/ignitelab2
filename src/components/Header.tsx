import IgniteLogo from '../assets/logo.png';

export function Header() {
    return (
        <header className="w-full py-2 flex items-center justify-center bg-gray-700 border-b boder-gray-600">
            <img src={ IgniteLogo } alt="ignite-lab" />
        </header>
    )
}