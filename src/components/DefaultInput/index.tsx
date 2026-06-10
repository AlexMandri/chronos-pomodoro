import type React from "react";

type DefaultInputProps = {
    id: string;
    labelText: string;
    // labelText?: string;
    //interrogação no final do labelText porque é opcional pode ou não o input ter label

} & React.ComponentProps<'input'>;

export function DefaultInput({ id, labelText, type, ...rest }: DefaultInputProps) {
    return (
        <>
            {/* caso o labelText for opcional */}
            {/* 1 - {condição? 'verdadeiro': 'falso'} */}
            {/* 2 - {labelText ? <label htmlFor={id}>{labelText}</label> : ''} */}
            {/* 3 - {labelText && <label htmlFor={id}>{labelText}</label>} */}

            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} {...rest} />
        </>
    );
}