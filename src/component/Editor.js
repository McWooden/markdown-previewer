import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCode, faCompress } from '@fortawesome/free-solid-svg-icons'

export default function Editor({text, changeText, expandEditor, setExpandEditor, expandPreview}) {
    return (
        <div className={`container myCard bg-light my-5 mx-0 editor ${expandPreview&&'d-none'}`}>
            <div className={`header bg-info p-2 d-flex align-items-center`}>
                <FontAwesomeIcon icon={faCode}/>
                <p className="fw-semibold m-0 ms-2">Editor</p>
                <FontAwesomeIcon icon={expandEditor?faCompress:faExpand} className='fly-btn shadow p-2 fz-2' onClick={() => setExpandEditor(!expandEditor)}/>
            </div>
            <div className="body">
                <textarea onChange={changeText} id="editor" className={`form-control my-2 ${expandEditor&&'expand'}`} placeholder="Ketik Sesuatu disini!" value={text}/>
            </div>
        </div>
    )
}