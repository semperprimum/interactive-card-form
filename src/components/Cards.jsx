const Cards = ({formData}) => {
    const formatCardNumber = (cardNumber) => {
        return cardNumber
            ? cardNumber.replace(/(.{4})/g, '$1 ')
            : "0000 0000 0000 0000"
    }

    return (
        <section aria-hidden="true" className="cards-section">
            <div className="card-back">
                <span className="card-back__cvc">{formData?.cvc || '000'}</span>
            </div>
            <div className="card-front">
                <div className="card-front__logo">
                    <svg width="84" height="47" viewBox="0 0 84 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/>
                        <path
                            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                            stroke="#fff"/>
                    </svg>
                </div>
                <div className="card-front__number">
                    {formatCardNumber(formData?.cardNumber)}
                </div>
                <div className="card-front__info">
                    <span>{formData?.cardholderName || 'Jane Appleseed'}</span>
                    <span>
                        {formData?.month || '00'}
                        /
                        {formData?.year || '00'}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Cards;