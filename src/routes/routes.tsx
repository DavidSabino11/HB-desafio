import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Characters from '../componets/Characters';
import Comics from '../componets/Comics'

const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<Characters></Characters>} />
        <Route path='/characters' element={<Characters></Characters>} />
        <Route path='/comics' element={<Comics></Comics>}/>
    </Routes>
);
export default RoutesMain;