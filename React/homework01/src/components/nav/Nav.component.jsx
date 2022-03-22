import Item from '../item-li/item.component'

const Nav = () => {
  return (
    <nav>
      <ul>
        <Item text={'Home'}/>
        <Item text={'Sobre'}/>
        <Item text={'Contato'}/>
      </ul>
    </nav>
  );
}

export default Nav;