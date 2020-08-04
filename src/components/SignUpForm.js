import React from "react";

const SignUpForm = ({
  name,
  setName,
  email,
  setEmail,
  password1,
  setPassword1,
  password2,
  setPassword2,
  handleSubmit,
}) => {
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword1Change = (event) => {
    const value = event.target.value;
    setPassword1(value);
  };
  const handlePassword2Change = (event) => {
    const value = event.target.value;
    setPassword2(value);
  };
  return (
    <div className="signUp_Form">
      <h2 style={{ textAlign: "center" }}>Créez un compte</h2>
      <div className="line"> </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>Pseudo *</div>
          <input type="text" value={name} onChange={handleNameChange} />
          <div>Adresse email *</div>
          <input type="email" value={email} onChange={handleEmailChange} />
          <div className="passwords">
            <div>
              <div>Mot de passe *</div>
              <input
                type="password"
                value={password1}
                onChange={handlePassword1Change}
              />
            </div>
            <div>
              <div>Confirmer le mot de passe *</div>
              <input
                type="password"
                value={password2}
                onChange={handlePassword2Change}
              />
            </div>
          </div>

          <br />
          <div className="checkbox" style={{ display: "flex" }}>
            <input type="checkbox" />
            <div>
              « J’accepte les &nbsp;
              <span style={{ color: " #22a0fb" }}>
                Conditions Générales de Vente &nbsp;
              </span>
              et les &nbsp;
              <span style={{ color: " #22a0fb" }}>
                Conditions Générales d’Utilisation &nbsp;
              </span>
              »
            </div>
          </div>

          <button className="create_account" type="submit">
            Créer mon Compte Personnel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
