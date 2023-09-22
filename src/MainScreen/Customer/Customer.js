import './Customer.css';

function Customer() {
    return (
        <div >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>
            <div class="circle-outer-class">

                <ul class="circle">
                    <li>
                        <a href="#">
                            <div class="content first">
                                <p>Gains</p>
                                <div class="icon">
                                    <div class="fa fa-thumbs-up "></div>
                                </div>
                            </div>
                            <div class="background"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="content second">
                                <p>Customer Jobs</p>
                                <div class="icon">
                                    <div class="fa fa-search"></div>
                                </div>
                            </div>
                            <div class="background"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="content third">
                                <p>Pains</p>
                                <div class="icon">
                                    <div class="fa fa-thumbs-down"></div>
                                </div>
                            </div>
                            <div class="background"></div>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Customer;