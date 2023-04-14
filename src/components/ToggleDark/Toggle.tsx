import React from 'react'
import { useDarkMode } from '../../hooks/useDarkMode'
import { FaSun, FaMoon } from "react-icons/fa";

export const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        <div className="block dark:bg-gray-600 bg-gray-300 w-14 h-8 rounded-full"></div>
        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        <div className="moon-icon absolute left-1 top-1 flex items-center justify-center h-6 w-6">
          <FaMoon className={`text-gray-800 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        </div>
        <div className="sun-icon absolute right-1 top-1 flex items-center justify-center h-6 w-6">
          <FaSun className={`text-yellow-500 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
    </label>
  )
}