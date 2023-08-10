import { StyleSheet, css } from 'aphrodite';
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <div className={css(styles.header)}>
      <img className={css(styles.img)} src={logo} alt='logo' />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    /* font-weight: bold, */
    fontSize: '25px',
    borderBottom: '5px solid rgb(221, 56, 84)',
    color: 'rgb(221, 56, 84)' 
  },

  img: {
    width: '240px',
	  height: '230px'
  }
});

export default Header;
