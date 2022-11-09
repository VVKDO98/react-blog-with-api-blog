import React from 'react';

const Menu = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>Homepage</li>
                    <li>About</li>
                    <li>Categories</li>
                    <li>Pages</li>
                </ul>
            </div>
            <div>
                <img src="./assets/img/logo.png" alt="Logo NoteBook" />
            </div>
            <div>
                <ul>
                    <li><img src="./assets/img/search.png" alt="" /></li>
                    <li><img src="./assets/img/create.png" alt="" /></li>
                    <li>Contact</li>
                    <li>
                        <select name="langue">
                            <option value="en">En</option>
                            <option value="fr">Fr</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;