document.addEventListener('DOMContentLoaded', function() {
    const videoSources = [
        'path/to/your/video1.mp4',
        'path/to/your/video2.mp4',
        // Add more video sources here
    ];

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
});
