import React, { createRef, useState } from 'react';
import Select from 'react-select';

import '../../theme/DropDown.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

  
export const DropDown = ( props ) => {
    const { currency } = props;
    const [selectedOption, setSelectedOption] = useState(null);

    const optionsCurrency = currency.map(value => {
        return {
            value, label: value
        }
    });

    return (
        <div className="selectCurrency" >
            <Select
                defaultValue={optionsCurrency[0].value}
                onChange={setSelectedOption}
                options={optionsCurrency}
                placeholder={optionsCurrency[0].value}
            />
        </div>
    )
}

