const Complete = ({setIsFormValid, resetFormData}) => {
    return (
        <section className="complete-section">
            <svg className="complete-section__icon" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" strokeWidth="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stopColor="#6348FE"/><stop offset="1" stopColor="#610595"/></linearGradient></defs></svg>
            <h1 className="complete-section__heading">thank you!</h1>
            <p className="complete-section__body">We&apos;ve added your card details</p>
            <button onClick={() => {
                resetFormData();
                setIsFormValid(false);
            }} className="btn">Continue</button>
        </section>
    );
};

export default Complete;