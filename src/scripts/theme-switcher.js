export default function themeSwitch() {

    document.addEventListener('DOMContentLoaded', function () {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Find the button with the class "theme-switcher" and add a click event listener
        const themeSwitcherButton = document.querySelector('.theme-switcher');
        if (themeSwitcherButton) {
            themeSwitcherButton.addEventListener('click', toggleTheme);
        }

        function toggleTheme() {
            const isDarkMode = document.documentElement.classList.contains('dark');

            // Toggle the theme
            if (isDarkMode) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        }
    });

}
