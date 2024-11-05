
    let songs = [];

    // Fungsi untuk memuat lirik dari file teks
    async function loadLyrics(file) {
        const response = await fetch(file);
        const lyrics = await response.text();
        return lyrics.replace(/\n/g, "<br>");
    }
    
    // Fungsi untuk menampilkan detail lagu di halaman
    async function loadSong(song) {
        document.getElementById("songTitle").textContent = song.title;
        document.getElementById("artistName").textContent = song.artist;
        document.getElementById("albumImage").src = song.albumCover;
        document.getElementById("audioPlayer").src = song.audioSrc;
    
        const lyrics = await loadLyrics(song.lyricsFile);
        document.getElementById("lyrics").innerHTML = lyrics;
    }
    
    // Fungsi untuk memuat data lagu dari file JSON
    async function loadSongs() {
        const response = await fetch('song.json');
        songs = await response.json();
        loadSong(songs[0]); // Muat lagu pertama sebagai default
    }
    
    // Kontrol pemutaran audio
    document.addEventListener("DOMContentLoaded", () => {
    
      // Fungsi play/pause untuk audio
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = "Play";
        }
    });
    
    
        loadSongs(); // Muat daftar lagu saat halaman dimuat
    });
