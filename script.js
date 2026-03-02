const playlist = [
    { title: "Aishiteitaoni", src: "【初音ミク】　あいしていたのに　【オリジナル】 [R_g0M5Zmqhg].mp3" },
    { title: "Ice king with the heat", src: "Ice king with the heat (full version) [CpgmJ-IxOvo].mp3" },
    { title: "Admiring you", src: "Hakari Dance Theme「Admiring You」Private Pure Love Train (Idle Death Gamble) Jujutsu Kaisen Fan OST [DrHL4TzX6t8].mp3" },
    { title: "Reincarnation apple", src: "ピノキオピー - 転生林檎 feat. 初音ミク ⧸ Reincarnation Apple [LYWP8HtgeLQ].mp3" },
    { title: "Muffin", src: "BadBoyHalo, CG5, Hyper Potions - MUFFIN (feat. Skeppy, CaptainPuffy) (Official Music Video) [GXqTIbJwwDk].mp3" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let isLooping = false;
let playbackHistory = [];

function init() {
    const taskContainer = document.getElementById("player");
    
taskContainer.innerHTML = `
    <div class="music-card">
        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search for a song..." autocomplete="off">
            <div id="searchResults" class="dropdown"></div>
        </div>

        <div class="song-info">
            <h2 id="song-title">Select a song</h2>
            <p id="artist-name">Local Library</p>
        </div>

        <div class="progress-container">
            <span id="current-time" class="time-label">0:00</span>
            <input type="range" id="progress" value="0" max="100">
            <span id="duration-time" class="time-label">0:00</span>
        </div>

        <div class="controls">
            <button id="loopBtn" class="secondary-btn">Loop: OFF</button>
            <div class="main-controls">
                <button id="prev" class="icon-btn">⏮</button>
                <button id="playBtn" class="play-trigger">PLAY</button>
                <button id="next" class="icon-btn">⏭</button>
            </div>
            <div style="width: 80px;"></div> 
        </div>

        <div class="volume-container">
            <span id="volume-icon" class="volume-icon">🔊</span>
            <input type="range" id="volumeSlider" value="100" max="100">
            <span id="volumeLabel">100%</span>
        </div>
                
        <audio id="main-audio"></audio>
    </div>
`;

    document.getElementById("playBtn").onclick = togglePlay;
    document.getElementById("next").onclick = () => playNext(true);
    document.getElementById("prev").onclick = playPrevious;
    
    const loopBtn = document.getElementById("loopBtn");
    loopBtn.onclick = () => {
        isLooping = !isLooping;
        document.getElementById("main-audio").loop = isLooping;
        loopBtn.textContent = `Loop: ${isLooping ? "ON" : "OFF"}`;
    };

    const audioPlayer = document.getElementById("main-audio");
    audioPlayer.onended = () => { if(!isLooping) playNext(true); };

    setupSearch();
    setupProgress();
    setupVolume();
    loadSong(currentTrackIndex, false); 
}

function loadSong(index, shouldPlay = true) {
    const song = playlist[index];
    const audioPlayer = document.getElementById("main-audio");
    const titleLabel = document.getElementById("song-title");

    audioPlayer.src = song.src;
    titleLabel.textContent = song.title;
    
    if (isPlaying || shouldPlay) {
        audioPlayer.play();
        isPlaying = true;
        document.getElementById("playBtn").textContent = "PAUSE";
    }
}

function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("searchResults");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = "";

        if (query.length < 1) return; 

        const matches = playlist
            .map((song, index) => {
                let score = 0;
                if (song.title.toLowerCase().startsWith(query)) score = 3;
                else if (song.title.toLowerCase().includes(query)) score = 1;
                return { ...song, index, score };
            })
            .filter(song => song.score > 0)
            .sort((a, b) => b.score - a.score);

        matches.forEach(match => {
            const div = document.createElement("div");
            div.className = "search-item";
            div.textContent = match.title;
            
            div.onclick = () => {
                playbackHistory.push(currentTrackIndex); // Save current to history
                currentTrackIndex = match.index;
                loadSong(currentTrackIndex, true);
                
                searchInput.value = "";
                resultsContainer.innerHTML = "";
            };
            resultsContainer.appendChild(div);
        });
    });
}
function togglePlay() {
    const audioPlayer = document.getElementById("main-audio");
    const playBtn = document.getElementById("playBtn");

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying = true;
        playBtn.textContent = "PAUSE";
    } else {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.textContent = "PLAY";
    }
}

function playNext(isShuffle = true) {
    playbackHistory.push(currentTrackIndex);
    if (playbackHistory.length > 10) playbackHistory.shift();

    if (isShuffle) {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * playlist.length);
        } while (nextIndex === currentTrackIndex);
        currentTrackIndex = nextIndex;
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    }
    loadSong(currentTrackIndex);
}

function playPrevious() {
    if (playbackHistory.length > 0) {
        currentTrackIndex = playbackHistory.pop();
        loadSong(currentTrackIndex);
    } else {
        document.getElementById("main-audio").currentTime = 0;
    }
}

function setupProgress() {
    const audioPlayer = document.getElementById("main-audio");
    const progressSlider = document.getElementById("progress");
    const currentTimeLabel = document.getElementById("current-time");
    const durationLabel = document.getElementById("duration-time");

    audioPlayer.ontimeupdate = () => {
        if (audioPlayer.duration) {

            progressSlider.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            
            currentTimeLabel.textContent = formatTime(audioPlayer.currentTime);
            durationLabel.textContent = formatTime(audioPlayer.duration);
        }
    };

    audioPlayer.onloadedmetadata = () => {
        durationLabel.textContent = formatTime(audioPlayer.duration);
    };

    progressSlider.oninput = () => {
        audioPlayer.currentTime = (progressSlider.value / 100) * audioPlayer.duration;
    };
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function setupVolume() {
    const volumeSlider = document.getElementById("volumeSlider");
    const volumeLabel = document.getElementById("volumeLabel");
    const volumeIcon = document.getElementById("volume-icon");
    const audioPlayer = document.getElementById("main-audio"); 

    volumeSlider.oninput = () => {
        const val = volumeSlider.value;
        audioPlayer.volume = val / 100;
        volumeLabel.textContent = `${val}%`;

        if (val == 0) {
            volumeIcon.textContent = "🔇";
        } else if (val < 50) {
            volumeIcon.textContent = "🔈";
        } else {
            volumeIcon.textContent = "🔊";
        }
    };
}

init();