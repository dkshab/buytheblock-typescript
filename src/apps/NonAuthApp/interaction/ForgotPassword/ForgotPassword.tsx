import * as React from "react";


type ForgotPasswordType = {
    [key: string]: string;
};

const initialState = {
    email: "",

};

const ForgotPassword = () => {
    const [state, setState] = React.useState<ForgotPasswordType>(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const { email } = state;

        if (email) {
            console.log(email);

            clear()
        }
        else {
            console.log("Empty brother man");
        }


    }

    const clear = () => {
        setState(initialState)
    }
    return (
        <div className="ForgotPassword" >
            <h2>
                Reset your password
            </h2>
            <div className="ForgotPassword__content">
                <p>
                    Enter your email address below, and we'll email instructions for
                    setting a new one.
                </p>
                <form onSubmit={handleSubmit} className="ForgotPassword__content__form">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            aria-label="email"
                            placeholder="email address"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="buttons">
                        <button type="submit" >Reset Password</button>
                    </div>
                </form>
                <p>
                    Please contact <span className="support" >support@buytheblock.co.za</span> if you have any
                    trouble resetting your password.
                </p>
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
        </div>
    )

}

export default ForgotPassword