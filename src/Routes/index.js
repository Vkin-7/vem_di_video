import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home'
import CadastroVideo from '../Pages/Cadastro/Video'
import Erro from '../Pages/Erro'
import CadastroCategoria from '../Pages/Cadastro/Categoria';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cadastro/video' component={CadastroVideo}/>
                <Route path='/cadastro/categoria' component={CadastroCategoria}/>
                <Route component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;