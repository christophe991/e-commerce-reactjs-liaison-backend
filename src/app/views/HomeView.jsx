import React from 'react';


import { ROLE_ADMIN } from './../shared/constants/rolesConstant';
import { URL_ADMIN_HOME } from './../shared/constants/urls/urlConstants';
import { hasRole } from './../shared/services/accountServices';

const HomeView = ({ history }) => {
    return (
        <div>
            {/* <p className="text-primary font-extrabold">HOME</p>

            {hasRole(ROLE_ADMIN) && (
                <button
                    className="btn btn-primary"
                    onClick={() => history.push(URL_ADMIN_HOME)}
                >
                    Admin
                </button>
            )} */}
            <h2 className='title text-center'>Produits en stock</h2>
            <div class="gallery" id='carousel'>
                <div class="gallery-container">
                    <img class="gallery-item gallery-item-1" src="src/app/assets/images/im1.jpg" data-index="1" />
                    <img class="gallery-item gallery-item-2" src="src/app/assets/images/im2.jpg" data-index="2" />
                    <img class="gallery-item gallery-item-3" src="src/app/assets/images/im3.jpg" data-index="3" />
                    <img class="gallery-item gallery-item-4" src="src/app/assets/images/im4.jpg" data-index="4" />
                    <img class="gallery-item gallery-item-5" src="src/app/assets/images/im5.jpg" data-index="5" />
                    <img class="gallery-item gallery-item-6" src="src/app/assets/images/im6.jpg" data-index="5" />
                    <img class="gallery-item gallery-item-7" src="src/app/assets/images/im7.jpg" data-index="5" />
                    <img class="gallery-item gallery-item-8" src="src/app/assets/images/im8.jpg" data-index="5" />
                    <img class="gallery-item gallery-item-9" src="src/app/assets/images/im9.jpg" data-index="5" />
                </div>
                <div class="gallery-controls"></div>
            </div>




        </div>
    );
};

export default HomeView;
