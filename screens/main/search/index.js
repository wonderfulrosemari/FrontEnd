import { connect } from 'react-redux';
import Search from './Search';

const mapStateToProps = (state) => {
  searchOptions: state.productsReducer.search.searchOptions;
};

export default connect(mapStateToProps)(Search);
