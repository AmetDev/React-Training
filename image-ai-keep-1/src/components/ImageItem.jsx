import { document } from "postcss";
import { useEffect, useRef } from "react"
const ImageItem = currentElement => {
	return (
		<>
			<div className='bg-white flex '>
				<img src={currentElement.url} alt='' />
			<div>
<div className="m-5">{currentElement.title}</div>
        </div>	
    </div>
		</>
	)
}

export default ImageItem
