import ButtonPrint from "../common/ButtonPrint"
import InputControl from "../common/inputControl"

function Usage() {
    return <>
        <div className='stylerow'>
            <div className="d-flex flex flex-column gap-4">
                <InputControl text="Usage limit for each voucher" placeholder="464" width="405px" />
                <InputControl text="Usage limit per user" placeholder="Unlimited use" width="405px" />
            </div>
        </div>

        <ButtonPrint data="add" />

    </>
}

export default Usage