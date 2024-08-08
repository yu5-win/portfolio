import React from 'react';

type Props = {
    onScrollToHome: () => void;
    onScrollToPortfolio: () => void;
    onScrollToContact: () => void;
}

const NavBar: React.FC<Props> = ({ onScrollToHome, onScrollToPortfolio, onScrollToContact }) => {
    return (
        <nav>
            <ul style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', listStyleType: 'none', padding:'0', margin: '0' }}>
                <li>
                    <button onClick={onScrollToHome}>Home</button>
                </li>
                <div style={{ display: 'flex', gap: '20px'}}>
                    <li>
                        <button onClick={onScrollToPortfolio}>Portfolio</button>
                    </li>
                    <li>
                        <button onClick={onScrollToContact}>Contact</button>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;