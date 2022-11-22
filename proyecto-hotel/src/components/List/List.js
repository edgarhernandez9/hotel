import React, { createRef, useState } from 'react';
import Select from 'react-select';

import '../../theme/List.css';
export const List = ( props ) => {
    const { data, english } = props;
    const [selectedOption, setSelectedOption] = useState(null);

    const filterData = data.filter(datos => !datos.main && !data.number );

    const dataNumber = filterData.map(value => {
        
        return {
            label: `${value.name} ${value.number}`, value: value.name
        }
    });

    return (
        <div className="selectContact" >
            <Select
                defaultValue={english ? 'Rest of the world' : 'Resto del mundo'}
                onChange={setSelectedOption}
                options={dataNumber}
                placeholder={english ? 'Rest of the world' : 'Resto del mundo'}
            />
        </div>
    )
}