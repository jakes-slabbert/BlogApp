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

/***/ "Gamd":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post-detail/post-detail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"100\" id=\"navbar-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" placement=\"bottom\" [routerLink]=\"['/home']\" target=\"_blank\"\r\n                tooltip=\"Designed and Coded by Creative Tim\">\r\n                <span> FTB• </span> Fusion Tree Blog\r\n            </a>\r\n            <button aria-controls=\"navigation-index\" aria-label=\"Toggle navigation\"\r\n                class=\"navbar-toggler navbar-toggler\" [attr.aria-expanded]=\"!isCollapsed\"\r\n                (click)=\"isCollapsed = !isCollapsed\" id=\"navigation\" type=\"button\">\r\n                <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                <span class=\"navbar-toggler-bar bar3\"> </span>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-collapse justify-content-end\" [collapse]=\"isCollapsed\" id=\"navigation\">\r\n            <div class=\"navbar-collapse-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6 collapse-brand\"><a> FTB• </a></div>\r\n                    <div class=\"col-6 collapse-close text-right\">\r\n                        <button aria-controls=\"navigation-index\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n                            [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"navigation\"\r\n                            type=\"button\">\r\n                            <i class=\"tim-icons icon-simple-remove\"> </i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item p-0\">\r\n                    <a class=\"nav-link\" href=\"https://www.linkedin.com/company/fusion-tree-software/\" placement=\"bottom\"\r\n                        target=\"_blank\" tooltip=\"Follow us on LinkedIn\">\r\n                        <i class=\"fab fa-linkedin\"> </i>\r\n                        <p class=\"d-lg-none d-xl-none\">LinkedIn</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"wrapper\" style=\"margin-top: 5%;\">\r\n    <div class=\"page-header header-filter\" style=\"height: 100%;\" *ngIf=\"currentPost.getValue() != null\">\r\n        <div class=\"container\" style=\"height: 100%;\">\r\n            <div class=\"content-center\" style=\"text-align: left; height: 100%;\">\r\n                <!-- We need the backgound image right under the subtitle. -->\r\n                <h2 style=\"font-weight: 700; margin-top: 2.14em; line-height: 32px;\">{{currentPost.getValue().Title}}</h2>\r\n                <h3 style=\"margin-top: 2.14em; line-height: 32px;\">{{currentPost.getValue().Subtitle}}</h3>\r\n                <img *ngIf=\"currentPost.getValue().PictureUrl != null\" src=\"{{currentPost.getValue().PictureUrl}}\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\" *ngIf=\"currentPost.getValue() != null\">\r\n        <div class=\"container\">\r\n            <div class=\"content-center\" style=\"text-align: left; margin-top: 2.14em;\">\r\n                <p *ngFor=\"let item of currentPost.getValue().Paragraphs\" style=\"font-size: 1.2rem; margin-bottom: 2.14em; line-height: 32px;\">\r\n                    {{item}}\r\n                    <br/>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

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
                element.classList.add("bg-success");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-success");
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
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"100\" id=\"navbar-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-translate\">\r\n      <a class=\"navbar-brand\" placement=\"bottom\" [routerLink]=\"['/home']\" target=\"_blank\"\r\n        tooltip=\"Designed and Coded by Creative Tim\">\r\n        <span> FTB• </span> Fusion Tree Blog\r\n      </a>\r\n      <button aria-controls=\"navigation-index\" aria-label=\"Toggle navigation\" class=\"navbar-toggler navbar-toggler\"\r\n        [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"navigation\" type=\"button\">\r\n        <span class=\"navbar-toggler-bar bar1\"> </span>\r\n        <span class=\"navbar-toggler-bar bar2\"> </span>\r\n        <span class=\"navbar-toggler-bar bar3\"> </span>\r\n      </button>\r\n    </div>\r\n    <div class=\"navbar-collapse justify-content-end\" [collapse]=\"isCollapsed\" id=\"navigation\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\"><a> FTB• </a></div>\r\n          <div class=\"col-6 collapse-close text-right\">\r\n            <button aria-controls=\"navigation-index\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"\r\n              [attr.aria-expanded]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed\" id=\"navigation\" type=\"button\">\r\n              <i class=\"tim-icons icon-simple-remove\"> </i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item p-0\">\r\n          <a class=\"nav-link\" href=\"https://www.linkedin.com/company/fusion-tree-software/\" placement=\"bottom\"\r\n            target=\"_blank\" tooltip=\"Follow us on LinkedIn\">\r\n            <i class=\"fab fa-linkedin\"> </i>\r\n            <p class=\"d-lg-none d-xl-none\">LinkedIn</p>\r\n          </a>\r\n        </li>\r\n        <!-- <li class=\"nav-item p-0\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"https://www.facebook.com/CreativeTim\"\r\n            placement=\"bottom\"\r\n            target=\"_blank\"\r\n            tooltip=\"Like us on Facebook\"\r\n          >\r\n            <i class=\"fab fa-facebook-square\"> </i>\r\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item p-0\">\r\n          <a\r\n            class=\"nav-link\"\r\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\r\n            placement=\"bottom\"\r\n            target=\"_blank\"\r\n            tooltip=\"Follow us on Instagram\"\r\n          >\r\n            <i class=\"fab fa-instagram\"> </i>\r\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"dropdown nav-item\" dropdown>\r\n          <a\r\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\r\n            data-toggle=\"dropdown\"\r\n            dropdownToggle\r\n            href=\"javascript:void(0)\"\r\n          >\r\n            <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i> Getting started\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\r\n            <a\r\n              class=\"dropdown-item\"\r\n              href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview\"\r\n            >\r\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\r\n            </a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\r\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\r\n            </a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\r\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\r\n            </a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\r\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\r\n            </a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a\r\n            class=\"nav-link btn btn-default d-none d-lg-block\"\r\n            href=\"javascript:void(0)\"\r\n            (click)=\"scrollToDownload(target)\"\r\n          >\r\n            <i class=\"tim-icons icon-cloud-download-93\"> </i> Download\r\n          </a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"wrapper\">\r\n  <div class=\"page-header header-filter\">\r\n    <div class=\"squares square1\"></div>\r\n    <div class=\"squares square2\"></div>\r\n    <div class=\"squares square3\"></div>\r\n    <div class=\"squares square4\"></div>\r\n    <div class=\"squares square5\"></div>\r\n    <div class=\"squares square6\"></div>\r\n    <div class=\"squares square7\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"content-center brand\">\r\n        <h1 class=\"h1-seo\">FTB•</h1>\r\n        <h3>\r\n          Welcome to Fusion Tree Blog! We’re your go-to for fresh, fun insights into software development. Dive in,\r\n          enjoy, and let’s make learning a tree-mendous adventure! 🌳\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"section section-md\">\r\n    <section class=\"section\">\r\n      <img class=\"path\" src=\"assets/img/path4.png\" />\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row row-grid justify-content-center\">\r\n          <div class=\"col-md-10 mt-lg-10\">\r\n            <h3>Check out our latest posts here:</h3>\r\n            <div *ngFor=\"let item of posts.getValue()\" class=\"card card-hover mb-4\">\r\n              <a href=\"{{'#/post/' + item.Id}}\" class=\"card-body\" style=\"z-index: 5;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-8 col-md-9\">\r\n                    <div class=\"numbers\">\r\n                      <p class=\"card-title\">{{item.Title}}</p>\r\n                      <p></p>\r\n                      <p class=\"card-category\">{{item.Subtitle}}</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-4 col-md-3 justify-content-center\">\r\n                    <img src=\"{{item.PictureUrl}}\"\r\n                      style=\"max-height: 165px; max-width: 165px; border-radius: 20%; background: linear-gradient(0deg,#ba54f5,#e14eca);\" />\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </section>\r\n\r\n  <!-- <div class=\"main\">\r\n    <div class=\"section section-basic\" id=\"basic-elements\">\r\n      <img class=\"path\" src=\"assets/img/path1.png\" />\r\n\r\n      <div class=\"container\">\r\n        <h2 class=\"title\">Basic Elements</h2>\r\n        <h3>Buttons</h3>\r\n        <p class=\"category\">Pick your style</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10\">\r\n            <button class=\"btn btn-primary mr-1\" type=\"button\">Default</button>\r\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\r\n              Round\r\n            </button>\r\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\r\n              <i class=\"tim-icons icon-heart-2\"> </i> With Icon\r\n            </button>\r\n            <button\r\n              class=\"btn btn-primary btn-icon btn-round mr-1\"\r\n              type=\"button\"\r\n            >\r\n              <i class=\"tim-icons icon-heart-2\"> </i>\r\n            </button>\r\n            <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">\r\n              Simple\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <p class=\"category\">Pick your size</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10\">\r\n            <button class=\"btn btn-primary btn-sm mr-1\">Small</button>\r\n            <button class=\"btn btn-primary mr-1\">Regular</button>\r\n            <button class=\"btn btn-primary btn-lg\">Large</button>\r\n          </div>\r\n        </div>\r\n        <p class=\"category\">Pick your color</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn mr-1\">Default</button>\r\n            <button class=\"btn btn-primary mr-1\">Primary</button>\r\n            <button class=\"btn btn-info mr-1\">Info</button>\r\n            <button class=\"btn btn-success mr-1\">Success</button>\r\n            <button class=\"btn btn-warning mr-1\">Warning</button>\r\n            <button class=\"btn btn-danger mr-1\">Danger</button>\r\n            <button class=\"btn btn-neutral\">Neutral</button>\r\n          </div>\r\n        </div>\r\n        <br />\r\n\r\n        <h3>Links</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8\">\r\n            <button class=\"btn btn-link mr-1\">Default</button>\r\n            <button class=\"btn btn-link btn-primary mr-1\">Primary</button>\r\n            <button class=\"btn btn-link btn-info mr-1\">Info</button>\r\n            <button class=\"btn btn-link btn-success mr-1\">Success</button>\r\n            <button class=\"btn btn-link btn-warning mr-1\">Warning</button>\r\n            <button class=\"btn btn-link btn-danger\">Danger</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"space-70\"></div>\r\n        <div id=\"inputs\">\r\n          <h3>Inputs</h3>\r\n          <p class=\"category\">Form Controls</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"Regular\"\r\n                  type=\"text\"\r\n                  value=\"\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <div class=\"form-group has-success\">\r\n                <input\r\n                  class=\"form-control form-control-success\"\r\n                  type=\"text\"\r\n                  value=\"Success\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <div class=\"form-group has-danger\">\r\n                <input\r\n                  class=\"form-control form-control-danger\"\r\n                  type=\"email\"\r\n                  value=\"Error Input\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <div\r\n                class=\"input-group\"\r\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\r\n              >\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"fa fa-user\"> </i>\r\n                  </span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"Left Font Awesome Icon\"\r\n                  type=\"text\"\r\n                  (focus)=\"focus = true\"\r\n                  (blur)=\"focus = false\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n              <div class=\"input-group\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"Right Nucleo Icon\"\r\n                  type=\"text\"\r\n                />\r\n\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"tim-icons icon-lock-circle\"> </i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"space-70\"></div>\r\n        <div class=\"row\" id=\"checkRadios\">\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Checkboxes</p>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" />\r\n\r\n                <span class=\"form-check-sign\"> </span> Unchecked\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input\r\n                  checked=\"checked\"\r\n                  class=\"form-check-input\"\r\n                  type=\"checkbox\"\r\n                />\r\n\r\n                <span class=\"form-check-sign\"> </span> Checked\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n              <label class=\"form-check-label\">\r\n                <input\r\n                  class=\"form-check-input\"\r\n                  disabled=\"disabled\"\r\n                  type=\"checkbox\"\r\n                />\r\n\r\n                <span class=\"form-check-sign\"> </span> Disabled Unchecked\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n              <label class=\"form-check-label\">\r\n                <input\r\n                  checked=\"checked\"\r\n                  class=\"form-check-input\"\r\n                  disabled=\"disabled\"\r\n                  type=\"checkbox\"\r\n                />\r\n\r\n                <span class=\"form-check-sign\"> </span> Disabled Checked\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Radios</p>\r\n            <div class=\"form-check form-check-radio\">\r\n              <label class=\"form-check-label\">\r\n                <input\r\n                  class=\"form-check-input\"\r\n                  id=\"exampleRadios1\"\r\n                  name=\"exampleRadios\"\r\n                  type=\"radio\"\r\n                  value=\"option1\"\r\n                />\r\n\r\n                <span class=\"form-check-sign\"> </span> Radio is off\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio\">\r\n              <label class=\"form-check-label\">\r\n                <input\r\n                  checked=\"checked\"\r\n                  class=\"form-check-input\"\r\n                  id=\"exampleRadios1\"\r\n                  name=\"exampleRadios\"\r\n                  type=\"radio\"\r\n                  value=\"option2\"\r\n                />\r\n\r\n                <span class=\"form-check-sign\"> </span> Radio is on\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n              <label class=\"form-check-label\">\r\n                <input\r\n                  class=\"form-check-input\"\r\n                  disabled=\"disabled\"\r\n                  id=\"exampleRadios2\"\r\n                  name=\"exampleRadios1\"\r\n                  type=\"radio\"\r\n                  value=\"option3\"\r\n                />\r\n\r\n                <span class=\"form-check-sign\"> </span> Disabled radio is off\r\n              </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n              <label class=\"form-check-label\">\r\n                <input\r\n                  checked=\"checked\"\r\n                  class=\"form-check-input\"\r\n                  disabled=\"disabled\"\r\n                  id=\"exampleRadios2\"\r\n                  name=\"exampleRadios1\"\r\n                  type=\"radio\"\r\n                  value=\"option4\"\r\n                />\r\n\r\n                <span class=\"form-check-sign\"> </span> Disabled radio is on\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Toggle Buttons</p>\r\n            <bSwitch\r\n              [switch-on-color]=\"'danger'\"\r\n              [switch-off-color]=\"'danger'\"\r\n              [switch-off-text]=\"' '\"\r\n              [switch-on-text]=\"' '\"\r\n            >\r\n            </bSwitch>\r\n            <br />\r\n            <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\">\r\n            </bSwitch>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Sliders</p>\r\n            <div class=\"slider\" id=\"sliderRegular\"></div>\r\n            <br />\r\n\r\n            <div class=\"slider slider-danger\" id=\"sliderDouble\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-navbars\">\r\n      <img class=\"path\" src=\"assets/img/path3.png\" />\r\n\r\n      <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h4>Menu</h4>\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n                <div\r\n                  class=\"navbar-collapse\"\r\n                  [isAnimated]=\"true\"\r\n                  [collapse]=\"isCollapsed\"\r\n                  id=\"example-navbar\"\r\n                >\r\n                  <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item active\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <p>Link</p>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <p>Link</p>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item dropdown\" dropdown>\r\n                      <a\r\n                        aria-expanded=\"false\"\r\n                        aria-haspopup=\"true\"\r\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\r\n                        data-toggle=\"dropdown\"\r\n                        dropdownToggle\r\n                        href=\"javascript:void(0)\"\r\n                        id=\"navbarDropdownMenuLink\"\r\n                      >\r\n                        <p>Dropdown</p>\r\n                      </a>\r\n                      <div\r\n                        aria-labelledby=\"navbarDropdownMenuLink\"\r\n                        class=\"dropdown-menu\"\r\n                        *dropdownMenu\r\n                      >\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          Action\r\n                        </a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          Another action\r\n                        </a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          Something else here\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h4>Menu with Icons</h4>\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Icons </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar-icons\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n                <div\r\n                  class=\"navbar-collapse\"\r\n                  [isAnimated]=\"true\"\r\n                  [collapse]=\"isCollapsed\"\r\n                  id=\"example-navbar-icons\"\r\n                >\r\n                  <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-send\"> </i>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-single-02\">\r\n                        </i>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item dropdown\" dropdown>\r\n                      <a\r\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\r\n                        data-toggle=\"dropdown\"\r\n                        dropdownToggle\r\n                        href=\"javascript:void(0)\"\r\n                        id=\"navbarDropdownMenuLink\"\r\n                      >\r\n                        <i\r\n                          aria-hidden=\"true\"\r\n                          class=\"tim-icons icon-settings-gear-63\"\r\n                        >\r\n                        </i>\r\n                      </a>\r\n                      <div\r\n                        aria-labelledby=\"navbarDropdownMenuLink\"\r\n                        class=\"dropdown-menu dropdown-menu-right\"\r\n                        *dropdownMenu\r\n                      >\r\n                        <a class=\"dropdown-header\"> Dropdown header </a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          Action\r\n                        </a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          Another action\r\n                        </a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          Something else here\r\n                        </a>\r\n                        <div class=\"divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          Separated link\r\n                        </a>\r\n                        <div class=\"divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                          One more separated link\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n        <h3 class=\"title mb-3\">Navigation</h3>\r\n      </div>\r\n      <div id=\"navbar\">\r\n        <div class=\"navigation-example\">\r\n          <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n            <div class=\"container\">\r\n              <div class=\"navbar-translate\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                  Primary color\r\n                </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar-primary\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n              </div>\r\n              <div\r\n                class=\"navbar-collapse\"\r\n                [isAnimated]=\"true\"\r\n                [collapse]=\"isCollapsed\"\r\n                id=\"example-navbar-primary\"\r\n              >\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                  <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"tim-icons icon-world\"> </i> Discover\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"tim-icons icon-single-02\"> </i> Profile\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-info\">\r\n            <div class=\"container\">\r\n              <div class=\"navbar-translate\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                  Info Color\r\n                </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar-info\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n              </div>\r\n              <div\r\n                class=\"navbar-collapse\"\r\n                [isAnimated]=\"true\"\r\n                [collapse]=\"isCollapsed\"\r\n                id=\"example-navbar-info\"\r\n              >\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                  <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Discover </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Profile </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Settings </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-success\">\r\n            <div class=\"container\">\r\n              <div class=\"navbar-translate\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                  Success Color\r\n                </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar-success\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n              </div>\r\n              <div\r\n                class=\"navbar-collapse\"\r\n                [isAnimated]=\"true\"\r\n                [collapse]=\"isCollapsed\"\r\n                id=\"example-navbar-success\"\r\n              >\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                  <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"tim-icons icon-world\"> </i>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"tim-icons icon-single-02\"> </i>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n            <div class=\"container\">\r\n              <div class=\"navbar-translate\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                  Warning Color\r\n                </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar-warning\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n              </div>\r\n              <div\r\n                class=\"navbar-collapse\"\r\n                [isAnimated]=\"true\"\r\n                [collapse]=\"isCollapsed\"\r\n                id=\"example-navbar-warning\"\r\n              >\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-facebook-square\"> </i>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-twitter\"> </i>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-google-plus\"> </i>\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-instagram\"> </i>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n            <div class=\"container\">\r\n              <div class=\"navbar-translate\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                  Danger Color\r\n                </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar-danger\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n              </div>\r\n              <div\r\n                class=\"navbar-collapse\"\r\n                [isAnimated]=\"true\"\r\n                [collapse]=\"isCollapsed\"\r\n                id=\"example-navbar-danger\"\r\n              >\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-facebook-square\"> </i> Share\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-twitter\"> </i> Tweet\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-pinterest\"> </i> Pin\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n          <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n            <div class=\"container\">\r\n              <div class=\"navbar-translate\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                  Transparent\r\n                </a>\r\n                <button\r\n                  aria-controls=\"navbarSupportedContent\"\r\n                  aria-label=\"Toggle navigation\"\r\n                  class=\"navbar-toggler\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\"\r\n                  (click)=\"isCollapsed = !isCollapsed\"\r\n                  id=\"example-navbar-transparent\"\r\n                  type=\"button\"\r\n                >\r\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\r\n                </button>\r\n              </div>\r\n              <div\r\n                class=\"navbar-collapse\"\r\n                [isAnimated]=\"true\"\r\n                [collapse]=\"isCollapsed\"\r\n                id=\"example-navbar-transparent\"\r\n              >\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-facebook-square\"> </i> Facebook\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-twitter\"> </i> Twitter\r\n                    </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                      <i class=\"fab fa-instagram\"> </i> Instagram\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-tabs\">\r\n      <div class=\"container\">\r\n        <div class=\"title\"><h3 class=\"mb-3\">Navigation Tabs</h3></div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">\r\n                With icons\r\n              </small>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <tabset class=\"nav-tabs-danger\">\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"tim-icons icon-spaceship\"> </i> Profile\r\n                    </ng-template>\r\n                    <p>\r\n                      Collaboratively administrate empowered markets via\r\n                      plug-and-play networks. Dynamically procrastinate B2C\r\n                      users after installed base benefits. <br />\r\n\r\n                      <br />\r\n\r\n                      Dramatically visualize customer directed convergence\r\n                      without revolutionary ROI.\r\n                    </p>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\r\n                    </ng-template>\r\n                    <p>\r\n                      Completely synergize resource taxing relationships via\r\n                      premier niche markets. Professionally cultivate one-to-one\r\n                      customer service with robust ideas. <br />\r\n\r\n                      <br />\r\n\r\n                      Dynamically innovate resource-leveling customer service\r\n                      for state of the art customer service.\r\n                    </p>\r\n                  </tab>\r\n                  <tab>\r\n                    <ng-template tabHeading>\r\n                      <i class=\"tim-icons icon-bag-16\"> </i> Options\r\n                    </ng-template>\r\n                    <p>\r\n                      Efficiently unleash cross-media information without\r\n                      cross-media value. Quickly maximize timely deliverables\r\n                      for real-time schemas. <br />\r\n\r\n                      <br />\r\n\r\n                      Dramatically maintain clicks-and-mortar solutions without\r\n                      functional solutions.\r\n                    </p>\r\n                  </tab>\r\n                </tabset>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\"> With text </small>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <tabset class=\"nav-tabs-danger\">\r\n                  <tab heading=\"Profile\">\r\n                    <p>\r\n                      These cases are perfectly simple and easy to distinguish.\r\n                      In a free hour, when our power of choice is untrammelled\r\n                      and when nothing prevents our being able to do what we\r\n                      like best, every pleasure is to be welcomed and every pain\r\n                      avoided. <br />\r\n\r\n                      But in certain circumstances and owing to the claims of\r\n                      duty or the obligations of business it will frequently\r\n                      occur that pleasures\r\n                    </p>\r\n                  </tab>\r\n                  <tab heading=\"Settings\">\r\n                    <p>\r\n                      I will be the leader of a company that ends up being worth\r\n                      billions of dollars, because I got the answers. I\r\n                      understand culture. I am the nucleus. I think thatâs a\r\n                      responsibility that I have, to push possibilities, to show\r\n                      people, this is the level that things could be at. I think\r\n                      thatâs a responsibility that I have, to push\r\n                      possibilities, to show people, this is the level that\r\n                      things could be at.\r\n                    </p>\r\n                  </tab>\r\n                  <tab heading=\"Options\">\r\n                    <p>\r\n                      I think thatâs a responsibility that I have, to push\r\n                      possibilities, to show people, this is the level that\r\n                      things could be at. So when you get something that has the\r\n                      name Kanye West on it, itâs supposed to be pushing the\r\n                      furthest possibilities. I will be the leader of a company\r\n                      that ends up being worth billions of dollars, because I\r\n                      got the answers. I understand culture. I am the nucleus.\r\n                    </p>\r\n                  </tab>\r\n                </tabset>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-pagination\">\r\n      <img class=\"path\" src=\"assets/img/path4.png\" />\r\n\r\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h3 class=\"mb-4\">Progress Bars</h3>\r\n            <div class=\"progress-container\">\r\n              <span class=\"progress-badge\"> Default </span>\r\n              <progressbar [value]=\"25\">\r\n                <span class=\"progress-value\"> 25% </span>\r\n              </progressbar>\r\n            </div>\r\n            <div class=\"progress-container progress-danger\">\r\n              <span class=\"progress-badge\"> Danger </span>\r\n              <progressbar class=\"progress-bar-danger\" [value]=\"60\">\r\n                <span class=\"progress-value\"> 60% </span>\r\n              </progressbar>\r\n            </div>\r\n            <br />\r\n\r\n            <h3 class=\"mb-5\">Navigation Pills</h3>\r\n            <tabset type=\"pills\" class=\"nav-pills-danger nav-pills-icons\">\r\n              <tab>\r\n                <ng-template tabHeading>\r\n                  <i class=\"tim-icons icon-atom\"> </i> Home\r\n                </ng-template>\r\n              </tab>\r\n              <tab>\r\n                <ng-template tabHeading>\r\n                  <i class=\"tim-icons icon-chat-33\"> </i> Messages\r\n                </ng-template>\r\n              </tab>\r\n              <tab>\r\n                <ng-template tabHeading>\r\n                  <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\r\n                </ng-template>\r\n              </tab>\r\n            </tabset>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h3 class=\"mb-5\">Pagination</h3>\r\n            <pagination\r\n              class=\"pagination-danger\"\r\n              [(ngModel)]=\"pagination1\"\r\n              [totalItems]=\"30\"\r\n            >\r\n            </pagination>\r\n            <pagination\r\n              class=\"pagination-danger\"\r\n              [boundaryLinks]=\"true\"\r\n              [totalItems]=\"45\"\r\n              [ngModel]=\"pagination\"\r\n              previousText=\"&lsaquo;\"\r\n              nextText=\"&rsaquo;\"\r\n              firstText=\"&laquo;\"\r\n              lastText=\"&raquo;\"\r\n            >\r\n            </pagination>\r\n            <br />\r\n\r\n            <h3 class=\"mb-5\">Labels</h3>\r\n            <span class=\"badge badge-default mr-1\"> Default </span>\r\n            <span class=\"badge badge-primary mr-1\"> Primary </span>\r\n            <span class=\"badge badge-success mr-1\"> Success </span>\r\n            <span class=\"badge badge-info mr-1\"> Info </span>\r\n            <span class=\"badge badge-warning mr-1\"> Warning </span>\r\n            <span class=\"badge badge-danger mr-1\"> Danger </span>\r\n            <span class=\"badge badge-neutral\"> Neutral </span>\r\n          </div>\r\n        </div>\r\n        <br />\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-notifications\" id=\"notifications\">\r\n      <div class=\"container\">\r\n        <div class=\"space\"></div>\r\n        <h3>Notifications</h3>\r\n        <alert\r\n          class=\"alert-with-icon\"\r\n          [type]=\"'primary alert-with-icon'\"\r\n          [dismissible]=\"true\"\r\n        >\r\n          <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\r\n          <span>\r\n            <b> Congrats! - </b> This is a regular notification made with\r\n            \".alert-primary\"\r\n          </span>\r\n        </alert>\r\n        <alert\r\n          class=\"alert-with-icon\"\r\n          [type]=\"'info alert-with-icon'\"\r\n          [dismissible]=\"true\"\r\n        >\r\n          <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\r\n          <span>\r\n            <b> Heads up! - </b> This is a regular notification made with\r\n            \".alert-info\"\r\n          </span>\r\n        </alert>\r\n        <alert\r\n          class=\"alert-with-icon\"\r\n          [type]=\"'success alert-with-icon'\"\r\n          [dismissible]=\"true\"\r\n        >\r\n          <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\r\n          <span>\r\n            <b> Well done! - </b> This is a regular notification made with\r\n            \".alert-success\"\r\n          </span>\r\n        </alert>\r\n        <alert\r\n          class=\"alert-with-icon\"\r\n          [type]=\"'warning alert-with-icon'\"\r\n          [dismissible]=\"true\"\r\n        >\r\n          <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\r\n          <span>\r\n            <b> Warning! - </b> This is a regular notification made with\r\n            \".alert-warning\"\r\n          </span>\r\n        </alert>\r\n        <alert\r\n          class=\"alert-with-icon\"\r\n          [type]=\"'danger alert-with-icon'\"\r\n          [dismissible]=\"true\"\r\n        >\r\n          <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\r\n          <span>\r\n            <b> Oh snap! - </b> This is a regular notification made with\r\n            \".alert-danger\"\r\n          </span>\r\n        </alert>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-typo\">\r\n      <img class=\"path\" src=\"assets/img/path1.png\" />\r\n\r\n      <img class=\"path path1\" src=\"assets/img/path3.png\" />\r\n\r\n      <div class=\"container\">\r\n        <h3 class=\"title\">Typography</h3>\r\n        <div id=\"typography\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"typography-line\">\r\n                <h1><span> Header 1 </span> The Life of FTB• Design System</h1>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <h2><span> Header 2 </span> The Life of FTB• Design System</h2>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <h3><span> Header 3 </span> The Life of FTB• Design System</h3>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <h4><span> Header 4 </span> The Life of FTB• Design System</h4>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <h5><span> Header 5 </span> The Life of FTB• Design System</h5>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <h6><span> Header 6 </span> The Life of FTB• Design System</h6>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <p>\r\n                  <span> Paragraph </span> I will be the leader of a company\r\n                  that ends up being worth billions of dollars, because I got\r\n                  the answers. I understand culture. I am the nucleus. I think\r\n                  thatâs a responsibility that I have, to push possibilities, to\r\n                  show people, this is the level that things could be at.\r\n                </p>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <span> Quote </span>\r\n                <blockquote>\r\n                  <p class=\"blockquote blockquote-danger\">\r\n                    \"I will be the leader of a company that ends up being worth\r\n                    billions of dollars, because I got the answers. I understand\r\n                    culture. I am the nucleus. I think thatâs a responsibility\r\n                    that I have, to push possibilities, to show people, this is\r\n                    the level that things could be at.\" <br />\r\n\r\n                    <br />\r\n\r\n                    <small> - Noaa </small>\r\n                  </p>\r\n                </blockquote>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <span> Muted Text </span>\r\n                <p class=\"text-muted\">\r\n                  I will be the leader of a company that ends up being worth\r\n                  billions of dollars, because I got the answers...\r\n                </p>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <span> Primary Text </span>\r\n                <p class=\"text-primary\">\r\n                  I will be the leader of a company that ends up being worth\r\n                  billions of dollars, because I got the answers...\r\n                </p>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <span> Info Text </span>\r\n                <p class=\"text-info\">\r\n                  I will be the leader of a company that ends up being worth\r\n                  billions of dollars, because I got the answers...\r\n                </p>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <span> Success Text </span>\r\n                <p class=\"text-success\">\r\n                  I will be the leader of a company that ends up being worth\r\n                  billions of dollars, because I got the answers...\r\n                </p>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <span> Warning Text </span>\r\n                <p class=\"text-warning\">\r\n                  I will be the leader of a company that ends up being worth\r\n                  billions of dollars, because I got the answers...\r\n                </p>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <span> Danger Text </span>\r\n                <p class=\"text-danger\">\r\n                  I will be the leader of a company that ends up being worth\r\n                  billions of dollars, because I got the answers...\r\n                </p>\r\n              </div>\r\n              <div class=\"typography-line\">\r\n                <h2>\r\n                  <span> Small Tag </span> Header with small subtitle <br />\r\n\r\n                  <small> Use \"small\" tag for the headers </small>\r\n                </h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"space-50\"></div>\r\n        <div id=\"images\">\r\n          <h3 class=\"mb-5\">Images</h3>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3 col-6\">\r\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                Image\r\n              </small>\r\n              <img\r\n                alt=\"Rounded image\"\r\n                class=\"img-fluid rounded shadow\"\r\n                src=\"assets/img/ryan.jpg\"\r\n                style=\"width: 150px;\"\r\n              />\r\n            </div>\r\n            <div class=\"col-sm-3 col-6\">\r\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                Circle Image\r\n              </small>\r\n              <img\r\n                alt=\"Circle image\"\r\n                class=\"img-fluid rounded-circle shadow\"\r\n                src=\"assets/img/james.jpg\"\r\n                style=\"width: 150px;\"\r\n              />\r\n            </div>\r\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                Raised\r\n              </small>\r\n              <img\r\n                alt=\"Raised image\"\r\n                class=\"img-fluid rounded shadow-lg\"\r\n                src=\"assets/img/lora.jpg\"\r\n                style=\"width: 150px;\"\r\n              />\r\n            </div>\r\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                Circle Raised\r\n              </small>\r\n              <img\r\n                alt=\"Raised circle image\"\r\n                class=\"img-fluid rounded-circle shadow-lg\"\r\n                src=\"assets/img/mike.jpg\"\r\n                style=\"width: 150px;\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\r\n      <img class=\"path\" src=\"assets/img/path5.png\" />\r\n\r\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\r\n\r\n      <div class=\"container\">\r\n        <h3 class=\"title mb-5\">Javascript components</h3>\r\n        <h4 class=\"mb-5\">Modal</h4>\r\n        <div class=\"row\" id=\"modals\">\r\n          <div class=\"col-md-4\">\r\n            <button\r\n              class=\"btn btn-danger\"\r\n              data-target=\"#myModal\"\r\n              (click)=\"myModal.show()\"\r\n            >\r\n              Launch Modal\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <button\r\n              class=\"btn btn-warning\"\r\n              data-target=\"#myModal1\"\r\n              (click)=\"myModal1.show()\"\r\n            >\r\n              Launch Modal Mini\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <button\r\n              class=\"btn btn-success\"\r\n              data-target=\"#myModal2\"\r\n              (click)=\"myModal2.show()\"\r\n            >\r\n              Launch Modal Form\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <br />\r\n\r\n        <br />\r\n\r\n        <h4 class=\"mb-5 mt-3\">Datepicker</h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"datepicker-container\">\r\n              <div class=\"form-group\">\r\n                <input\r\n                  bsDatepicker\r\n                  class=\"form-control\"\r\n                  data-datepicker-color=\"danger\"\r\n                  [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\"\r\n                  [bsValue]=\"date\"\r\n                  id=\"datepicker\"\r\n                  type=\"text\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <h4 class=\"mb-5 mt-3\">Popovers</h4>\r\n            <button\r\n              class=\"btn btn-default btn-sm mr-1\"\r\n              container=\"body\"\r\n              placement=\"top\"\r\n              popoverTitle=\"Popover on top\"\r\n              popover=\"Here will be some very useful information about his popover.\"\r\n              type=\"button\"\r\n            >\r\n              On top\r\n            </button>\r\n            <button\r\n              class=\"btn btn-default btn-sm mr-1\"\r\n              container=\"body\"\r\n              placement=\"right\"\r\n              popoverTitle=\"Popover on right\"\r\n              popover=\"Here will be some very useful information about his popover.<br>\r\n              Here will be some very useful information about his popover.\"\r\n              type=\"button\"\r\n            >\r\n              On right\r\n            </button>\r\n            <button\r\n              class=\"btn btn-default btn-sm mr-1\"\r\n              container=\"body\"\r\n              placement=\"bottom\"\r\n              popoverTitle=\"Popover on bottom\"\r\n              popover=\"Here will be some very useful information about his popover.\"\r\n              type=\"button\"\r\n            >\r\n              On bottom\r\n            </button>\r\n            <button\r\n              class=\"btn btn-default btn-sm\"\r\n              container=\"body\"\r\n              placement=\"left\"\r\n              popoverTitle=\"Popover on left\"\r\n              popover=\"Here will be some very useful information about his popover.\"\r\n              type=\"button\"\r\n            >\r\n              On left\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h4 class=\"mb-5 mt-3\">Tooltips</h4>\r\n            <button\r\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\r\n              data-animation=\"true\"\r\n              data-container=\"body\"\r\n              data-delay=\"100\"\r\n              placement=\"left\"\r\n              tooltip=\"Tooltip on left\"\r\n              type=\"button\"\r\n            >\r\n              On left\r\n            </button>\r\n            <button\r\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\r\n              data-animation=\"true\"\r\n              data-container=\"body\"\r\n              placement=\"top\"\r\n              tooltip=\"Tooltip on top\"\r\n              type=\"button\"\r\n            >\r\n              On top\r\n            </button>\r\n            <button\r\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\r\n              data-animation=\"true\"\r\n              data-container=\"body\"\r\n              placement=\"bottom\"\r\n              tooltip=\"Tooltip on bottom\"\r\n              type=\"button\"\r\n            >\r\n              On bottom\r\n            </button>\r\n            <button\r\n              class=\"btn btn-default btn-tooltip btn-sm\"\r\n              data-animation=\"true\"\r\n              data-container=\"body\"\r\n              placement=\"right\"\r\n              tooltip=\"Tooltip on right\"\r\n              type=\"button\"\r\n            >\r\n              On right\r\n            </button>\r\n            <div class=\"clearfix\"></div>\r\n            <br />\r\n\r\n            <br />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section\">\r\n        <div class=\"container\">\r\n          <div class=\"title\"><h3>Carousel</h3></div>\r\n          <div class=\"row justify-content-between align-items-center\">\r\n            <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n              <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\r\n              <p class=\"text-white mt-4\">\r\n                Black Design comes with three pre-built pages to help you get\r\n                started faster. You can change the text and images and you're\r\n                good to go.\r\n              </p>\r\n              <a\r\n                class=\"btn btn-warning mt-4\"\r\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\r\n              >\r\n                See all components\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <carousel [showIndicators]=\"false\">\r\n                <slide>\r\n                  <img\r\n                    alt=\"First slide\"\r\n                    class=\"d-block w-100\"\r\n                    src=\"assets/img/denys.jpg\"\r\n                  />\r\n                </slide>\r\n                <slide>\r\n                  <img\r\n                    alt=\"Second slide\"\r\n                    class=\"d-block w-100\"\r\n                    src=\"assets/img/fabien-bazanegue.jpg\"\r\n                  />\r\n                </slide>\r\n                <slide>\r\n                  <img\r\n                    alt=\"Third slide\"\r\n                    class=\"d-block w-100\"\r\n                    src=\"assets/img/mark-finn.jpg\"\r\n                  />\r\n                </slide>\r\n              </carousel>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-nucleo-icons\">\r\n      <img class=\"path\" src=\"assets/img/path3.png\" />\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-lg-8 col-md-12\">\r\n            <h2 class=\"title\">Nucleo Icons</h2>\r\n            <h4 class=\"description\">\r\n              FTB• Design System PRO comes with 100 custom icons made by our\r\n              friends from NucleoApp. The official package contains over 2.100\r\n              thin icons which are looking great in combination with FTB• Design\r\n              System PRO Make sure you check all of them and use those that you\r\n              like the most.\r\n            </h4>\r\n            <div class=\"btn-wrapper\">\r\n              <a\r\n                class=\"btn btn-danger btn-round mr-1\"\r\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\r\n                target=\"_blank\"\r\n              >\r\n                View Demo Icons\r\n              </a>\r\n              <a\r\n                class=\"btn btn-danger btn-simple btn-round btn-lg\"\r\n                href=\"https://nucleoapp.com/?ref=1712\"\r\n                target=\"_blank\"\r\n              >\r\n                View All Icons\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"blur-hover\">\r\n          <a\r\n            href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\r\n            class=\"text-danger\"\r\n          >\r\n            <div class=\"icons-container blur-item on-screen mt-5\">\r\n              <i class=\"icon tim-icons icon-coins\"> </i>\r\n              <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\r\n              <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\r\n              <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\r\n              <i class=\"icon tim-icons icon-send\"> </i>\r\n              <i class=\"icon tim-icons icon-mobile\"> </i>\r\n              <i class=\"icon tim-icons icon-wifi\"> </i>\r\n              <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\r\n              <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\r\n              <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\r\n              <i class=\"icon tim-icons icon-gift-2\"> </i>\r\n              <i class=\"icon tim-icons icon-tap-02\"> </i>\r\n              <i class=\"icon tim-icons icon-wallet-43\"> </i>\r\n            </div>\r\n            <span class=\"blur-hidden h5 text-danger\">\r\n              Eplore all the 21.000+ Nucleo Icons\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-signup\">\r\n      <div class=\"container\">\r\n        <div class=\"squares square-1\"></div>\r\n        <div class=\"squares square-2\"></div>\r\n        <div class=\"squares square-3\"></div>\r\n        <div class=\"squares square-4\"></div>\r\n        <div class=\"row row-grid justify-content-between align-items-center\">\r\n          <div class=\"col-lg-6\">\r\n            <h3 class=\"display-3 text-white\">\r\n              A beautiful Black Design\r\n              <span class=\"text-white\"> completed with examples </span>\r\n            </h3>\r\n            <p class=\"text-white mb-3\">\r\n              The Design System comes with four pre-built pages to help you get\r\n              started faster. You can change the text and images and you're good\r\n              to go. More importantly, looking at them will give you a picture\r\n              of what you can built with this powerful Bootstrap 4 Design\r\n              System.\r\n            </p>\r\n            <div class=\"btn-wrapper\">\r\n              <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\r\n                Register Page\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 mb-lg-auto\">\r\n            <div class=\"card card-register\">\r\n              <div class=\"card-header\">\r\n                <img\r\n                  alt=\"Card image\"\r\n                  class=\"card-img\"\r\n                  src=\"assets/img/square1-red.png\"\r\n                />\r\n\r\n                <h4 class=\"card-title\">Register</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <form class=\"form\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-single-02\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      class=\"form-control\"\r\n                      placeholder=\"Full Name\"\r\n                      type=\"text\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-email-85\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      class=\"form-control\"\r\n                      placeholder=\"Email\"\r\n                      type=\"text\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\">\r\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\r\n                      </div>\r\n                    </div>\r\n                    <input\r\n                      class=\"form-control\"\r\n                      placeholder=\"Password\"\r\n                      type=\"text\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-check text-left\">\r\n                    <label class=\"form-check-label\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" />\r\n\r\n                      <span class=\"form-check-sign\"> </span> I agree to the\r\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\r\n                    </label>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <a\r\n                  class=\"btn btn-danger btn-round btn-lg\"\r\n                  href=\"javascript:void(0)\"\r\n                >\r\n                  Get Started\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-examples\" data-background-color=\"black\">\r\n      <img class=\"path\" src=\"assets/img/path1.png\" />\r\n\r\n      <div class=\"space-50\"></div>\r\n      <div class=\"container text-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <a [routerLink]=\"['/landing']\">\r\n              <img\r\n                alt=\"Image\"\r\n                class=\"img-raised\"\r\n                src=\"assets/img/landing-page.png\"\r\n              />\r\n            </a>\r\n            <a\r\n              class=\"btn btn-simple btn-danger btn-round\"\r\n              [routerLink]=\"['/landing']\"\r\n            >\r\n              View Landing Page\r\n            </a>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <a [routerLink]=\"['/profile']\">\r\n              <img\r\n                alt=\"Image\"\r\n                class=\"img-raised\"\r\n                src=\"assets/img/profile-page.png\"\r\n              />\r\n            </a>\r\n            <a\r\n              class=\"btn btn-simple btn-danger btn-round\"\r\n              [routerLink]=\"['/profile']\"\r\n            >\r\n              View Profile Page\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section section-download\" data-background-color=\"black\" #target>\r\n      <img class=\"path\" src=\"assets/img/path1.png\" />\r\n\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-md-center\">\r\n          <div class=\"text-center col-md-12 col-lg-8\">\r\n            <h2 class=\"title\">\r\n              Do you love this Bootstrap 4 Angular Design System?\r\n            </h2>\r\n            <h4 class=\"description\">\r\n              Cause if you do, it can be yours for FREE. Hit the button below to\r\n              navigate to Creative Tim where you can find the design system in\r\n              HTML format. Start a new project or give an old Bootstrap project\r\n              a new look!\r\n            </h4>\r\n          </div>\r\n          <div class=\"text-center col-md-12 col-lg-8\">\r\n            <a\r\n              class=\"btn btn-danger btn-round btn-lg\"\r\n              href=\"https://www.creative-tim.com/product/blk-design-system-angular\"\r\n              role=\"button\"\r\n            >\r\n              Download Angular\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <br />\r\n\r\n        <br />\r\n\r\n        <br />\r\n\r\n        <br />\r\n\r\n        <br />\r\n\r\n        <div class=\"row row-grid align-items-center my-md\">\r\n          <div class=\"col-lg-6\">\r\n            <h3 class=\"text-danger font-weight-light mb-2\">\r\n              Thank you for supporting us!\r\n            </h3>\r\n            <h4 class=\"mb-0 font-weight-light\">\r\n              Let's get in touch on any of these platforms.\r\n            </h4>\r\n          </div>\r\n          <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n            <a\r\n              class=\"btn btn-icon btn-twitter btn-round btn-lg mr-1\"\r\n              id=\"twitter\"\r\n            >\r\n              <i class=\"fab fa-twitter\"> </i>\r\n            </a>\r\n            <a\r\n              class=\"btn btn-icon btn-facebook btn-round btn-lg mr-1\"\r\n              id=\"facebook\"\r\n            >\r\n              <i class=\"fab fa-facebook-square\"> </i>\r\n            </a>\r\n            <a\r\n              class=\"btn btn-icon btn-github btn-round btn-lg\"\r\n              href=\"https://github.com/creativetimofficial\"\r\n              target=\"_blank\"\r\n            >\r\n              <i class=\"fab fa-github\"> </i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      aria-hidden=\"true\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      bsModal\r\n      class=\"modal fade\"\r\n      #myModal=\"bs-modal\"\r\n      id=\"myModal\"\r\n      role=\"dialog\"\r\n      tabindex=\"-1\"\r\n    >\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header justify-content-center\">\r\n            <button\r\n              aria-hidden=\"true\"\r\n              class=\"close\"\r\n              data-dismiss=\"modal\"\r\n              type=\"button\"\r\n              (click)=\"myModal.hide()\"\r\n            >\r\n              <i class=\"tim-icons icon-simple-remove\"> </i>\r\n            </button>\r\n            <h4 class=\"title title-up\">Modal title</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>\r\n              Far far away, behind the word mountains, far from the countries\r\n              Vokalia and Consonantia, there live the blind texts. Separated\r\n              they live in Bookmarksgrove right at the coast of the Semantics, a\r\n              large language ocean. A small river named Duden flows by their\r\n              place and supplies it with the necessary regelialia. It is a\r\n              paradisematic country, in which roasted parts of sentences fly\r\n              into your mouth.\r\n            </p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\r\n            <button\r\n              class=\"btn btn-danger\"\r\n              data-dismiss=\"modal\"\r\n              type=\"button\"\r\n              (click)=\"myModal.hide()\"\r\n            >\r\n              Close\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      aria-hidden=\"true\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      bsModal\r\n      class=\"modal fade modal-mini modal-danger modal-mini\"\r\n      #myModal1=\"bs-modal\"\r\n      id=\"myModal1\"\r\n      role=\"dialog\"\r\n      tabindex=\"-1\"\r\n    >\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header justify-content-center\">\r\n            <button\r\n              aria-hidden=\"true\"\r\n              class=\"close\"\r\n              data-dismiss=\"modal\"\r\n              (click)=\"myModal1.hide()\"\r\n              type=\"button\"\r\n            >\r\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\r\n            </button>\r\n            <div class=\"modal-profile\">\r\n              <i class=\"tim-icons icon-single-02\"> </i>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Always have an access to your profile</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\r\n            <button\r\n              class=\"btn btn-link btn-neutral\"\r\n              data-dismiss=\"modal\"\r\n              type=\"button\"\r\n              (click)=\"myModal1.hide()\"\r\n            >\r\n              Close\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      aria-hidden=\"true\"\r\n      aria-labelledby=\"myModalLabel\"\r\n      bsModal\r\n      class=\"modal fade modal-black\"\r\n      #myModal2=\"bs-modal\"\r\n      id=\"myModal2\"\r\n      role=\"dialog\"\r\n      tabindex=\"-1\"\r\n    >\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header justify-content-center\">\r\n            <button\r\n              aria-hidden=\"true\"\r\n              class=\"close\"\r\n              data-dismiss=\"modal\"\r\n              (click)=\"myModal2.hide()\"\r\n              type=\"button\"\r\n            >\r\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\r\n            </button>\r\n            <div class=\"text-muted text-center ml-auto mr-auto\">\r\n              <h3 class=\"mb-0\">Sign in with</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"btn-wrapper text-center\">\r\n              <a\r\n                class=\"btn btn-neutral btn-icon mr-1\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <img src=\"assets/img/github.svg\" />\r\n              </a>\r\n              <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\r\n                <img src=\"assets/img/google.svg\" />\r\n              </a>\r\n            </div>\r\n            <div class=\"text-center text-muted mb-4 mt-3\">\r\n              <small> Or sign in with credentials </small>\r\n            </div>\r\n            <form role=\"form\">\r\n              <div class=\"form-group mb-3\">\r\n                <div\r\n                  class=\"input-group input-group-alternative\"\r\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\r\n                >\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <i class=\"tim-icons icon-email-85\"> </i>\r\n                    </span>\r\n                  </div>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"Email\"\r\n                    type=\"email\"\r\n                    (focus)=\"focus1 = true\"\r\n                    (blur)=\"focus1 = false\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div\r\n                  class=\"input-group input-group-alternative\"\r\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\r\n                >\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <i class=\"tim-icons icon-key-25\"> </i>\r\n                    </span>\r\n                  </div>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"Password\"\r\n                    type=\"password\"\r\n                    (focus)=\"focus2 = true\"\r\n                    (blur)=\"focus2 = false\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-check mt-3\">\r\n                <label class=\"form-check-label\">\r\n                  <input\r\n                    checked=\"checked\"\r\n                    class=\"form-check-input\"\r\n                    type=\"checkbox\"\r\n                  />\r\n\r\n                  <span class=\"form-check-sign\"> </span> Remember me!\r\n                </label>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <button class=\"btn btn-primary my-4\" type=\"button\">\r\n                  Sign in\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <!-- <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\"><h1 class=\"title\">FTB•</h1></div>\r\n        <div class=\"col-md-3\">\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\r\n                Contact Us\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\r\n                About Us\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\r\n                Blog\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\r\n                License\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h3 class=\"title\">Follow us:</h3>\r\n          <div class=\"btn-wrapper profile\">\r\n            <a\r\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\r\n              href=\"https://twitter.com/creativetim\"\r\n              target=\"_blank\"\r\n            >\r\n              <i class=\"fab fa-twitter\"> </i>\r\n            </a>\r\n            <a\r\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\r\n              href=\"https://www.facebook.com/creativetim\"\r\n              target=\"_blank\"\r\n            >\r\n              <i class=\"fab fa-facebook-square\"> </i>\r\n            </a>\r\n            <a\r\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\r\n              href=\"https://dribbble.com/creativetim\"\r\n              target=\"_blank\"\r\n            >\r\n              <i class=\"fab fa-dribbble\"> </i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer> -->\r\n</div>");

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

/***/ "XDXz":
/*!***************************************************!*\
  !*** ./src/app/services/posts-service.service.ts ***!
  \***************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this._posts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.posts$ = this._posts.asObservable();
        this.loadPosts();
    }
    PostsService.prototype.loadPosts = function () {
        var _this = this;
        this.http.get('assets//json/NewBlogs.json').subscribe(function (posts) {
            _this._posts.next(posts);
        }, function (err) {
            console.error('Error loading posts', err);
            _this._posts.next([]);
        });
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostsService);
    return PostsService;
}());



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
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "lwe/");























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
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_21__["LandingpageComponent"],
                _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_22__["PostDetailComponent"]
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

/***/ "eF5m":
/*!**************************************************************!*\
  !*** ./src/app/pages/post-detail/post-detail.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "lwe/":
/*!************************************************************!*\
  !*** ./src/app/pages/post-detail/post-detail.component.ts ***!
  \************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-detail.component.html */ "Gamd");
/* harmony import */ var _post_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail.component.scss */ "eF5m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");







var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(route, postsService) {
        var _this = this;
        this.route = route;
        this.postsService = postsService;
        this.subscriptions$ = [];
        this.currentPost = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.subscriptions$.push(this.route.params.subscribe(function (params) {
            _this.postId = params['id'];
        }));
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.subscriptions$.push(this.postsService.posts$.subscribe(function (posts) {
            var checkPosts = posts['Blogs'];
            if (checkPosts == null) {
                return;
            }
            var checkPost = checkPosts.find(function (post) { return post.Id == _this.postId; });
            _this.currentPost.next(checkPost);
        }));
        this.subscriptions$.push(this.currentPost
            .subscribe());
    };
    PostDetailComponent.prototype.ngOnDestroy = function () {
        this.subscriptions$.forEach(function (element) {
            element.unsubscribe();
        });
    };
    PostDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] }
    ]; };
    PostDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-post-detail',
            template: _raw_loader_post_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_post_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]])
    ], PostDetailComponent);
    return PostDetailComponent;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");





var IndexComponent = /** @class */ (function () {
    function IndexComponent(postsService) {
        this.postsService = postsService;
        this.subscriptions$ = [];
        this.posts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        // var slider = document.getElementById("sliderRegular");
        // noUiSlider.create(slider, {
        //   start: 40,
        //   connect: false,
        //   range: {
        //     min: 0,
        //     max: 100
        //   }
        // });
        // var slider2 = document.getElementById("sliderDouble");
        // noUiSlider.create(slider2, {
        //   start: [20, 60],
        //   connect: true,
        //   range: {
        //     min: 0,
        //     max: 100
        //   }
        // });
        this.subscriptions$.push(this.postsService.posts$.subscribe(function (posts) {
            debugger;
            if (posts == null || posts.length == 0) {
                return;
            }
            var latestPosts = posts['Blogs'].slice(-3);
            _this.posts.next(latestPosts);
        }));
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
        this.subscriptions$.forEach(function (element) {
            element.unsubscribe();
        });
    };
    IndexComponent.ctorParameters = function () { return [
        { type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] }
    ]; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]])
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
/* harmony import */ var _pages_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/post-detail/post-detail.component */ "lwe/");







var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: 'post/:id', component: _pages_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_6__["PostDetailComponent"] },
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