
const AssetsUtils = {
    getAssetsFile: (uri: string, type?: string) => {
        let path = `../assets/`

        if(type){
            path += type
        }

        if(uri.indexOf('/') !== 0){
            path += '/'
        }
        path += uri

        return new URL(path, import.meta.url).href
    }
}

export default AssetsUtils