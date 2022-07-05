import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Characters from '../componets/Characters';

function RoutesMain() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Characters></Characters>} />
            <Route path="/characters" element={<Characters></Characters>} />
        </Routes>
        </BrowserRouter>
    );
}
export default RoutesMain;
