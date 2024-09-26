import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pricing-table.css"
import Plan from "../Plan/Plan";
import Package from "../Package/Package";

const PricingTable = () => {
    const [plans, setPlans] = useState([]);
    const [packages, setPackages]  = useState([]);
    useEffect(() => {
        axios.get('/api/subscription/v1/data').then((res) => {
            setPlans(res.data);
        }).catch((err) => {
            console.log(err);
        });

        axios.get('/api/query/v1/data').then((res) => {
            setPackages(res.data.packageSubscriptionDTOList);
        }).catch((err) => {
            console.log(err);
         });
     }, []);

    return <div class="pricing-wrapper subscription-plans-grid indiax">
        <div class="tab-content-2 js-tab-content-2 js-ecommerce-content active">
            <div class="box-shadow">
                <div class="setting-start-plan subscription-plans-grid-items mobile-hide">
                    {!!plans.length && !!packages.length && <table class="js-table-scroll-us fixed_headers fixed_headers-5column">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                {plans.map((p) => {
                                        return <Plan {...p} />
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {packages.map((p) => {
                                    return <Package {...p} numberOfSubs={plans.length} />
                            })}
                        </tbody>
                    </table>}
                    <p class="descprition-tax margin-t10 display-inline-b width-100 text-left font-s12">*Discounts are available for new subscriptions only.</p>
                </div>
                <div class="desktop-hide">
                    <div class="setting-start-plan subscription-plans-grid-items box-plans-grid-items">
                        <h2 class="plan-name">Basic</h2>
                        <div class="price">
                            <p class="per-month margin-b25 margin-t0">Essentials to create your personal website.</p>

                            <div class="price-wrapper-tab">

                                <div class="yearly">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbolx">₹</p>
                                        <p class="dollars js-price-basic-monthlyx">417</p>

                                    </div>
                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-basic-yearlyx">208</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed Yearly</div>

                                </div>



                                <div class="biannual active">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-basic-monthlyx">417</p>

                                    </div>

                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-basic-biannualx">156</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed 2 Yearly</div>

                                </div>

                            </div>
                        </div>
                        <div class="subscription-button">
                            <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                        </div>
                        <div class="clearfix"></div>
                        <div class="price">
                            <div class="per-month margin-t5">Tax may apply</div>
                        </div>


                        <div class=" subscription-plan-full-feature">
                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-basic" class="js-subscription-plan-full-feature">See All Features <svg id="link_arrow-pixpa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 120v240c0 13.25-10.75 24-24 24s-24-10.75-24-24V177.9l-231 231C36.28 413.7 30.14 416 24 416s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94L238.1 144H56C42.75 144 32 133.3 32 120S42.75 96 56 96h240C309.3 96 320 106.8 320 120z"></path></svg></a>
                        </div>

                    </div>
                    <div class="setting-start-plan subscription-plans-grid-items box-plans-grid-items">
                        <h2 class="plan-name">Creator</h2>
                        <div class="price">
                            <p class="per-month margin-b25 margin-t0">Step up with a stunning portfolio website &amp; store</p>
                            <div class="price-wrapper-tab">

                                <div class="yearly">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-creator-monthlyx">625</p>

                                    </div>
                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-creator-yearlyx">312</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed Yearly</div>

                                </div>



                                <div class="biannual active">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbolx">₹</p>
                                        <p class="dollars js-price-creator-monthlyx">625</p>

                                    </div>


                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-creator-biannualx">234</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed 2 Yearly</div>

                                </div>

                            </div>
                        </div>
                        <div class="subscription-button">
                            <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                        </div>
                        <div class="clearfix"></div>
                        <div class="price">
                            <div class="per-month margin-t5">Tax may apply</div>
                        </div>


                        <div class=" subscription-plan-full-feature">
                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-creator" class="js-subscription-plan-full-feature">See All Features <svg id="link_arrow-pixpa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 120v240c0 13.25-10.75 24-24 24s-24-10.75-24-24V177.9l-231 231C36.28 413.7 30.14 416 24 416s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94L238.1 144H56C42.75 144 32 133.3 32 120S42.75 96 56 96h240C309.3 96 320 106.8 320 120z"></path></svg></a>
                        </div>
                    </div>
                    <div class="setting-start-plan subscription-plans-grid-items  box-plans-grid-items">
                        <h2 class="plan-name">Professional</h2>
                        <div class="price">
                            <p class="per-month margin-b25 margin-t0">Everything you need to showcase, sell &amp; share like a pro.</p>
                            <div class="price-wrapper-tab">

                                <div class="yearly">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-professional-monthlyx">937</p>

                                    </div>
                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-professional-yearlyx">469</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed Yearly</div>

                                </div>



                                <div class="biannual active">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-professional-monthlyx">937</p>

                                    </div>


                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-professional-biannualx">352</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed 2 Yearly</div>

                                </div>

                            </div>
                        </div>

                        <div class="subscription-button">
                            <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                        </div>
                        <div class="clearfix"></div>
                        <div class="price">
                            <div class="per-month margin-t5">Tax may apply</div>
                        </div>

                        <div class=" subscription-plan-full-feature">
                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-professional" class="js-subscription-plan-full-feature">See All Features <svg id="link_arrow-pixpa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 120v240c0 13.25-10.75 24-24 24s-24-10.75-24-24V177.9l-231 231C36.28 413.7 30.14 416 24 416s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94L238.1 144H56C42.75 144 32 133.3 32 120S42.75 96 56 96h240C309.3 96 320 106.8 320 120z"></path></svg></a>
                        </div>
                    </div>
                    <div class="setting-start-plan subscription-plans-grid-items box-plans-grid-items margin-b0">
                        <h2 class="plan-name">Advanced</h2>
                        <div class="price">
                            <p class="per-month margin-b25 margin-t0">Grow your business with powerful marketing &amp; commerce tools.</p>
                            <div class="price-wrapper-tab">
                                <div class="yearly">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-advanced-monthlyx">1250</p>

                                    </div>
                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-advanced-yearlyx">625</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed Yearly</div>

                                </div>


                                <div class="biannual active">
                                    <div class="price-content discount-wrapper">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-advanced-monthlyx">1250</p>

                                    </div>

                                    <div class="price-content">
                                        <p class="dollar-sign js-currency-symbol">₹</p>
                                        <p class="dollars js-price-advanced-biannualx">469</p>
                                        <div class="per-month-flex">/mo</div>
                                    </div>
                                    <div class="per-month notranslate">Billed 2 Yearly</div>

                                </div>

                            </div>
                        </div>

                        <div class="subscription-button">
                            <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                        </div>
                        <div class="clearfix"></div>
                        <div class="price">
                            <div class="per-month margin-t5">Tax may apply</div>
                        </div>

                        <div class=" subscription-plan-full-feature">
                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-advanced" class="js-subscription-plan-full-feature">See All Features <svg id="link_arrow-pixpa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 120v240c0 13.25-10.75 24-24 24s-24-10.75-24-24V177.9l-231 231C36.28 413.7 30.14 416 24 416s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94L238.1 144H56C42.75 144 32 133.3 32 120S42.75 96 56 96h240C309.3 96 320 106.8 320 120z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content-3 js-tab-content-3 js-clientgallery-content">
            <div class="box-shadow">

                <div class="setting-start-plan subscription-plans-grid-items js-clientgallery-content-photographerplan client-gallery-studio-plan mobile-hide active">
                    <table class="js-table-scroll-fixed-us fixed_headers fixed_headers-6column">
                        <thead>
                            <tr>
                                <th class="padding-l0">
                                    <div class="price text-left lh-15  padding-r40">


                                        <p class="per-month font-s14">Start with a 15-day free trial. No credit card is required. Subscribe anytime with a <span class="color-hightlight font-w500">30-day money-back guarantee.</span></p>

                                    </div>
                                </th>
                                <th>
                                    <h2 class="plan-name">Essentials</h2>
                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">3600</p>

                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>
                                <th>
                                    <h2 class="plan-name">Standard</h2>
                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">10000</p>

                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>
                                <th>
                                    <h2 class="plan-name">Growth</h2>
                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">16000</p>
                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>
                                <th class="bg-lgrey-03 position-rel">
                                    <div class="most-popular">Most Popular</div>
                                    <h2 class="plan-name">Premium</h2>

                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">21000</p>

                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>
                                <th>
                                    <h2 class="plan-name">Unlimited</h2>
                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">36000</p>

                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>


                    <table class="js-table-scroll-us fixed_headers fixed_headers-6column">
                        <tbody>
                            <tr class="tr-heading">
                                <td class="plan-title">
                                    <img alt="pixpa" src="https://studioassets.pixpa.com/pixpacom/images/menu_svg/icon-clientgallery.png" class="vertical-align-m margin-r10 max-w40 lazyload" /> Client Galleries
                                </td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="bg-lgrey-03"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Storage
                                    <div class="tooltiptext">
                                        Includes original images uploaded in client galleries, files for digital products and downloads. Web versions of images used on your website are not counted in this limit.
                                    </div>
                                </td>
                                <td>
                                    <p class="storage-val">10GB</p>
                                    <p class="storage-photos">3,000+ Images</p>
                                </td>
                                <td>
                                    <p class="storage-val">100GB</p>
                                    <p class="storage-photos">30,000+ Images</p>
                                </td>
                                <td>
                                    <p class="storage-val">500GB</p>
                                    <p class="storage-photos">150,000+ Images</p>
                                </td>
                                <td class="bg-lgrey-03">
                                    <p class="storage-val">1,000GB</p>
                                    <p class="storage-photos">300,000+ Images</p>
                                </td>
                                <td>
                                    <p class="storage-val">Unlimited</p>
                                    <p class="storage-photos">Unlimited Images</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Share Images with Clients
                                    <div class="tooltiptext">
                                        Sharing your work with clients is hassle free with Pixpa's Client Albums.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Simplified Proofing
                                    <div class="tooltiptext">
                                        Streamline your workflow and delight your clients. Enable clients to create favourite lists and mark images as favourites.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Secure Online Delivery of Images
                                    <div class="tooltiptext">
                                        Deliver original files or web versions of your images securely to your clients. Add an extra layer of security using the Download PIN.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Unlimited Public or Private Client Albums
                                    <div class="tooltiptext">
                                        Allow public access or password protect your client album to restrict access for selected clients only.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Mobile Optimized Client Albums
                                    <div class="tooltiptext">
                                        Manage all your clients in one place. Delight your clients with mobile-ready client albums that they can browse on any device.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Auto-Expire Albums
                                    <div class="tooltiptext">
                                        Unpublish any client album automatically by setting an expiry date for it.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="tooltip">
                                    Monitor Clients' Activity
                                    <div class="tooltiptext">
                                        Get notified when your clients login, mark favorites, download or purchase images.
                                    </div>
                                </td>
                                <td>
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>
                                <td>
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>
                                <td>
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>
                                <td>
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>
                            </tr>








                            <tr class="tr-heading">
                                <td class="plan-title">
                                    <img alt="pixpa" src="https://studioassets.pixpa.com/pixpacom/images/menu_svg/icon-ecommercegallery.png" class="vertical-align-m margin-r10 max-w40 lazyload" /> E-COMMERCE
                                </td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="bg-lgrey-03"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Sell images as prints or downloads
                                    <div class="tooltiptext">
                                        Increase your revenue by selling your images as prints or digital downloads.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Auto-fulfilment with Print Labs
                                    <div class="tooltiptext">
                                        Enable auto-fulfilment of your print orders using WHCC or any custom lab of your choice. You can add products with self-fulfilment option as well.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Collect Payments Directly
                                    <div class="tooltiptext">
                                        Connect your Paypal or Stripe account to collect payments directly to your account. No more waiting for payouts.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    No Commissions on Sales
                                    <div class="tooltiptext">
                                        Pixpa does not charge any commissions on your sales - Whether you are selling products or images, you take home all the revenue. Transaction charges from your payment processor will apply.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Discount Coupons
                                    <div class="tooltiptext">
                                        Increase sales by offering discounts or free shipping coupon codes. Offer percentage or flat-amount discount, auto-expire coupons and set a minimum cart value.
                                    </div>
                                </td>

                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Set Taxes &amp; Shipping Rates
                                    <div class="tooltiptext">
                                        Manage taxes and shipping rates based on countries. Create overrides for states / regions.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Checkout on Your Domain
                                    <div class="tooltiptext">
                                        Provide a consistent checkout experience by directing customers to a secure checkout page on your own domain (https://www.yourdomain.com/checkout)
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Abandoned Cart Recovery
                                    <div class="tooltiptext">
                                        Recover revenue by sending automated abandoned cart recovery email to customers did not complete their purchase on your website.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>


                            <tr class="tr-heading">
                                <td class="plan-title">
                                    INCLUDED
                                </td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="bg-lgrey-03"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="tooltip height-57">
                                    Gallery Apps
                                    <div class="tooltiptext">
                                        Create personalised gallery apps for your clients. Share your work, build your brand and impress your clients.
                                    </div>
                                </td>
                                <td class="height-57">
                                    Unlimited
                                </td>
                                <td class="height-57">
                                    Unlimited
                                </td>
                                <td class="height-57">
                                    Unlimited
                                </td>

                                <td class="bg-lgrey-03 height-57">
                                    Unlimited
                                </td>
                                <td class="height-57">
                                    Unlimited
                                </td>
                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Your branding (logo &amp; visual style)
                                    <div class="tooltiptext">
                                        Include your brand logo and customise colors &amp; fonts to personalise your client galleries.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>




                            <tr>
                                <td class="tooltip">
                                    Connect Your Domain
                                    <div class="tooltiptext">
                                        Easily connect your own custom domain name with your Pixpa website
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>


                            <tr>
                                <td class="tooltip">
                                    1 Year Free Domain Name
                                    <div class="tooltiptext">
                                        Get a free domain name for the first year with annual plans.
                                    </div>
                                </td>
                                <td class="height-57">
                                    Free with Annual Plan
                                </td>
                                <td class="height-57">
                                    Free with Annual Plan
                                </td>
                                <td class="height-57">
                                    Free with Annual Plan
                                </td>
                                <td class="bg-lgrey-03 height-57">
                                    Free with Annual Plan
                                </td>
                                <td class="height-57">
                                    Free with Annual Plan
                                </td>
                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Free SSL Certificate
                                    <div class="tooltiptext">
                                        All Pixpa websites come with a free SSL certificate. This shows your visitors that your website is secure and helps improve your rankings on Google.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>

                            <tr>
                                <td class="tooltip">
                                    24/7 Customer Support
                                    <div class="tooltiptext">
                                        All Pixpa plans include fast and friendly 24/7 customer support on chat and email.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td class="bg-lgrey-03">
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div class="setting-start-plan subscription-plans-grid-items mobile-hide js-clientgallery-content-studioplan client-gallery-studio-plan mobile-hide">
                    <table class="js-table-scroll-fixed-us fixed_headers fixed_headers-4column">
                        <thead>
                            <tr>
                                <th class="padding-l0">
                                    <div class="price text-left lh-15  padding-r40">



                                        <p class="per-month font-s14">Start with a 15-day free trial. No credit card is required. Subscribe anytime with a <span class="color-hightlight font-w500">30-day money-back guarantee.</span></p>
                                    </div>
                                </th>
                                <th>
                                    <h2 class="plan-name">Team 2K</h2>
                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">36000</p>

                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>








                                    </div>

                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>
                                <th>
                                    <h2 class="plan-name">Team 5K</h2>
                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">50000</p>

                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>








                                    </div>

                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>
                                <th class="position-rel">

                                    <h2 class="plan-name">Team 10K</h2>

                                    <div class="price">
                                        <div class="price-wrapper-tab">
                                            <div class="price-content">
                                                <p class="dollar-sign-flex">₹</p>
                                                <p class="dollars-flex">75000</p>

                                            </div>
                                            <div class="per-month-flex notranslate">Billed annually</div>
                                            <div class="price-content-month notranslate">
                                                Plus GST
                                            </div>
                                        </div>



                                    </div>

                                    <div class="subscription-button">
                                        <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started  margin-t20">Start Free</a>
                                    </div>
                                </th>


                            </tr>
                        </thead>
                    </table>


                    <table class="js-table-scroll-us fixed_headers fixed_headers-4column">
                        <tbody>
                            <tr class="tr-heading">
                                <td class="plan-title">
                                    <img alt="pixpa" src="https://studioassets.pixpa.com/pixpacom/images/menu_svg/icon-clientgallery.png" class="vertical-align-m margin-r10 max-w40 lazyload" /> Client Galleries
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Storage
                                    <div class="tooltiptext">
                                        Includes original images uploaded in client galleries, files for digital products and downloads. Web versions of images used on your website are not counted in this limit.
                                    </div>
                                </td>
                                <td>
                                    <p class="storage-val">2000GB</p>
                                    <p class="storage-photos">500.000+ Images</p>
                                </td>
                                <td>
                                    <p class="storage-val">5000GB</p>
                                    <p class="storage-photos">1.5 million+ Images</p>
                                </td>
                                <td>
                                    <p class="storage-val">10,000GB</p>
                                    <p class="storage-photos">3 million+ Images</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Share Images with Clients
                                    <div class="tooltiptext">
                                        Sharing your work with clients is hassle free with Pixpa's Client Albums.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Simplified Proofing
                                    <div class="tooltiptext">
                                        Streamline your workflow and delight your clients. Enable clients to create favourite lists and mark images as favourites.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Secure Online Delivery of Images
                                    <div class="tooltiptext">
                                        Deliver original files or web versions of your images securely to your clients. Add an extra layer of security using the Download PIN.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>

                            <tr>
                                <td class="tooltip lh-16">
                                    Unlimited Public or Private <br /> Client Albums
                                    <div class="tooltiptext">
                                        Allow public access or password protect your client album to restrict access for selected clients only.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Mobile Optimized Client Albums
                                    <div class="tooltiptext">
                                        Manage all your clients in one place. Delight your clients with mobile-ready client albums that they can browse on any device.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Auto-Expire Albums
                                    <div class="tooltiptext">
                                        Unpublish any client album automatically by setting an expiry date for it.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr class="">
                                <td class="tooltip">
                                    Monitor Clients' Activity
                                    <div class="tooltiptext">
                                        Get notified when your clients login, mark favorites, download or purchase images.
                                    </div>
                                </td>
                                <td>
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>
                                <td>
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>
                                <td>
                                    <span class="has monthly-freedomain-hide active"></span>
                                    <span class="hasnot monthly-freedomain-hide crossnot"></span>
                                </td>

                            </tr>








                            <tr class="tr-heading">
                                <td class="plan-title">
                                    <img alt="pixpa" src="https://studioassets.pixpa.com/pixpacom/images/menu_svg/icon-ecommercegallery.png" class="vertical-align-m margin-r10 max-w40 lazyload" /> E-COMMERCE
                                </td>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Sell images as prints or downloads
                                    <div class="tooltiptext">
                                        Increase your revenue by selling your images as prints or digital downloads.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Auto-fulfilment with Print Labs
                                    <div class="tooltiptext">
                                        Enable auto-fulfilment of your print orders using WHCC or any custom lab of your choice. You can add products with self-fulfilment option as well.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Collect Payments Directly
                                    <div class="tooltiptext">
                                        Connect your Paypal or Stripe account to collect payments directly to your account. No more waiting for payouts.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    No Commissions on Sales
                                    <div class="tooltiptext">
                                        Pixpa does not charge any commissions on your sales - Whether you are selling products or images, you take home all the revenue. Transaction charges from your payment processor will apply.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Discount Coupons
                                    <div class="tooltiptext">
                                        Increase sales by offering discounts or free shipping coupon codes. Offer percentage or flat-amount discount, auto-expire coupons and set a minimum cart value.
                                    </div>
                                </td>

                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Set Taxes &amp; Shipping Rates
                                    <div class="tooltiptext">
                                        Manage taxes and shipping rates based on countries. Create overrides for states / regions.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Checkout on Your Domain
                                    <div class="tooltiptext">
                                        Provide a consistent checkout experience by directing customers to a secure checkout page on your own domain (https://www.yourdomain.com/checkout)
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Abandoned Cart Recovery
                                    <div class="tooltiptext">
                                        Recover revenue by sending automated abandoned cart recovery email to customers did not complete their purchase on your website.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>
















                            <tr class="tr-heading">
                                <td class="plan-title">
                                    INCLUDED
                                </td>

                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="tooltip">
                                    Unlimited Gallery Apps
                                    <div class="tooltiptext">
                                        Create unlimited custom gallery apps for your clients. Share your work, build your brand and impress your clients.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Your branding (logo &amp; visual style)
                                    <div class="tooltiptext">
                                        Include your brand logo and customise colors &amp; fonts to personalise your client galleries.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>




                            <tr>
                                <td class="tooltip">
                                    Connect Your Domain
                                    <div class="tooltiptext">
                                        Easily connect your own custom domain name with your Pixpa website
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>


                            <tr>
                                <td class="tooltip">
                                    1 Year Free Domain Name
                                    <div class="tooltiptext">
                                        Get a free domain name for the first year with annual plans.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>

                            <tr>
                                <td class="tooltip">
                                    Free SSL Certificate
                                    <div class="tooltiptext">
                                        All Pixpa websites come with a free SSL certificate. This shows your visitors that your website is secure and helps improve your rankings on Google.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>

                            <tr>
                                <td class="tooltip">
                                    24/7 Customer Support
                                    <div class="tooltiptext">
                                        All Pixpa plans include fast and friendly 24/7 customer support on chat and email.
                                    </div>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>
                                <td>
                                    <span class="has"></span>
                                </td>

                            </tr>

                            <tr>
                                <td></td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                                <td>
                                    <a href="https://studio.pixpa.com/signup" class="button v-pixpa-green v-pixpa-green-small get-started margin-t0">Start Free</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="desktop-hide">
                    <div class="border-b0 subscription-plans-grid-items client-gallery-studio-plan js-clientgallery-content-photographerplan active">
                        <div class="setting-start-plan subscription-plans-grid-items proofing-plan-essentials">
                            <h2 class="plan-name">Essentials</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">3600</p>
                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>
                            </div>
                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>10GB storage <small>3,000+ Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>

                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-essentials" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>
                        <div class="setting-start-plan subscription-plans-grid-items proofing-plan-standard">
                            <h2 class="plan-name">Standard</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">10000</p>

                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>
                            </div>
                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>100GB storage <small>10,000+ Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>

                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-standard" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>

                        <div class="setting-start-plan subscription-plans-grid-items proofing-plan-growth">
                            <h2 class="plan-name">Growth</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">16000</p>

                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>
                            </div>

                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>500GB storage <small>60,000+ Images Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>

                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-growth" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>

                        <div class="setting-start-plan subscription-plans-grid-items proofing-plan-premium">
                            <h2 class="plan-name">Premium</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">21000</p>

                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>


                            </div>

                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>1,000GB storage <small>300,000+ Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>

                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-premium" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>
                        <div class="setting-start-plan subscription-plans-grid-items proofing-plan-unlimited">
                            <h2 class="plan-name">Unlimited</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">36000</p>

                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>


                            </div>

                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>Unlimited storage <small>Unlimited Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>

                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-unlimited" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>
                    </div>
                    <div class="border-b0 subscription-plans-grid-items client-gallery-studio-plan js-clientgallery-content-studioplan">
                        <div class="setting-start-plan subscription-plans-grid-items js-proofing-plan-team-2K">
                            <h2 class="plan-name">Team 2K</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">36000</p>

                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>
                            </div>
                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>2000GB storage <small>500.000+ Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>

                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-team-2K" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>
                        <div class="setting-start-plan subscription-plans-grid-items js-proofing-plan-team-5K">
                            <h2 class="plan-name">Team 5K</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">35000</p>

                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>
                            </div>
                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>5000GB storage <small>1.5 million+ Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>

                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-team-5K" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>
                        <div class="setting-start-plan subscription-plans-grid-items js-proofing-plan-team-10K">
                            <h2 class="plan-name">Team 10K</h2>
                            <div class="price">
                                <div class="price-wrapper-tab">
                                    <div class="price-content">
                                        <p class="dollar-sign-flex">₹</p>
                                        <p class="dollars-flex">75000</p>

                                    </div>
                                    <div class="per-month-flex notranslate">Billed annually</div>
                                    <div class="price-content-month notranslate">
                                        Plus GST
                                    </div>
                                </div>
                            </div>
                            <div class="subscription-button">
                                <a href="https://studio.pixpa.com/signup" class="button v-pixpa-white get-started">Start Free</a>
                            </div>
                            <div class="plan-desc">
                                <ul>
                                    <li>10,000GB storage <small>3 million+ Images</small></li>
                                    <li>Share Images with Clients</li>
                                    <li>Sell images as prints or downloads</li>
                                    <li>No Commissions on Sales</li>
                                    <li>Unlimited Gallery Apps</li>
                                    <li>1 Year Free Domain Name</li>
                                    <li>&nbsp;</li>
                                </ul>
                            </div>
                            <a href="javascript:void(0);" data-content="subscription-plan-photographer-proofing-plan-team-10K" class="js-subscription-plan-full-feature button v-button-outline">See Full Features</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default PricingTable;
