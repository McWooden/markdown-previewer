import {marked} from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faDisplay, faCompress } from '@fortawesome/free-solid-svg-icons'

export default function Preview({text, expandPreview, setExpandPreview, expandEditor}) {
    const html = marked.parse(text)
    return (
        <div className={`container myCard bg-light my-5 preview shadow ${expandEditor&&'d-none'} ${expandPreview&&'expand'}`}>
            <div className={`header bg-info p-2 d-flex align-items-center`}>
                <FontAwesomeIcon icon={faDisplay}/>
                <p className="fw-semibold m-0 ms-2">Preview</p>
                <FontAwesomeIcon icon={expandPreview?faCompress:faExpand} className='fly-btn shadow p-2 fz-2' onClick={() => setExpandPreview(!expandPreview)}/>
            </div>
            <div id="preview" className="m-2 p-2 border" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}