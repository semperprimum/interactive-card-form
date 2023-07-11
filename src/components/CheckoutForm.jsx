import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

const CheckoutForm = ({onInputData, setIsFormValid}) => {
    const initialValues = {
        cardholderName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: ""
    }
    const onSubmit = () => {
        setIsFormValid(true);
    }
    const validationSchema = Yup.object({
        cardholderName: Yup.string().required("Can't be blank").matches(/^[aA-zZ\s]+$/, "Wrong format, alphabets only"),
        cardNumber: Yup.string().required("Can't be blank").matches(/^[0-9]+$/, "Wrong format, numbers only").min(16, "Must be exactly 16 numbers").max(16, "Must be exactly 16 digits"),
        month: Yup.number().required("Can't be blank").label("Month").min(1).max(12).typeError("Wrong format, numbers only"),
        year: Yup.string().required("Can't be blank").matches(/^[0-9]+$/, "Wrong format, numbers only").min(2, "Must be exactly 2 digits").max(2, "Must be exactly 2 digits"),
        cvc: Yup.string().required("Can't be blank").matches(/^[0-9]+$/, "Wrong format, numbers only").min(3, "Must be at least 3 digits").max(4)
    });

    return (
        <section className="form-wrapper">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props) => (
                    <Form>
                        <div className="input-control">
                            <label className="input-control__label" htmlFor="cardholderName">cardholder name</label>
                            <Field className="input-control__input" value={props.values.cardholderName}
                                   onChange={(e) => {
                                       onInputData(e.currentTarget.name, e.currentTarget.value);
                                       props.handleChange(e)
                                   }}
                                   name="cardholderName" id="cardholderName" placeholder="e.g. Jane Appleseed"/>
                                <ErrorMessage className="input-control__error" name="cardholderName" component="span"/>
                        </div>
                        <div className="input-control">
                            <label className="input-control__label" htmlFor="cardNumber">card number</label>
                            <Field value={props.values.cardNumber}
                                   onChange={(e) => {
                                       onInputData(e.currentTarget.name, e.currentTarget.value);
                                       props.handleChange(e)
                                   }} className="input-control__input" name="cardNumber" id="cardNumber" maxLength="16"
                                   placeholder="e.g. 1234 5678 9123 0000"/>
                                <ErrorMessage className="input-control__error" name="cardNumber" component="span"/>
                        </div>
                        <div className="input-grid">
                            <label className="input-control__label" htmlFor="month" aria-hidden="true">exp. date
                                (mm/yy)</label>
                            <label className="input-control__label" htmlFor="cvc" aria-hidden="true">cvc</label>
                            <div className="input-grid__group">
                                <div className="input-control">
                                    <Field value={props.values.month}
                                           onChange={(e) => {
                                               onInputData(e.currentTarget.name, e.currentTarget.value);
                                               props.handleChange(e)
                                           }} className="input-control__input" aria-label="card expiration month"
                                           name="month" id="month" maxLength="2" placeholder="MM"/>
                                        <ErrorMessage className="input-control__error" name="month" component="span"/>
                                </div>
                                <div className="input-control">
                                    <Field value={props.values.year}
                                           onChange={(e) => {
                                               onInputData(e.currentTarget.name, e.currentTarget.value);
                                               props.handleChange(e)
                                           }} className="input-control__input" aria-label="card expiration year"
                                           name="year" id="year" maxLength="2" placeholder="YY"/>
                                        <ErrorMessage className="input-control__error" name="year" component="span"/>
                                </div>
                            </div>
                            <div className="input-control">
                                <Field value={props.values.cvc}
                                       onChange={(e) => {
                                           onInputData(e.currentTarget.name, e.currentTarget.value);
                                           props.handleChange(e)
                                       }} className="input-control__input" aria-label="card cvc" name="cvc" id="cvc"
                                       maxLength="4" placeholder="e.g. 123"/>
                                    <ErrorMessage className="input-control__error" name="cvc" component="span"/>
                            </div>
                        </div>
                        <button type="submit" className="btn">Confirm</button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default CheckoutForm;