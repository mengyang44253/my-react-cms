class LocalCache{
	getCache(key){
		const value=window.localStorage.getItem(key)
		console.log(value)
		if (value) {
			return JSON.parse(value)
		}else{
			return null
		}
	}

	setCache(key,value){
		window.localStorage.setItem(key,JSON.stringify(value))
	}

	deleteCache(key){
		window.localStorage.removeItem(key)
	}

	clearCache(){
		window.localStorage.clear()
	}
}

export default new LocalCache()