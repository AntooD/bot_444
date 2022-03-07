const rwClient = require("./twitterClient.js")


const pathToFile = "./media/test.mp4"



    const tweet = async () => {
    try {
        const mediaIdVideo = await rwClient.v1.uploadMedia(pathToFile, { mimetype: 'EUploadMimeType.Mp4' },{longvideo:'true'});
        await rwClient.v1.tweet("Je tweet cette vidéo avec Javascript :", { media_ids: mediaIdVideo });

            
    } catch (e) {
        console.error(e)
    }
}
    
tweet()


