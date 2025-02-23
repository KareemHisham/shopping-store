import { CsButton } from "../Index"
const Pagination = () => {
    return (
        <div className='flex justify-center items-center gap-2 mt-6'>
            {/* Previous Button */}
            <CsButton type="button" classes='btn_pagination'>Previous</CsButton>
            <ul className='flex gap-3'>
                <li className='cursor-pointer btn_pagination'>1</li>
                <li className='cursor-pointer btn_pagination'>2</li>
                <li className='cursor-pointer btn_pagination'>3</li>
                <li className='cursor-pointer btn_pagination'>4</li>
                <li className='cursor-pointer btn_pagination'>5</li>
            </ul>
            {/* Next Button */}
            <CsButton type="button" classes='btn_pagination'>Next</CsButton>

        </div>
    )
}

export default Pagination