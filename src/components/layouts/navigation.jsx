import { useEffect, useState } from 'react'
import navigation from '@data/navigation.json'

export default function Navigation({ pageUrl }) {
    const [isSticky, setIsSticky] = useState(false)

    const handleScroll = () => {
        setIsSticky(window.scrollY >= 70)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = event => {
        const navbar = $('#main__navigation__bar')
        navbar.toggleClass('bg-nav')
    }

    return (
        <header>
            <nav
                className={`navbar navbar-expand-lg position-fixed w-100 zindex-dropdown${isSticky ? " sticky-nav" : ""
                    }`}
                id="main__navigation__bar"
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={navigation.logo} alt="Nav-Logo" />
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleClick}
                    >
                        <span className="navbar-toggler-default">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    x1="3.5"
                                    y1="5.5"
                                    x2="21.5"
                                    y2="5.5"
                                    stroke="#292D32"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <line
                                    x1="4.5"
                                    y1="12.5"
                                    x2="21.5"
                                    y2="12.5"
                                    stroke="#292D32"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <line
                                    x1="11.5"
                                    y1="19.5"
                                    x2="21.5"
                                    y2="19.5"
                                    stroke="#292D32"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span className="navbar-toggler-toggled">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.5 6.5L6.5 21.5"
                                    stroke="#404152"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21.5 21.5L6.5 6.5"
                                    stroke="#404152"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    )
}
