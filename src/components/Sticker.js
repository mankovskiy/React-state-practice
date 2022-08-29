// import PropTypes from 'prop-types';

import { Component } from 'react';

// export const Sticker = ({ sticker: { img, label }, onSelect }) => {
//   return (
//     <div onClick={() => onSelect(label)}>
//       <img src={img} alt={label} width={120} />
//       <p>{label}</p>
//     </div>
//   );
// };

export class Sticker extends Component {
  // state = {
  //   isOpen: false,
  // };

  // toggleLable = () => {
  //   this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  // };

  render() {
    const {
      sticker: { img, label },
      onSelect,
    } = this.props;

    return (
      <div
        onClick={() => {
          onSelect(label);
          // this.toggleLable();
        }}
      >
        <img src={img} alt={label} width={120} />
        {/* {this.state.isOpen && <p>{label}</p>} */}
        <p>{label}</p>
      </div>
    );
  }
}
export class SignUpForm extends Component {
  state = {
    login: '',
  };

  // Отвечает за обновление состояния
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

// ReactDOM.render(
//   <SignUpForm onSubmit={values => console.log(values)} />,
//   document.getElementById('root')
// );

// Sticker.propTypes = {
//   img: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
// };
