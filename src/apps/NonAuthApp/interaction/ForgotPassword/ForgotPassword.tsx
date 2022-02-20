import * as React from "react";

const ForgotPassword = () => {
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
                <form className="ForgotPassword__content__form">
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"
                            aria-label="email"
                            placeholder="email address" />
                    </div>
                    <div className="buttons">
                        <button>Reset Password</button>
                    </div>
                </form> <p>
                    Please contact <span className="support" >support@buytheblock.co.za</span> if you have any
                    trouble resetting your password.
                </p>
            </div>
        </div>
    )

}

export default ForgotPassword