import "./styles/App.scss";
import Cards from "./components/Cards.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import {useState} from "react";
import Complete from "./components/Complete.jsx";
import Attribution from "./components/Attribution.jsx";

export default function App() {
    const [isFormValid, setIsFormValid] = useState(false)
    const [formData, setFormData] = useState({
        cardholderName: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: ""
    })
    const updateFormData = (key, value) => {
        setFormData({...formData, [key]: value});
    }
    const resetFormData = () => {
        setFormData({
            cardholderName: "",
            cardNumber: "",
            month: "",
            year: "",
            cvc: ""
        })
    }
    return (
        <div>
            <main className="fade-in">
                <h1 className="sr-only">Card Details Form</h1>
                <Cards formData={formData}/>
                {isFormValid
                    ? <Complete resetFormData={resetFormData} setIsFormValid={setIsFormValid}/>
                    : <CheckoutForm setIsFormValid={setIsFormValid} onInputData={updateFormData}/>}
            </main>
            <Attribution />
        </div>

    )
}