import { SearchBar } from 'react-native-elements';
import React from 'react';
import styles from './styles';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Pesquisar..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={ styles.containerSearch2}
        inputContainerStyle={{backgroundColor:'#EBEBEB'}}
        placeholderTextColor={'#AAAAAA'}
        round
        searchIcon = {false}
      />
    );
  }
}