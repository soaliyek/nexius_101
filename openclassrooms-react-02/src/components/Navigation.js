import React, {useState} from 'react';
import '../styles/navigation.css';

function Navigation() {
    const [canSeeNavigation, setCanSeeNavigation] = useState(true);

    return (
        <div className="nx-navigation-container">
            <button onClick={() => setCanSeeNavigation(!canSeeNavigation)}>
                Toggle
            </button>
            {canSeeNavigation ? (
                <nav className="nx-navigation">
                    <span><a href="#home">Home</a></span>
                    <span><a href="#about">About</a></span>
                    <span><a href="#contact">Contact</a></span>
                </nav>
            ) : null}
        </div>
    );
}

export default Navigation;

/**
 *  onClick={() => setCanSeeNavigation(!canSeeNavigation)}
 * {canSeeNavigation ? 'Hide Navigation' : 'Show Navigation'}
 * {canSeeNavigation ? (
            <nav className="navigation">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        ) : null}
 */