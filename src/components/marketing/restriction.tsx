import ButtonPrint from "../common/ButtonPrint"
import InputControl from "../common/inputControl"

function Restriction() {
    return <>
        <div className='stylerow'>
            <div className="">

                <div className="d-flex justify-content-between flex-wrap">

                    <div className="d-flex align-items-center flex-1 mb-4 mr-3">
                        <p className="label">Minimum purchase value</p>
                        <input type="text" className={`main-input`} placeholder="placeholder" />
                    </div>
                    <div className="d-flex align-items-center flex-1 mb-4">
                        <p className="label">Maximum usage limit</p>
                        <input type="text" className={`main-input`} placeholder="placeholder" />
                    </div>

                </div>

                <div className="line mb-4 mt-4"></div>
                
                
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="d-flex align-items-center flex-1 mb-4 mr-3">
                        <p className="label">Products</p>
                        <input type="text" className={`main-input`} placeholder="Search for Products" />
                    </div>
                    <div className="d-flex align-items-center flex-1 mb-4">
                        <p className="label">Excluded products</p>
                        <input type="text" className={`main-input`} placeholder="Search for product" />
                    </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap">
                    <div className='d-flex align-items-center mb-4 mr-3 flex-1'>
                        <p className='label'>Categories</p>
                        <select name="cars" id="cars" style={{ width: "100%" }} placeholder="tes" className='main-input'>
                            <option value="" disabled selected>Select your option</option>
                            <option value="saab">saab</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Audi">Audi</option>
                        </select>
                    </div>
                    <div className='d-flex align-items-center mb-4 flex-1'>
                        <p className='label'>Excluded Categories</p>
                        <select name="cars" id="cars" style={{ width: "100%" }} className='main-input'>
                            <option value="" disabled selected>Select your option</option>

                            <option value="volvo">volvo</option>
                            <option value="saab">saab</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Audi">Audi</option>
                        </select>
                    </div>
                </div>

                {/* line */}
                <div className="line mb-4 mt-4"></div>

                <div className="mb-4">
                    <p className='label mb-3'>Coupon use alonet</p>
                    <div className='d-flex align-items-baseline'>
                        <input type="checkbox" className="me-3" />
                        <span className='d-inline-block ml-3'>Select this option to make the coupon not redeemable in <br /> conjunction with other coupons.</span>
                    </div>
                </div>

                <div>
                    <p className='label mb-3'>Exclude discounted products</p>
                    <div className='d-flex align-items-baseline'>
                        <input type="checkbox" className="me-3"/>
                        <span className='d-inline-block ml-3'>Select this option if the coupon is not applied to discounted products. Single product coupons will only work if the product does not fall below Discount. Coupons for all products will work if the products The one in the basket does not fall under the discount.</span>
                    </div>
                </div>

            </div>
        </div>

        <ButtonPrint data="add" />
    </>
}

export default Restriction