import './Header.scss';
import { useEffect, useRef } from 'react';

type Props = {};

function Header({}: Props) {
    const flyoutRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClick = () => {
            flyoutRef.current?.classList.toggle('active');
        };

        if (flyoutRef.current) {
            flyoutRef.current.addEventListener('click', handleClick);
        }

        return () => {
            if (flyoutRef.current) {
                flyoutRef.current.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return (
        <header>
            <div className="logo">
                <label className="oyo-header">oyo</label>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Members</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Feedback</a>
                    </li>
                </ul>
            </nav>
            <button type="button" ref={flyoutRef} className="flyout">
                <div className="bar"></div>
            </button>
        </header>
    );
}

export default Header;
