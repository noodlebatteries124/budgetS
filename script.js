const playlist = [
    { title: "Aishiteitanoni [あいしていたのに] - MARETU", src: "songs/【初音ミク】　あいしていたのに　【オリジナル】 [R_g0M5Zmqhg].mp3" },
    // { title: "Ice king with the heat", src: "songs/Ice king with the heat (full version) [CpgmJ-IxOvo].mp3" },
    { title: "Admiring you - PHAROZEN", src: "songs/Hakari Dance Theme「Admiring You」Private Pure Love Train (Idle Death Gamble) Jujutsu Kaisen Fan OST [DrHL4TzX6t8].mp3" },
    { title: "Reincarnation apple - PinocchioP", src: "songs/ピノキオピー - 転生林檎 feat. 初音ミク ⧸ Reincarnation Apple [LYWP8HtgeLQ].mp3" },
    // { title: "Muffin - BadBoyHalo, CG5, Hyper Potions(feat. Skeppy, CaptainPuffy)", src: "songs/BadBoyHalo, CG5, Hyper Potions - MUFFIN (feat. Skeppy, CaptainPuffy) (Official Music Video) [GXqTIbJwwDk].mp3" },
    { title: "Looping the rooms", src: "songs/ループザルーム feat. 初音ミク ⧸ ＂Looping the Rooms＂ ft. Hatsune Miku [icBDYkfxpMs].mp3" },
    { title: "Cool for the summer - Demi Lovato", src: "songs/Demi Lovato - Cool for the Summer (Lyrics) got my mind on your body [h2GQVlMkFiE].mp3" },
    { title: "Pass on - Gregor", src: "songs/[Limbus Company - ost] 사라지네 -  ver.그레고르 [SupBa5JJuO0].mp3" },
    { title: "Fragile - Laufey", src: "songs/Laufey - Fragile (Official Video) [zs7u0qG9pNI].mp3" },
    { title: "Pass on - Heathcliff", src: "songs/Pass on (Vocal. Heathcliff) [xaYyrhdzO30].mp3" },
    { title: "From the start - Laufey", src: "songs/Laufey - From The Start (Official Music Video) [lSD_L-xic9o].mp3" },
    { title: "Ai Dua Em Ve (Low cortisol song) - TIA", src: "songs/TIA - Ai Đưa Em Về ｜ Official M⧸V ｜ Ft. Lê Thiện Hiếu (Low Cortisol Song) [apqe_u3VJQ4].mp3" },
    { title: "Poster Boy - 2Hollis", src: "songs/2hollis - poster boy (official audio) [H2vTrHc-OGk].mp3" },
    // { title: "Montagem Hikari - 0to8", src: "songs/BellyJay - MONTAGEM HIKARI [YO-6FsfdXbo].mp3" },
    { title: "My Jealousy - vivi baby, ovg!", src: "songs/vivi baby, ovg! - MY JEALOUSY (Lyrics) [yGJNdeJTi00].mp3" },
    { title: "Play Date - Melanie Martinez", src: "songs/Melanie Martinez - Play Date [Official Lyric Video] [kknKs7cAcO8].mp3" },
    { title: "Cry - Cigarettes After Sex", src: "songs/Cry - Cigarettes After Sex [3XqqkrJENB4].mp3" },
    { title: "Let Down - RadioHead", src: "songs/Let Down (Remastered) [ZVgHPSyEIqk].mp3" },
    { title: "world.execute(me) - Mili", src: "songs/Mili - world.execute(me); [ESx_hy1n7HA].mp3" },
    { title: "Porter Robinson & Madeon - Shelter", src: "songs/Porter Robinson & Madeon - Shelter (Official Audio) [HQnC1UHBvWA].mp3" },
    { title: "She & Him - I Thought I Saw Your Face Today", src: "songs/She & Him - I Thought I Saw Your Face Today (Official Lyric Video) [pyGU-UudvrM].mp3" },
    { title: "Sparkle 「スパークル」「Movie Version」- Radwimps", src: "songs/Sparkle 「スパークル」「Movie Version」「君の名は。」 [tpH8TEkKQI4].mp3" },
    { title: "Tracing That Dream - YOASOBI", src: "songs/YOASOBI「あの夢をなぞって」 Official Music Video [sAuEeM_6zpk].mp3" },
    { title: "Imposter Syndrome - Sidney Gish", src: "songs/Impostor Syndrome [GwSSrwryxN0].mp3" },
    { title: "Big Time Rush - Worldwide", src: "songs/Big Time Rush - Worldwide (Official Video) [2EDCpDXMowc].mp3" },
    { title: "R.I.P - Language of the Lost ft. Kasane Teto SV (SynthV Original Song)", src: "songs/R.I.P - Language of the Lost ft. Kasane Teto SV (SynthV Original Song) [1xEfMnXyGkA].mp3" },
    { title: "Would You Fall In Love With Me Again - EPIC the musical", src: "songs/Would You Fall In Love With Me Again (but they overlap at the end) [bNs8vJnEbyY].mp3" },
    { title: "Hour girl (unc lei heng)", src: "songs/小时姑娘 - 愛殤 ｜ 清風過 曳燭光 獨舞無人欣賞｜ [動態歌詞 Lyric Video] [FFYPfn8sZ18].mp3" },
    { title: "張遠 - 嘉賓 (taxi vibe)", src: "songs/張遠 - 嘉賓【高音質｜動態歌詞Lyrics】♫『感謝你特別邀請，來見證你的愛情。』Zhang Yuan-Khách [jPzkNvWOcGc].mp3" },
    { title: "Avril Lavigne - Here's to Never Growing Up", src: "songs/Avril Lavigne - Here's to Never Growing Up (Official Video) [sXd2WxoOP5g].mp3" },
    { title: "Cry for Me x Hit the Jackpot x Bang Bang Bang x Judas - Spikecation", src: "songs/Cry for Me x Hit the Jackpot x Bang Bang Bang x Judas [ylUE5szSpew].mp3" },
    { title: "HELP!! - Kobo Kaneru", src: "songs/HELP!! [z2tDtdHHAHg].mp3" },
    { title: "Ripples Of Past Reverie - HOYO-MiX", src: "songs/Ripples Of Past Reverie - HOYO-MiX ｜ Cassie Wei ｜ Official English Full Lyrics Honkai Star Rail 3.7 [qtacWBS_vSo].mp3" },
    { title: "ZAKO - Hiiragi Magnetite", src: "songs/雑魚 ⧸ 亞北ネル [kqj7b59D85Y].mp3" },
    { title: "Katy Perry - Teenage Dream", src: "songs/Katy Perry - Teenage Dream (Official Music Video) [98WtmW-lfeE].mp3" },
    { title: "음율 (UmYull) X The Spike Cross - 'See you tomorrow, Sunset'", src: "songs/음율 (UmYull) X The Spike Cross - 'See you tomorrow, Sunset' [EfhkFhOMJkQ].mp3" }
    
];

let currentTrackIndex = 0;
let isPlaying = false;
let isLooping = false;
let playbackHistory = [];
let recentlyPlayed = [];
const RECENT_LIMIT = 7;

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
    audioPlayer.addEventListener("ended", () => {
        if (!isLooping) {
            playNext(true);
        }
    });
    
    if ('mediaSession' in navigator) {

        navigator.mediaSession.setActionHandler('nexttrack', () => {
            playNext(true);
        });

        navigator.mediaSession.setActionHandler('previoustrack', () => {
            playPrevious();
        });

        navigator.mediaSession.setActionHandler('play', () => {
            togglePlay();
        });

        navigator.mediaSession.setActionHandler('pause', () => {
            togglePlay();
        });
    }
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

    if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: song.title,
        artist: song.artist || "Unknown Artist",
        album: song.album || "My Playlist",        
        });
    }
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

// function playNext(isShuffle = true) {
//     playbackHistory.push(currentTrackIndex);
//     if (playbackHistory.length > 10) playbackHistory.shift();

//     if (isShuffle) {
//         let nextIndex;
//         do {
//             nextIndex = Math.floor(Math.random() * playlist.length);
//         } while (nextIndex === currentTrackIndex);
//         currentTrackIndex = nextIndex;
//     } else {
//         currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
//     }
//     loadSong(currentTrackIndex);
// }
function playNext(isShuffle = true) {
    playbackHistory.push(currentTrackIndex);

    if (playbackHistory.length > 15) {
        playbackHistory.shift();
    }

    if (isShuffle) {
        let availableIndexes = [];

        for (let i = 0; i < playlist.length; i++) {
            if (
                i !== currentTrackIndex &&
                !recentlyPlayed.includes(i)
            ) {
                availableIndexes.push(i);
            }
        }

        if (availableIndexes.length === 0) {
            recentlyPlayed = [];
            availableIndexes = playlist
                .map((_, i) => i)
                .filter(i => i !== currentTrackIndex);
        }

        const randomPos = Math.floor(Math.random() * availableIndexes.length);

        currentTrackIndex = availableIndexes[randomPos];

        recentlyPlayed.push(currentTrackIndex);

        if (recentlyPlayed.length > RECENT_LIMIT) {
            recentlyPlayed.shift();
        }

    } else {
        currentTrackIndex =
            (currentTrackIndex + 1) % playlist.length;
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