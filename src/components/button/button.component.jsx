import './button.styles.scss';

const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export const ButtonComponent = ({children, buttonType, ...otherProps}) => {
    const btnType = BUTTON_TYPES[buttonType] ?? '';
    return (
        <button className={`button-container ${btnType}`}
                {...otherProps}
        >
        { children }
        </button>
    );
}