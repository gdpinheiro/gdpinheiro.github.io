// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { saveEmail } from '../actions';

// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       password: '',
//       emailIsValid: false,
//       passwordIsValid: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.login = this.login.bind(this);
//   }

//   handleChange({ target }) {
//     this.setState({
//       [target.name]: target.value,
//     });
//     this.verifyEmail();
//     this.verifyPassword();
//   }

//   verifyEmail() {
//     const { email } = this.state;
//     const regex = /\w*@\w*\.\w/;
//     return this.setState({ emailIsValid: regex.test(email) });
//   }

//   verifyPassword() {
//     const { password } = this.state;
//     const MAX_PASSWORD_LENGTH = 4;
//     return this.setState({
//       passwordIsValid: password.length > MAX_PASSWORD_LENGTH,
//     });
//   }

//   login() {
//     const { history, saveUserEmail } = this.props;
//     const { email } = this.state;
//     history.push('/carteira');
//     saveUserEmail(email);
//   }

//   render() {
//     const { emailIsValid, passwordIsValid } = this.state;
//     const loginButton = emailIsValid && passwordIsValid ? (
//       <button type="button" onClick={ this.login }>
//         Entrar
//       </button>
//     ) : (
//       <button type="button" disabled>
//         Entrar
//       </button>
//     );
//     return (
//       <div>
//         <input
//           type="text"
//           data-testid="email-input"
//           name="email"
//           onChange={ this.handleChange }
//         />
//         <input
//           type="text"
//           data-testid="password-input"
//           name="password"
//           onChange={ this.handleChange }
//         />
//         {loginButton}
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   saveUserEmail: (email) => dispatch(saveEmail(email)),
// });

// export default connect(null, mapDispatchToProps)(Login);

// Login.propTypes = {
//   history: PropTypes.objectOf(PropTypes.any).isRequired,
//   saveUserEmail: PropTypes.func.isRequired,
// };
