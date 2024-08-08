import React from 'react';

type Props = {
    onScrollToHome: () => void;
    onScrollToPortfolio: () => void;
    onScrollToContact: () => void;
}

const NavBar: React.FC<Props> = ({ onScrollToHome, onScrollToPortfolio, onScrollToContact }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', height: '80px', backgroundColor: 'gray', alignItems: 'center', padding: '0 20px', cursor: 'pointer' }}>
            <ul style={{ display: 'flex', gap: '20px', listStyleType: 'none', padding:'0', margin: '0' }}>
                <li>
                    <div onClick={onScrollToHome} style={{fontSize: '50px'}}>Home</div>
                </li>
            </ul>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px', fontSize: '30px'}}>
                <li>
                    <div onClick={onScrollToPortfolio}>Portfolio</div>
                </li>
                <li>
                    <div onClick={onScrollToContact}>Contact</div>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;