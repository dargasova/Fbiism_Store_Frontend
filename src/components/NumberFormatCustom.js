import React from 'react';
import {PatternFormat} from 'react-number-format';

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const {onChange, name, ...other} = props;

    return (
        <PatternFormat
            {...other}
            getInputRef={ref}
            format="+7 (###) ###-##-##"
            mask="_"
            allowEmptyFormatting
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: name,
                        value: values.value,
                    },
                });
            }}
        />
    );
});

export default NumberFormatCustom;
