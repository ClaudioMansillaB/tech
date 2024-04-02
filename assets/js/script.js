document.addEventListener('DOMContentLoaded', function() {
    /************************************/
    const videoSources = ['data/videos/myvideo.mp4'];
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
        'data/pdfs/mypdf.pdf', 
    ];

    const pdfGallery = document.getElementById('pdf-gallery');
    pdfSources.forEach(pdfSrc => {
        const pdfContainer = document.createElement('div');
        pdfContainer.classList.add('pdf-container');
        const iframe = document.createElement('iframe');
        iframe.src = pdfSrc;
        iframe.style.width = '100%';
        iframe.style.height = '300px';
        pdfContainer.appendChild(iframe);
        pdfGallery.appendChild(pdfContainer);
    });
    /************************************/

    const audioNames = ['Jazz in Paris', 'Moonlight Sonata', 'New York Mood'];
    const container = document.getElementById('audio-gallery');

    audioNames.forEach(name => {
        const div = document.createElement('div');
        div.classList.add('audio-item');
        div.textContent = name;
        div.addEventListener('click', function() {
            console.log(`You clicked on: ${name}`); 

        });
        container.appendChild(div);
    });
});
