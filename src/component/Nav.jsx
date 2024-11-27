import React from 'react'

const Nav = () => {
  return (
    <div  class="header" id="home">
       <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-tb-12 col-xs-12">
                    <div class="logo">
                        <img src="logo.png" alt=""/>
                    </div>
                </div>
            </div>

            <div class="menu">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-tb-6 col-xs-12">
                        <div class="icon">
                            <a href="#">
                                <img src="facebook.png" alt=""/>
                            </a>
                            <a href="#">
                                <img src="twitter.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-tb-6 col-xs-12">
                        <div class="menu-right">
                            <label for="check"><i class="fa fa-bars"></i></label>
                            <input type="checkbox" name="" id="check"/>
                           
                            <ul>
                                <li>
                                    <a href="#home" class="menu-a">home</a>
                                </li>
                                <li>
                                    <a href="#work">work</a>
                                </li>
                                <li>
                                    <a href="#hire">hire me</a>
                                </li>
                                <li>
                                    <a href="#">blog</a>
                                </li>

                            </ul>
    
                        </div>
                    </div>
                </div>
            </div>
            </div>

    </div>
  )
}

export default Nav
