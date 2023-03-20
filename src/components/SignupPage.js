import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
//   const [emailIsValid, setEmailIsValid] = useState(false);
//   const [passwordIsValid, setPasswordIsValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // setEmailIsValid(e.target.checkValidity());
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // setPasswordIsValid(e.target.checkValidity());
  };

  const handleSelect = (e) => {
    setNationality(e.target.value);
  };

  const greetings = (nationality) => {
    if (nationality === 'en') {
      return 'Hello';
    } else if (nationality === 'de') {
      return 'Hallo';
    } else return 'Bonjour';
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isStrongPassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="SignupContainer">
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          className={isValidEmail(email) ? 'valid' : 'invalid'}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          className={isStrongPassword(password) ? 'valid' : 'invalid'}
        />
        <select name="nationality" value={nationality} onChange={handleSelect}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        {nationality && <p>{greetings(nationality)}</p>}

        {email && <p>Your email is {email}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupPage;
