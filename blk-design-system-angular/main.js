(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jakes\Fusion_Tree\Development\BlogApp\src\main.ts */"zUnb");


/***/ }),

/***/ "00il":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/profilepage/profilepage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"container align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"profile-title text-left\">Mike Scheinder</h1>\n          <h5 class=\"text-on-back\">01</h5>\n          <p class=\"profile-description\">\n            Offices parties lasting outward nothing age few resolve. Impression\n            to discretion understood to we interested he excellence. Him\n            remarkably use projection collecting. Going about eat forty world\n            has round miles.\n          </p>\n          <div class=\"btn-wrapper profile pt-3\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-dribbble btn-round\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img\n                class=\"img-center img-fluid rounded-circle\"\n                src=\"assets/img/mike.jpg\"\n              />\n\n              <h4 class=\"title\">Transactions</h4>\n            </div>\n            <div class=\"card-body\">\n              <tabset\n                class=\"nav-tabs-danger justify-content-center tab-subcategories\"\n              >\n                <tab heading=\"Wallet\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">COIN</th>\n                          <th class=\"header\">AMOUNT</th>\n                          <th class=\"header\">VALUE</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>BTC</td>\n                          <td>7.342</td>\n                          <td>48,870.75 USD</td>\n                        </tr>\n                        <tr>\n                          <td>ETH</td>\n                          <td>30.737</td>\n                          <td>64,53.30 USD</td>\n                        </tr>\n                        <tr>\n                          <td>XRP</td>\n                          <td>19.242</td>\n                          <td>18,354.96 USD</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n                <tab heading=\"Send\">\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Pay to </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"e.g. 1Nasd92348hU984353hfid\"\n                          type=\"text\"\n                        />\n\n                        <span class=\"form-text\">\n                          Please enter a valid address.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Amount </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"1.587\"\n                          type=\"text\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    class=\"btn btn-simple btn-danger btn-icon btn-round float-right\"\n                    type=\"submit\"\n                  >\n                    <i class=\"tim-icons icon-send\"> </i>\n                  </button>\n                </tab>\n                <tab heading=\"News\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">Latest Crypto News</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>The Daily: Nexo to Pay on Stable...</td>\n                        </tr>\n                        <tr>\n                          <td>Venezuela Begins Public of Nation...</td>\n                        </tr>\n                        <tr>\n                          <td>PR: BitCanna â Dutch Blockchain...</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-md-6\">\n          <div class=\"row justify-content-between align-items-center\">\n            <carousel [showIndicators]=\"true\">\n              <slide>\n                <img\n                  alt=\"First slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/denys.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Big City Life, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Second slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/fabien-bazanegue.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Somewhere Beyond, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Third slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/mark-finn.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Stocks, United States</h5>\n                </div>\n              </slide>\n            </carousel>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <h1 class=\"profile-title text-left\">Projects</h1>\n          <h5 class=\"text-on-back\">02</h5>\n          <p class=\"profile-description text-left\">\n            An artist of considerable range, Ryan â the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy â writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <div class=\"btn-wrapper pt-3\">\n            <button\n              class=\"btn btn-simple btn-danger mr-1\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-book-bookmark\"> </i> Bookmark\n            </button>\n            <button class=\"btn btn-simple btn-info\" href=\"javascript:void(0)\">\n              <i class=\"tim-icons icon-bulb-63\"> </i> Check it!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card card-plain\">\n            <div class=\"card-header\">\n              <h1 class=\"profile-title text-left\">Contact</h1>\n              <h5 class=\"text-on-back\">03</h5>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Your Name </label>\n                      <input class=\"form-control\" type=\"text\" value=\"Mike\" />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Email address </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"mike@email.com\"\n                        type=\"email\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Phone </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"001-12321345\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Company </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"CreativeTim\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label> Message </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"Hello there!\"\n                        type=\"text\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <button\n                  class=\"btn btn-danger btn-round float-right\"\n                  placement=\"right\"\n                  type=\"submit\"\n                >\n                  Send text\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 ml-auto\">\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-square-pin\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Find us at the office</h4>\n              <p>\n                Bld Mihail Kogalniceanu, nr. 8, <br />\n\n                7652 Bucharest, <br />\n\n                Romania\n              </p>\n            </div>\n          </div>\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-mobile\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Give us a ring</h4>\n              <p>\n                Michael Jordan <br />\n\n                +40 762 321 762 <br />\n\n                Mon - Fri, 8:00-22:00\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "8jZd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/landingpage/landingpage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\n\n    <div class=\"content-center\">\n      <div\n        class=\"row row-grid justify-content-between align-items-center text-left\"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n          <div class=\"btn-wrapper mb-3\">\n            <p class=\"category text-success d-inline mr-1\">From 9.99%/mo</p>\n            <a\n              class=\"btn btn-success btn-link btn-sm\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-minimal-right\"> </i>\n            </a>\n          </div>\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-5\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid\"\n            src=\"assets/img/etherum.png\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\n\n    <img class=\"path3\" src=\"assets/img/path2.png\" />\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Carefully crafted components</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Amazing page examples</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Super friendly support team</h6></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/bitcoin.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Light Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">50 messages</li>\n                  <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/etherum.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Dark Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-success\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">150 messages</li>\n                  <li class=\"list-group-item\">1000 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-success btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/ripp.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Bright Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-info\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">350 messages</li>\n                  <li class=\"list-group-item\">10K emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-info btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F149":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profilepage.component.html */ "00il");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent() {
        this.isCollapsed = true;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.ctorParameters = function () { return []; };
    ProfilepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-profilepage",
            template: _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "IfWR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landingpage.component.html */ "8jZd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
        this.isCollapsed = true;
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            }
        });
    };
    LandingpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    };
    LandingpageComponent.ctorParameters = function () { return []; };
    LandingpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-landingpage",
            template: _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-ps": "TJgH",
	"./ar-ps.js": "TJgH",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku-kmr": "dVgr",
	"./ku-kmr.js": "dVgr",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, location, document) {
        this.renderer = renderer;
        this.location = location;
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-danger");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-danger");
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onWindowScroll(event);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    AppComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "V/Tm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        placement=\"bottom\"\n        [routerLink]=\"['/home']\"\n        target=\"_blank\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> FTB• </span> Fusion Tree Blog\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> FTB• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"dropdown nav-item\" dropdown>\n          <a\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            href=\"javascript:void(0)\"\n          >\n            <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i> Getting started\n          </a>\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a\n              class=\"dropdown-item\"\n              href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview\"\n            >\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\n            </a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link btn btn-default d-none d-lg-block\"\n            href=\"javascript:void(0)\"\n            (click)=\"scrollToDownload(target)\"\n          >\n            <i class=\"tim-icons icon-cloud-download-93\"> </i> Download\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <div class=\"squares square1\"></div>\n    <div class=\"squares square2\"></div>\n    <div class=\"squares square3\"></div>\n    <div class=\"squares square4\"></div>\n    <div class=\"squares square5\"></div>\n    <div class=\"squares square6\"></div>\n    <div class=\"squares square7\"></div>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\">FTB•</h1>\n        <h3>\n          A beautiful Design System for Bootstrap 4 and Angular. It's Free and\n          Open Source.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-basic\" id=\"basic-elements\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <h2 class=\"title\">Basic Elements</h2>\n        <h3>Buttons</h3>\n        <p class=\"category\">Pick your style</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary mr-1\" type=\"button\">Default</button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              Round\n            </button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              <i class=\"tim-icons icon-heart-2\"> </i> With Icon\n            </button>\n            <button\n              class=\"btn btn-primary btn-icon btn-round mr-1\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-heart-2\"> </i>\n            </button>\n            <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">\n              Simple\n            </button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your size</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary btn-sm mr-1\">Small</button>\n            <button class=\"btn btn-primary mr-1\">Regular</button>\n            <button class=\"btn btn-primary btn-lg\">Large</button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your color</p>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button class=\"btn mr-1\">Default</button>\n            <button class=\"btn btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-info mr-1\">Info</button>\n            <button class=\"btn btn-success mr-1\">Success</button>\n            <button class=\"btn btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-danger mr-1\">Danger</button>\n            <button class=\"btn btn-neutral\">Neutral</button>\n          </div>\n        </div>\n        <br />\n\n        <h3>Links</h3>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <button class=\"btn btn-link mr-1\">Default</button>\n            <button class=\"btn btn-link btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-link btn-info mr-1\">Info</button>\n            <button class=\"btn btn-link btn-success mr-1\">Success</button>\n            <button class=\"btn btn-link btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-link btn-danger\">Danger</button>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div id=\"inputs\">\n          <h3>Inputs</h3>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Regular\"\n                  type=\"text\"\n                  value=\"\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-success\">\n                <input\n                  class=\"form-control form-control-success\"\n                  type=\"text\"\n                  value=\"Success\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-danger\">\n                <input\n                  class=\"form-control form-control-danger\"\n                  type=\"email\"\n                  value=\"Error Input\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div\n                class=\"input-group\"\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\n              >\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-user\"> </i>\n                  </span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Left Font Awesome Icon\"\n                  type=\"text\"\n                  (focus)=\"focus = true\"\n                  (blur)=\"focus = false\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"input-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Right Nucleo Icon\"\n                  type=\"text\"\n                />\n\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"tim-icons icon-lock-circle\"> </i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div class=\"row\" id=\"checkRadios\">\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" />\n\n                <span class=\"form-check-sign\"> </span> Unchecked\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Checked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Unchecked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Checked\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option1\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option2\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is on\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option3\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option4\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is on\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Toggle Buttons</p>\n            <bSwitch\n              [switch-on-color]=\"'danger'\"\n              [switch-off-color]=\"'danger'\"\n              [switch-off-text]=\"' '\"\n              [switch-on-text]=\"' '\"\n            >\n            </bSwitch>\n            <br />\n            <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\">\n            </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Sliders</p>\n            <div class=\"slider\" id=\"sliderRegular\"></div>\n            <br />\n\n            <div class=\"slider slider-danger\" id=\"sliderDouble\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-navbars\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>Menu</h4>\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar\"\n                >\n                  <ul class=\"navbar-nav\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        aria-expanded=\"false\"\n                        aria-haspopup=\"true\"\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <p>Dropdown</p>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>Menu with Icons</h4>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Icons </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-icons\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar-icons\"\n                >\n                  <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-send\"> </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-single-02\">\n                        </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <i\n                          aria-hidden=\"true\"\n                          class=\"tim-icons icon-settings-gear-63\"\n                        >\n                        </i>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu dropdown-menu-right\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-header\"> Dropdown header </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Separated link\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          One more separated link\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n        <h3 class=\"title mb-3\">Navigation</h3>\n      </div>\n      <div id=\"navbar\">\n        <div class=\"navigation-example\">\n          <nav class=\"navbar navbar-expand-lg bg-primary\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Primary color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-primary\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-primary\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i> Discover\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i> Profile\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-info\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Info Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-info\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-info\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Discover </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Profile </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Settings </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-success\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Success Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-success\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-success\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-warning\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Warning Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-warning\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-warning\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-google-plus\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-danger\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Danger Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-danger\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-danger\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Share\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Tweet\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-pinterest\"> </i> Pin\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Transparent\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-transparent\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-transparent\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Facebook\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Twitter\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i> Instagram\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-tabs\">\n      <div class=\"container\">\n        <div class=\"title\"><h3 class=\"mb-3\">Navigation Tabs</h3></div>\n        <div class=\"row\">\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">\n                With icons\n              </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-spaceship\"> </i> Profile\n                    </ng-template>\n                    <p>\n                      Collaboratively administrate empowered markets via\n                      plug-and-play networks. Dynamically procrastinate B2C\n                      users after installed base benefits. <br />\n\n                      <br />\n\n                      Dramatically visualize customer directed convergence\n                      without revolutionary ROI.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </ng-template>\n                    <p>\n                      Completely synergize resource taxing relationships via\n                      premier niche markets. Professionally cultivate one-to-one\n                      customer service with robust ideas. <br />\n\n                      <br />\n\n                      Dynamically innovate resource-leveling customer service\n                      for state of the art customer service.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-bag-16\"> </i> Options\n                    </ng-template>\n                    <p>\n                      Efficiently unleash cross-media information without\n                      cross-media value. Quickly maximize timely deliverables\n                      for real-time schemas. <br />\n\n                      <br />\n\n                      Dramatically maintain clicks-and-mortar solutions without\n                      functional solutions.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\"> With text </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab heading=\"Profile\">\n                    <p>\n                      These cases are perfectly simple and easy to distinguish.\n                      In a free hour, when our power of choice is untrammelled\n                      and when nothing prevents our being able to do what we\n                      like best, every pleasure is to be welcomed and every pain\n                      avoided. <br />\n\n                      But in certain circumstances and owing to the claims of\n                      duty or the obligations of business it will frequently\n                      occur that pleasures\n                    </p>\n                  </tab>\n                  <tab heading=\"Settings\">\n                    <p>\n                      I will be the leader of a company that ends up being worth\n                      billions of dollars, because I got the answers. I\n                      understand culture. I am the nucleus. I think thatâs a\n                      responsibility that I have, to push possibilities, to show\n                      people, this is the level that things could be at. I think\n                      thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at.\n                    </p>\n                  </tab>\n                  <tab heading=\"Options\">\n                    <p>\n                      I think thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at. So when you get something that has the\n                      name Kanye West on it, itâs supposed to be pushing the\n                      furthest possibilities. I will be the leader of a company\n                      that ends up being worth billions of dollars, because I\n                      got the answers. I understand culture. I am the nucleus.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-pagination\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-4\">Progress Bars</h3>\n            <div class=\"progress-container\">\n              <span class=\"progress-badge\"> Default </span>\n              <progressbar [value]=\"25\">\n                <span class=\"progress-value\"> 25% </span>\n              </progressbar>\n            </div>\n            <div class=\"progress-container progress-danger\">\n              <span class=\"progress-badge\"> Danger </span>\n              <progressbar class=\"progress-bar-danger\" [value]=\"60\">\n                <span class=\"progress-value\"> 60% </span>\n              </progressbar>\n            </div>\n            <br />\n\n            <h3 class=\"mb-5\">Navigation Pills</h3>\n            <tabset type=\"pills\" class=\"nav-pills-danger nav-pills-icons\">\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-atom\"> </i> Home\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-chat-33\"> </i> Messages\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                </ng-template>\n              </tab>\n            </tabset>\n          </div>\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-5\">Pagination</h3>\n            <pagination\n              class=\"pagination-danger\"\n              [(ngModel)]=\"pagination1\"\n              [totalItems]=\"30\"\n            >\n            </pagination>\n            <pagination\n              class=\"pagination-danger\"\n              [boundaryLinks]=\"true\"\n              [totalItems]=\"45\"\n              [ngModel]=\"pagination\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n            <br />\n\n            <h3 class=\"mb-5\">Labels</h3>\n            <span class=\"badge badge-default mr-1\"> Default </span>\n            <span class=\"badge badge-primary mr-1\"> Primary </span>\n            <span class=\"badge badge-success mr-1\"> Success </span>\n            <span class=\"badge badge-info mr-1\"> Info </span>\n            <span class=\"badge badge-warning mr-1\"> Warning </span>\n            <span class=\"badge badge-danger mr-1\"> Danger </span>\n            <span class=\"badge badge-neutral\"> Neutral </span>\n          </div>\n        </div>\n        <br />\n      </div>\n    </div>\n    <div class=\"section section-notifications\" id=\"notifications\">\n      <div class=\"container\">\n        <div class=\"space\"></div>\n        <h3>Notifications</h3>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'primary alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Congrats! - </b> This is a regular notification made with\n            \".alert-primary\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'info alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Heads up! - </b> This is a regular notification made with\n            \".alert-info\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'success alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Well done! - </b> This is a regular notification made with\n            \".alert-success\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'warning alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Warning! - </b> This is a regular notification made with\n            \".alert-warning\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'danger alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Oh snap! - </b> This is a regular notification made with\n            \".alert-danger\"\n          </span>\n        </alert>\n      </div>\n    </div>\n    <div class=\"section section-typo\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"typography-line\">\n                <h1><span> Header 1 </span> The Life of FTB• Design System</h1>\n              </div>\n              <div class=\"typography-line\">\n                <h2><span> Header 2 </span> The Life of FTB• Design System</h2>\n              </div>\n              <div class=\"typography-line\">\n                <h3><span> Header 3 </span> The Life of FTB• Design System</h3>\n              </div>\n              <div class=\"typography-line\">\n                <h4><span> Header 4 </span> The Life of FTB• Design System</h4>\n              </div>\n              <div class=\"typography-line\">\n                <h5><span> Header 5 </span> The Life of FTB• Design System</h5>\n              </div>\n              <div class=\"typography-line\">\n                <h6><span> Header 6 </span> The Life of FTB• Design System</h6>\n              </div>\n              <div class=\"typography-line\">\n                <p>\n                  <span> Paragraph </span> I will be the leader of a company\n                  that ends up being worth billions of dollars, because I got\n                  the answers. I understand culture. I am the nucleus. I think\n                  thatâs a responsibility that I have, to push possibilities, to\n                  show people, this is the level that things could be at.\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Quote </span>\n                <blockquote>\n                  <p class=\"blockquote blockquote-danger\">\n                    \"I will be the leader of a company that ends up being worth\n                    billions of dollars, because I got the answers. I understand\n                    culture. I am the nucleus. I think thatâs a responsibility\n                    that I have, to push possibilities, to show people, this is\n                    the level that things could be at.\" <br />\n\n                    <br />\n\n                    <small> - Noaa </small>\n                  </p>\n                </blockquote>\n              </div>\n              <div class=\"typography-line\">\n                <span> Muted Text </span>\n                <p class=\"text-muted\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Primary Text </span>\n                <p class=\"text-primary\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Info Text </span>\n                <p class=\"text-info\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Success Text </span>\n                <p class=\"text-success\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Warning Text </span>\n                <p class=\"text-warning\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Danger Text </span>\n                <p class=\"text-danger\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <h2>\n                  <span> Small Tag </span> Header with small subtitle <br />\n\n                  <small> Use \"small\" tag for the headers </small>\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n          <h3 class=\"mb-5\">Images</h3>\n          <div class=\"row\">\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Image\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                src=\"assets/img/ryan.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Image\n              </small>\n              <img\n                alt=\"Circle image\"\n                class=\"img-fluid rounded-circle shadow\"\n                src=\"assets/img/james.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Raised\n              </small>\n              <img\n                alt=\"Raised image\"\n                class=\"img-fluid rounded shadow-lg\"\n                src=\"assets/img/lora.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Raised\n              </small>\n              <img\n                alt=\"Raised circle image\"\n                class=\"img-fluid rounded-circle shadow-lg\"\n                src=\"assets/img/mike.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title mb-5\">Javascript components</h3>\n        <h4 class=\"mb-5\">Modal</h4>\n        <div class=\"row\" id=\"modals\">\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-danger\"\n              data-target=\"#myModal\"\n              (click)=\"myModal.show()\"\n            >\n              Launch Modal\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-warning\"\n              data-target=\"#myModal1\"\n              (click)=\"myModal1.show()\"\n            >\n              Launch Modal Mini\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-success\"\n              data-target=\"#myModal2\"\n              (click)=\"myModal2.show()\"\n            >\n              Launch Modal Form\n            </button>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <h4 class=\"mb-5 mt-3\">Datepicker</h4>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"datepicker-container\">\n              <div class=\"form-group\">\n                <input\n                  bsDatepicker\n                  class=\"form-control\"\n                  data-datepicker-color=\"danger\"\n                  [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\"\n                  [bsValue]=\"date\"\n                  id=\"datepicker\"\n                  type=\"text\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Popovers</h4>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"top\"\n              popoverTitle=\"Popover on top\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"right\"\n              popoverTitle=\"Popover on right\"\n              popover=\"Here will be some very useful information about his popover.<br>\n              Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"bottom\"\n              popoverTitle=\"Popover on bottom\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-sm\"\n              container=\"body\"\n              placement=\"left\"\n              popoverTitle=\"Popover on left\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On left\n            </button>\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Tooltips</h4>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              data-delay=\"100\"\n              placement=\"left\"\n              tooltip=\"Tooltip on left\"\n              type=\"button\"\n            >\n              On left\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"top\"\n              tooltip=\"Tooltip on top\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"bottom\"\n              tooltip=\"Tooltip on bottom\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"right\"\n              tooltip=\"Tooltip on right\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <div class=\"clearfix\"></div>\n            <br />\n\n            <br />\n          </div>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"title\"><h3>Carousel</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-5 mb-5 mb-lg-0\">\n              <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a\n                class=\"btn btn-warning mt-4\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n              >\n                See all components\n              </a>\n            </div>\n            <div class=\"col-lg-6\">\n              <carousel [showIndicators]=\"false\">\n                <slide>\n                  <img\n                    alt=\"First slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/denys.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Second slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/fabien-bazanegue.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Third slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/mark-finn.jpg\"\n                  />\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-nucleo-icons\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-md-12\">\n            <h2 class=\"title\">Nucleo Icons</h2>\n            <h4 class=\"description\">\n              FTB• Design System PRO comes with 100 custom icons made by our\n              friends from NucleoApp. The official package contains over 2.100\n              thin icons which are looking great in combination with FTB• Design\n              System PRO Make sure you check all of them and use those that you\n              like the most.\n            </h4>\n            <div class=\"btn-wrapper\">\n              <a\n                class=\"btn btn-danger btn-round mr-1\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n                target=\"_blank\"\n              >\n                View Demo Icons\n              </a>\n              <a\n                class=\"btn btn-danger btn-simple btn-round btn-lg\"\n                href=\"https://nucleoapp.com/?ref=1712\"\n                target=\"_blank\"\n              >\n                View All Icons\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"blur-hover\">\n          <a\n            href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n            class=\"text-danger\"\n          >\n            <div class=\"icons-container blur-item on-screen mt-5\">\n              <i class=\"icon tim-icons icon-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\n              <i class=\"icon tim-icons icon-send\"> </i>\n              <i class=\"icon tim-icons icon-mobile\"> </i>\n              <i class=\"icon tim-icons icon-wifi\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\n              <i class=\"icon tim-icons icon-gift-2\"> </i>\n              <i class=\"icon tim-icons icon-tap-02\"> </i>\n              <i class=\"icon tim-icons icon-wallet-43\"> </i>\n            </div>\n            <span class=\"blur-hidden h5 text-danger\">\n              Eplore all the 21.000+ Nucleo Icons\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-signup\">\n      <div class=\"container\">\n        <div class=\"squares square-1\"></div>\n        <div class=\"squares square-2\"></div>\n        <div class=\"squares square-3\"></div>\n        <div class=\"squares square-4\"></div>\n        <div class=\"row row-grid justify-content-between align-items-center\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"display-3 text-white\">\n              A beautiful Black Design\n              <span class=\"text-white\"> completed with examples </span>\n            </h3>\n            <p class=\"text-white mb-3\">\n              The Design System comes with four pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go. More importantly, looking at them will give you a picture\n              of what you can built with this powerful Bootstrap 4 Design\n              System.\n            </p>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\n                Register Page\n              </a>\n            </div>\n          </div>\n          <div class=\"col-lg-6 mb-lg-auto\">\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-examples\" data-background-color=\"black\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"space-50\"></div>\n      <div class=\"container text-center\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/landing']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/landing-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/landing']\"\n            >\n              View Landing Page\n            </a>\n          </div>\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/profile']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/profile-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/profile']\"\n            >\n              View Profile Page\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-download\" data-background-color=\"black\" #target>\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <h2 class=\"title\">\n              Do you love this Bootstrap 4 Angular Design System?\n            </h2>\n            <h4 class=\"description\">\n              Cause if you do, it can be yours for FREE. Hit the button below to\n              navigate to Creative Tim where you can find the design system in\n              HTML format. Start a new project or give an old Bootstrap project\n              a new look!\n            </h4>\n          </div>\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <a\n              class=\"btn btn-danger btn-round btn-lg\"\n              href=\"https://www.creative-tim.com/product/blk-design-system-angular\"\n              role=\"button\"\n            >\n              Download Angular\n            </a>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <div class=\"row row-grid align-items-center my-md\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"text-danger font-weight-light mb-2\">\n              Thank you for supporting us!\n            </h3>\n            <h4 class=\"mb-0 font-weight-light\">\n              Let's get in touch on any of these platforms.\n            </h4>\n          </div>\n          <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round btn-lg mr-1\"\n              id=\"twitter\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round btn-lg mr-1\"\n              id=\"facebook\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-github btn-round btn-lg\"\n              href=\"https://github.com/creativetimofficial\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-github\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade\"\n      #myModal=\"bs-modal\"\n      id=\"myModal\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n            <h4 class=\"title title-up\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics, a\n              large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            </p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\n            <button\n              class=\"btn btn-danger\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-mini modal-danger modal-mini\"\n      #myModal1=\"bs-modal\"\n      id=\"myModal1\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal1.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"modal-profile\">\n              <i class=\"tim-icons icon-single-02\"> </i>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <p>Always have an access to your profile</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\n            <button\n              class=\"btn btn-link btn-neutral\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal1.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-black\"\n      #myModal2=\"bs-modal\"\n      id=\"myModal2\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal2.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"text-muted text-center ml-auto mr-auto\">\n              <h3 class=\"mb-0\">Sign in with</h3>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"btn-wrapper text-center\">\n              <a\n                class=\"btn btn-neutral btn-icon mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <img src=\"assets/img/github.svg\" />\n              </a>\n              <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <img src=\"assets/img/google.svg\" />\n              </a>\n            </div>\n            <div class=\"text-center text-muted mb-4 mt-3\">\n              <small> Or sign in with credentials </small>\n            </div>\n            <form role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-key-25\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-check mt-3\">\n                <label class=\"form-check-label\">\n                  <input\n                    checked=\"checked\"\n                    class=\"form-check-input\"\n                    type=\"checkbox\"\n                  />\n\n                  <span class=\"form-check-sign\"> </span> Remember me!\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary my-4\" type=\"button\">\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">FTB•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "Vs9a":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/registerpage/registerpage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                      (focus)=\"focus = true\"\n                      (blur)=\"focus = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                      (focus)=\"focus1 = true\"\n                      (blur)=\"focus1 = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                      (focus)=\"focus2 = true\"\n                      (blur)=\"focus2 = false\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                // IndexComponent,
                // ProfilepageComponent,
                // RegisterpageComponent,
                // LandingpageComponent
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                // BsDropdownModule.forRoot(),
                // ProgressbarModule.forRoot(),
                // TooltipModule.forRoot(),
                // CollapseModule.forRoot(),
                // TabsModule.forRoot(),
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"]
                // PaginationModule.forRoot(),
                // AlertModule.forRoot(),
                // BsDatepickerModule.forRoot(),
                // CarouselModule.forRoot(),
                // ModalModule.forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index/index.component */ "sqmE");
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ "IfWR");






















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot()
            ],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_21__["LandingpageComponent"]
            ],
            exports: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_21__["LandingpageComponent"]
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "r5Xs":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerpage.component.html */ "Vs9a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent() {
        this.isCollapsed = true;
    }
    RegisterpageComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    RegisterpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        this.onMouseMove(event);
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterpageComponent.ctorParameters = function () { return []; };
    RegisterpageComponent.propDecorators = {
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    RegisterpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-registerpage",
            template: _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "V/Tm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);




var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        var slider = document.getElementById("sliderRegular");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider, {
            start: 40,
            connect: false,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("sliderDouble");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IndexComponent.ctorParameters = function () { return []; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.component */ "sqmE");
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ "IfWR");









var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: "profile", component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__["ProfilepageComponent"] },
    { path: "register", component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__["RegisterpageComponent"] },
    { path: "landing", component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__["LandingpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map