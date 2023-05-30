import ButtonPrint from "../common/ButtonPrint"
import InputControl from "../common/inputControl"

function General() {
    return <>
        <div className='stylerow'>
            <div className="d-flex flex flex-column gap-4">
                <InputControl text="Discount type" placeholder="Fixed cart discount" width="405px"/>
                <InputControl text="Coupon value" placeholder="234" width="405px"/>
                <InputControl text="Coupon expiration date" placeholder="dd/mm/yyyy" width="405px"/>
            </div>
        </div>

        <ButtonPrint data="add" />

    </>
}

export default General