import Footer from "../../footer/footer";
import Header from "../../header/header";

function Checkout(){
    return<>
    <Header/>
    
  <div className="breadcrumbs-area mb-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumbs-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" className="active">
                  checkout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="entry-header-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="entry-header-title">
            <h2>Checkout</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
 
 <div className="coupon-accordion"><h3></h3></div>
       
  <div className="checkout-area mb-70">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className=" col-lg-12">
                      <div className="country-select">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <select>
                          <option value="volvo">bangladesh</option>
                          <option value="saab">Algeria</option>
                          <option value="mercedes">Afghanistan</option>
                          <option value="audi">Ghana</option>
                          <option value="audi2">Albania</option>
                          <option value="audi3">Bahrain</option>
                          <option value="audi4">Colombia</option>
                          <option value="audi5">Dominican Republic</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 ">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Street address" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Town / City" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="checkout-form-list">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input type="email" placeholder="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                    </div>
                   
                  </div>
                  <div className="different-address">
                    <div className="ship-different-title">
                      <h3>
                        
                      </h3>
                    </div>
                    <div
                      className="row"
                      id="ship-box-info"
                      style={{ display: "none" }}
                    >
                      <div className="col-lg-12">
                        <div className="country-select">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <select>
                            <option value="volvo">bangladesh</option>
                            <option value="saab">Algeria</option>
                            <option value="mercedes">Afghanistan</option>
                            <option value="audi">Ghana</option>
                            <option value="audi2">Albania</option>
                            <option value="audi3">Bahrain</option>
                            <option value="audi4">Colombia</option>
                            <option value="audi5">Dominican Republic</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="checkout-form-list">
                          <label>Company Name</label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Street address" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="checkout-form-list">
                          <input
                            type="text"
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Town / City" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input type="email" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="your-order">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cart_item">
                          <td className="product-name">
                            Vestibulum suscipit{" "}
                            <strong className="product-quantity"> × 1</strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">£165.00</span>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="product-name">
                            Vestibulum suscipit{" "}
                            <strong className="product-quantity"> × 1</strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">£50.00</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td>
                            <span className="amount">£215.00</span>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <th>Shipping</th>
                          <td>
                            <ul>
                              <li>
                                <input type="radio" />
                                <label>
                                  Flat Rate:{" "}
                                  <span className="amount">£7.00</span>
                                </label>
                              </li>
                              <li>
                                <input type="radio" />
                                <label>Free Shipping:</label>
                              </li>
                              <li />
                            </ul>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className="amount">£215.00</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="payment-accordion">
                      <div className="collapses-group">
                        <div
                          className="panel-group"
                          id="accordion"
                          role="tablist"
                          aria-multiselectable="true"
                        >
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingOne"
                            >
                              <h4 className="panel-title">
                                <a
                                  data-bs-toggle="collapse"
                                  data-bs-parent="#accordion"
                                  href="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Direct Bank Transfer
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseOne"
                              className="panel-collapse collapse in"
                              role="tabpanel"
                              aria-labelledby="headingOne"
                            >
                              <div className="panel-body">
                                <p>
                                  Make your payment directly into our bank
                                  account. Please use your Order ID as the
                                  payment reference. Your order won’t be shipped
                                  until the funds have cleared in our account.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingTwo"
                            >
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-bs-toggle="collapse"
                                  data-bs-parent="#accordion"
                                  href="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Cheque Payment
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseTwo"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingTwo"
                            >
                              <div className="panel-body">
                                <p>
                                  Please send your cheque to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div
                              className="panel-heading"
                              role="tab"
                              id="headingThree"
                            >
                              <h4 className="panel-title">
                                <a
                                  className="collapsed"
                                  role="button"
                                  data-bs-toggle="collapse"
                                  data-bs-parent="#accordion"
                                  href="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  PayPal <img src="/img/1.png" alt="payment" />
                                </a>
                              </h4>
                            </div>
                            <div
                              id="collapseThree"
                              className="panel-collapse collapse"
                              role="tabpanel"
                              aria-labelledby="headingThree"
                            >
                              <div className="panel-body">
                                <p>
                                  Pay via PayPal; you can pay with your credit
                                  card if you don’t have a PayPal account.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment">
                      <input type="submit" defaultValue="Place order" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

    <Footer/>
    </>
}

export default Checkout;