import React from 'react';

import MembroFamilia from './MembroFamilia';

export default props => {

    return(
        <div>
            <MembroFamilia nome="Homer Jay" sobrenome={props.sobrenome} />
            <MembroFamilia nome="Marjorie" sobrenome="Bouvier" />
            <MembroFamilia nome="Bartholomew JoJo" sobrenome={props.sobrenome} />
            <MembroFamilia nome="Lisa Marie" sobrenome={props.sobrenome} />
            <MembroFamilia nome="Margareth" {...props} />
        </div>
    )
}