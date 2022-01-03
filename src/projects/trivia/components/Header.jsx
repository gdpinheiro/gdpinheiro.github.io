// import md5 from 'crypto-js/md5';
// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// class Header extends React.Component {
//   render() {
//     const { name, email } = this.props;

//     const emailMD5 = md5(email).toString();

//     if (!JSON.parse(localStorage.getItem('state'))) {
//       const playerData = {
//         player: {
//           assertions: 0,
//           score: 0,
//         },
//       };
//       localStorage.setItem('state', JSON.stringify(playerData));
//     }

//     const {
//       player: { score },
//     } = JSON.parse(localStorage.getItem('state'));

//     return (
//       <div className='header_principal'>
//         <img
//           src={`https://www.gravatar.com/avatar/${emailMD5}`}
//           alt='Imagem de perfil'
//           data-testid='header-profile-picture'
//         />
//         <p className='header__identification' data-testid='header-player-name'>
//           Usuário: {name}
//         </p>
//         <h3 data-testid='header-score'>{score}</h3>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   email: state.loginReducer.email,
//   name: state.loginReducer.name,
// });

// Header.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
// };

// export default connect(mapStateToProps)(Header);
