function switchToVideo(videoId) {
    // Pause all videos
    document.getElementById('video1').querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    document.getElementById('video2').querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

    // Hide all videos
    document.getElementById('video1').style.display = 'none';
    document.getElementById('video2').style.display = 'none';

    // Show the selected video
    document.getElementById(videoId).style.display = 'block';
}
function switchPhoto(photoId) {
    // Hide all photos
    document.getElementById('photo1').style.display = 'none';
    document.getElementById('photo2').style.display = 'none';

    // Show the selected photo
    document.getElementById(photoId).style.display = 'block';
}
function rateSong(rating) {
    alert('Thank you for rating the song ' + rating + ' hearts!');
}

        function calculateScore(name) {
            // Always return 100 as the score
            return 100;
        }
        
        function calculateLove() {
            // Get the names from the input fields
            const yourName = document.getElementById('yourName').value;
            const partnerName = document.getElementById('partnerName').value;
        
            // Calculate a simple love score based on the characters in the names
            const loveScore = calculateScore(yourName) + calculateScore(partnerName);
        
            // Display the result
            document.getElementById('result').innerText = `Love Score: ${loveScore}%`;
        }
        