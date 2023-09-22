import './Product.css';

function Product() {
    return (
        <div >
            <div class="circle-outer">
                <ul class="circle">
                    <li>
                        <a href="#">
                            <div class="Pro content first">
                                <p>Pain Relivers</p> 
                                <div class="icon">
                                    <div class="fa fa-plus-square"></div>
                                </div>
                                 {/* <div className='Cards firstCard'/> */}
                            </div>
                            <div class="background">
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="Pro content second">
                                <p>Products & Servies</p>
                                <div class="icon">
                                    <div class="fa fa-dot-circle-o"></div>
                                </div>
                                 {/* <div className='Cards secondCard'/> */}
                            </div>
                            <div class="background"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="Pro content third">
                                <p>Gain Creator</p>
                                <div class="icon">
                                    <div class="fa fa-line-chart"></div>
                                </div>
                                {/* <div className='Cards thirdCard'/> */}
                            </div>
                            <div class="background"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Product;