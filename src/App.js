import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/header.js';
import Footer from './components/footer.js';
import CartModal from './components/cart/cartModal.js';

import Home from './pages/home.js';
import Goods from './pages/goods.js';
import Register from './pages/register.js';
import Login from './pages/login.js';

import About from './pages/info/about.js';
import Blog from './pages/info/blog.js';
import Careers from './pages/info/careers.js';
import Faq from './pages/info/faq.js';
import Contacts from './pages/info/contacts.js';

const API = "http://api.willberries";
const HOST = "http://localhost:3000/";

const goodsAPI = `${API}/goods`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: [],
      value: '',
      category: '',
      itemName: '',
      cart: [],
      error: '',
      warning: '',
      success: '',
    }
  }

  componentDidMount() {
    this.getData(this.state.value, this.state.category);
    this.initEventListeners();
  }

  getData = (value, category) => {
    window.scrollTo(0,0);
    fetch(goodsAPI).then((res) => res.json()).then((data) => {
      const categoryGoods = category ? data.filter((item) => item[category] === value) : data;
      this.setState({goods: categoryGoods, value: value, category: category});
    });
  }

  searchData(itemName = '') {
    window.scrollTo(0,0);
    fetch(goodsAPI).then((res) => res.json()).then((data) => {
        const searchedGoods = itemName !== '' ? data.filter(good => good.name.toLowerCase().includes(itemName.toLowerCase())) : data;
        this.setState({goods: searchedGoods});
      }
    );
  }

  initEventListeners() {
    /* Search by category */
    const links = document.querySelectorAll('.navigation-link');

    links.forEach(link => {
      link.onclick = () => {
        const linkValue = link.textContent;
        const category = link.dataset.field;
        this.setState({
          value: linkValue,
          category: category,
        }, () => this.getData(this.state.value, this.state.category));
      }
    });

    /* Search by input field */
    const input = document.querySelector('.search-block > input');
    const searchBtn = document.querySelector('.search-block > a');

    searchBtn.addEventListener('click', () => {
      this.setState({
        itemName: input.value,
      }, () => this.searchData(input.value))
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header HOST={HOST} cart={this.state.cart}/>
            <Routes>
              <Route exact path='/' element={
                <Home 
                  getData={this.getData} API={API} 
                  category = {this.state.category} 
                  goods = {this.state.goods} App={this}
                />}
              />
              <Route path='/goods' element={
                <Goods 
                  API={API} category = {this.state.value} 
                  goods = {this.state.goods} App={this}/>}
                />
              <Route path='/register' element={<Register App={this} API={API}/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/careers' element={<Careers/>}/>
              <Route path='/faq' element={<Faq/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
          <Footer/>
          <CartModal App={this} API={API} cart={this.state.cart}/>
        </Router>
      </React.Fragment>
    );
  } 
}

export default App;
