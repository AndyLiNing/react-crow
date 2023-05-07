import './input.styles.scss';

export const InputComponent = ({label, ...otherProps}) => {
    return (
        <div className='group'>
            <input
                autoComplete='on'
                className='form-input'
                {...otherProps}
            />
            { label &&
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}> { label }</label>
            }
        </div>
       )
}
