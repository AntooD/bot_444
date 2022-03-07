const rwClient = require("./twitterClient.js")


    var  min = 1
    var max = 3
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    var song = getRndInteger(min, max)

    const pathToFile = "./media/" + song + ".mp4"



    const tweet = async () => {
    try {
        const mediaIdVideo = await rwClient.v1.uploadMedia(pathToFile, { mimetype: 'EUploadMimeType.Mp4' },{longvideo:'true'});
        await rwClient.v1.tweet("Je tweet cette vidéo avec Javascript :", { media_ids: mediaIdVideo });

            
    } catch (e) {
        console.error(e)
    }
}
    
tweet()


