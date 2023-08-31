const ImageItem = currentElement => {
	console.log(currentElement)
	return (
		<>
			<div className='bg-white'>
				<img src={currentElement.url} alt='' />
				<div>{currentElement.title}</div>
			</div>
		</>
	)
}

export default ImageItem
