document.addEventListener('DOMContentLoaded', function() {
    /************************************/
    const videoSources = ['data/videos/penguins.mp4'];
    const gallery = document.getElementById('video-gallery');

    videoSources.forEach(videoSrc => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');
        const video = document.createElement('video');
        video.src = videoSrc;
        video.controls = true;
        videoContainer.appendChild(video);
        gallery.appendChild(videoContainer);
    });

    /************************************/
    const pdfSources = [
        'data/pdfs/CV_ClaudioMansillaBr__EN_.pdf', 
    ];

    const pdfGallery = document.getElementById('pdf-gallery');
    pdfSources.forEach(pdfSrc => {
        const pdfContainer = document.createElement('div');
        pdfContainer.classList.add('pdf-container');
        const iframe = document.createElement('iframe');
        iframe.src = pdfSrc;
        iframe.style.width = '180%';
        iframe.style.height = '500px';
        pdfContainer.appendChild(iframe);
        pdfGallery.appendChild(pdfContainer);
    });
    /************************************/

    const audioSources = [
        'data/audios/01.mp3', 'data/audios/02.mp3', 'data/audios/03.mp3'
    ];

    const audioGallery = document.getElementById('audio-gallery');
    audioSources.forEach(audioSrc => {
        const audioContainer = document.createElement('div');
        audioContainer.classList.add('audio-container');
        const audio = document.createElement('audio');
        audio.src = audioSrc;
        audio.controls = true;
        audioContainer.appendChild(audio);
        audioGallery.appendChild(audioContainer);
    });
});
