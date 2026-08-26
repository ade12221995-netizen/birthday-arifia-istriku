/**
 * ====================================================================
 * WEBSITE KEJUTAN ULANG TAHUN UNTUK ISTRI TERCINTA: ARIFIA MAULIDA
 * ====================================================================
 * 
 * PANDUAN PENGGUNAAN & PENGATURAN (UNTUK SUAMI):
 * 
 * 1. LINK YOUTUBE BACKSOUND:
 *    Ganti nilai variabel `youtubeMusic` di bawah dengan link YouTube lagu romantis
 *    Contoh: "https://www.youtube.com/watch?v=kocpt37eW8s"
 * 
 * 2. FOTO-FOTO KENANGAN (GOOGLE DRIVE):
 *    Ganti link di dalam array `photos` di bawah dengan link file Google Drive foto Anda dan istri.
 *    Link format apa saja (sharing link, view link, id link) akan otomatis dikonversi ke gambar.
 *    Pastikan akses file Google Drive sudah diatur ke "Siapa saja yang memiliki link" (Anyone with link).
 * 
 * 3. PESAN & NAMA:
 *    Semua teks pesan sudah lengkap sesuai permintaan, namun Anda bebas mengedit jika ingin
 *    menambahkan panggilan sayang atau tanggal istimewa.
 * ====================================================================
 */

/* ====================================================================
   1. KONFIGURASI UTAMA (SILAKAN EDIT DI SINI)
   ==================================================================== */

// GANTI LINK YOUTUBE INI DENGAN LAGU PILIHAN ANDA (Bisa lagu romantis favorit kalian berdua)
const youtubeMusic = "https://www.youtube.com/watch?v=ox6QlP5237s&list=RDox6QlP5237s&start_radio=1"; // Contoh: Romantic Piano / Love Theme

// FOTO KENANGAN & CAPTION (Bisa tambahkan atau ganti link Google Drive Anda)
const photos = [
  {
    image: "https://drive.google.com/file/d/1UGsCX2avbOndvkUJJnR3YV-2qibJSxDm/view", // GANTI DENGAN LINK GOOGLE DRIVE FOTO 1
    caption: "Awal dari perjalanan kita ❤️ Dari dua orang yang belajar saling mengenal dan menyayangi."
  },
  {
    image: "https://drive.google.com/file/d/1SebDDVgd5W5PpJ5GX5jT32uC5VdT0jRe/view", // GANTI DENGAN LINK GOOGLE DRIVE FOTO 2
    caption: "Senyummu selalu punya cara ajaib untuk membuat hari-hari lelahku jadi lebih tenang dan indah 🥰"
  },
  {
    image: "https://drive.google.com/file/d/1EoPa_ACIrNkgkWOQ8amLI3sdQBMNyN4K/view", // GANTI DENGAN LINK GOOGLE DRIVE FOTO 3
    caption: "Sekarang kita punya keluarga kecil yang luar biasa 👨‍👩‍👧❤️ Si kecil jadi berkah terindah kita."
  },
  {
    image: "https://drive.google.com/file/d/1VpBMGXiIKI0MskvDQL9QscnMI7XOjyRQ/view", // GANTI DENGAN LINK GOOGLE DRIVE FOTO 4
    caption: "Menua bersama kamu adalah petualangan paling membahagiakan seumur hidupku ✨"
  }
];

// PESAN-PESAN MANIS HALAMAN 4
const sweetMessages = [
  {
    number: "Pesan 1 dari 5",
    icon: "🏠",
    text: "Terima kasih sudah menjadi rumah yang paling nyaman untuk pulang ❤️ Di mana pun aku berada, kamu adalah tempat hatiku selalu ingin kembali."
  },
  {
    number: "Pesan 2 dari 5",
    icon: "🤝",
    text: "Terima kasih sudah menjadi partner terbaik dalam setiap langkah perjalanan hidupku. Berbagi suka, duka, dan segala mimpi masa depan kita."
  },
  {
    number: "Pesan 3 dari 5",
    icon: "😜",
    text: "Kadang kita capek, kadang kita berbeda pendapat, kadang juga sama-sama ngeselin 😂 Tapi justru itu yang bikin cerita kita berwarna dan gak ngebosenin!"
  },
  {
    number: "Pesan 4 dari 5",
    icon: "✨",
    text: "Dari semua lika-liku perjalanan itu, aku selalu bersyukur... karena orang yang Tuhan pilihkan untuk berjalan di sampingku adalah kamu."
  },
  {
    number: "Pesan 5 dari 5",
    icon: "👶",
    text: "Dan bonus terbaik dari perjalanan kita adalah hadirnya si kecil yang membuat rumah kita semakin ramai, penuh tawa, dan penuh cinta 🥰"
  }
];

// TEKS LENGKAP TYPEWRITER UNTUK HALAMAN 8 (PENUTUP)
const finalRomanticText = `Selamat ulang tahun, istriku tercinta...

Terima kasih untuk semua hari yang telah kita lewati.
Untuk tawa, air mata, perjuangan, kelelahan, mimpi, dan semua cerita yang membuat perjalanan kita menjadi begitu berarti.

Aku tidak tahu akan sejauh apa perjalanan hidup kita nanti...
Tapi aku berharap, di setiap langkah yang masih Tuhan berikan...
Aku masih bisa berjalan bersamamu.
Melihat anak kita tumbuh.
Mengejar mimpi-mimpi kita.
Dan tetap menjadi rumah satu sama lain.

Selamat ulang tahun, Arifia Maulida.
Semoga kamu selalu sehat, bahagia, dan dikelilingi oleh hal-hal baik.

Dan semoga...
Aku masih menjadi salah satu alasanmu untuk tersenyum setiap hari. ❤️

Aku mencintaimu.
Hari ini.
Besok.
Dan untuk semua perjalanan yang akan datang. 🥰❤️`;


/* ====================================================================
   2. FUNGSI OTOMATIS KONVERSI GOOGLE DRIVE LINK KE DIRECT IMAGE URL
   ==================================================================== */
function extractGoogleDriveId(url) {
  if (!url || typeof url !== 'string') return null;
  // Format 1: /file/d/FILE_ID/view or /d/FILE_ID
  let match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) return match[1];
  // Format 2: id=FILE_ID
  match = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) return match[1];
  return null;
}

function formatGoogleDriveUrl(url) {
  if (!url || typeof url !== 'string') return '';
  
  // Jika link biasa (bukan Google Drive), gunakan langsung
  if (!url.includes('drive.google.com') && !url.includes('drive.usercontent.google.com')) {
    return url;
  }
  
  const fileId = extractGoogleDriveId(url);
  if (fileId) {
    // lh3.googleusercontent.com/d/ID adalah endpoint paling stabil dan langsung untuk tag <img>
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }
  
  return url;
}

// Multi-tier Fallback Handler jika Google Drive URL membutuhkan endpoint alternatif
window.handleImageFallback = function(img) {
  const driveId = img.getAttribute('data-drive-id');
  const attempt = parseInt(img.getAttribute('data-attempt') || '0', 10);
  
  if (driveId) {
    if (attempt === 0) {
      img.setAttribute('data-attempt', '1');
      img.src = `https://drive.google.com/thumbnail?id=${driveId}&sz=w1600`;
      const blurBg = img.parentElement.querySelector('.photo-blur-bg');
      if (blurBg) blurBg.style.backgroundImage = `url('https://drive.google.com/thumbnail?id=${driveId}&sz=w400')`;
      return;
    } else if (attempt === 1) {
      img.setAttribute('data-attempt', '2');
      img.src = `https://drive.google.com/uc?export=view&id=${driveId}`;
      return;
    }
  }
  
  // Jika semua endpoint gagal
  img.onerror = null;
  img.style.display = 'none';
  const container = img.closest('.photo-container');
  if (container) {
    const existing = container.querySelector('.photo-fallback');
    if (!existing) {
      const fb = document.createElement('div');
      fb.className = 'photo-fallback';
      fb.innerHTML = `
        <div class="fallback-icon">📸❤️</div>
        <p style="font-weight:700; color:var(--deep-plum); margin-bottom:4px;">Foto Kenangan</p>
        <p style="font-size:12px; color:var(--text-muted);">Pastikan akses file Google Drive diatur ke <em>"Siapa saja yang memiliki link"</em></p>
      `;
      container.appendChild(fb);
    }
  }
};


/* ====================================================================
   3. WEB AUDIO SYNTHESIZER (SOUND EFFECTS & ROMANTIC AMBIENT FALLBACK)
   ==================================================================== */
let audioCtx = null;
let isAudioInitialized = false;
let ambientOscillators = [];
let isMusicPlaying = false;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
      isAudioInitialized = true;
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Efek Suara Ringan (Tanpa file mp3 eksternal, 100% instan di HP)
const SoundFX = {
  click: () => {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.09);
    } catch(e) {}
  },
  
  pop: () => {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.13);
    } catch(e) {}
  },

  blow: () => {
    try {
      initAudioContext();
      if (!audioCtx) return;
      // White noise for candle blowing out
      const bufferSize = audioCtx.sampleRate * 0.4;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, audioCtx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.4);
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      whiteNoise.start();
    } catch(e) {}
  },

  chime: () => {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const startTime = audioCtx.currentTime + (idx * 0.1);
        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.65);
      });
    } catch(e) {}
  },

  victory: () => {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const chords = [
        { f: 523.25, d: 0.15 }, // C5
        { f: 659.25, d: 0.15 }, // E5
        { f: 783.99, d: 0.15 }, // G5
        { f: 1046.50, d: 0.5 }  // C6 (hold)
      ];
      let t = audioCtx.currentTime;
      chords.forEach(c => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = c.f;
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + c.d);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + c.d + 0.05);
        t += 0.12;
      });
    } catch(e) {}
  }
};

// Romantic Ambient Music Generator (Looping sweet soft piano-like melody)
let ambientTimer = null;
const melodyNotes = [
  261.63, 329.63, 392.00, 493.88, 523.25, // C4, E4, G4, B4, C5
  440.00, 349.23, 329.63, 293.66, 392.00, // A4, F4, E4, D4, G4
  329.63, 261.63, 293.66, 329.63, 392.00,
  523.25, 493.88, 440.00, 392.00, 329.63
];

let melodyIndex = 0;
function playNextAmbientNote() {
  if (!isMusicPlaying || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    const note = melodyNotes[melodyIndex % melodyNotes.length];
    osc.frequency.setValueAtTime(note, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.6);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 1.7);
    
    melodyIndex++;
    ambientTimer = setTimeout(playNextAmbientNote, 850);
  } catch(e) {
    ambientTimer = setTimeout(playNextAmbientNote, 1000);
  }
}

/* ====================================================================
   4. YOUTUBE IFRAME API INTEGRATION
   ==================================================================== */
let ytPlayer = null;
let isYtReady = false;

function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

window.onYouTubeIframeAPIReady = function() {
  const videoId = extractYouTubeId(youtubeMusic);
  if (!videoId) return;

  try {
    ytPlayer = new YT.Player('ytPlayer', {
      height: '1',
      width: '1',
      videoId: videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'loop': 1,
        'playlist': videoId,
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  } catch(e) {
    console.log("YouTube player init fallback to Web Audio synth");
  }
};

function onPlayerReady(event) {
  isYtReady = true;
}

function toggleMusic(forceState) {
  initAudioContext();
  const newState = forceState !== undefined ? forceState : !isMusicPlaying;
  isMusicPlaying = newState;
  
  const musicBtns = document.querySelectorAll('.music-btn');
  musicBtns.forEach(btn => {
    if (isMusicPlaying) {
      btn.classList.add('playing');
      btn.innerHTML = `<span class="music-icon">🔊</span> Musik ON <div class="equalizer"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>`;
    } else {
      btn.classList.remove('playing');
      btn.innerHTML = `<span class="music-icon">🔇</span> Musik OFF`;
    }
  });

  if (isMusicPlaying) {
    // Coba putar YouTube jika siap
    if (ytPlayer && isYtReady && typeof ytPlayer.playVideo === 'function') {
      try {
        ytPlayer.playVideo();
      } catch(e) {}
    } else {
      // Fallback ke Ambient synthesizer
      if (!ambientTimer) {
        playNextAmbientNote();
      }
    }
    showToast("🎵 Musik cinta mulai diputar...");
  } else {
    if (ytPlayer && isYtReady && typeof ytPlayer.pauseVideo === 'function') {
      try {
        ytPlayer.pauseVideo();
      } catch(e) {}
    }
    if (ambientTimer) {
      clearTimeout(ambientTimer);
      ambientTimer = null;
    }
  }
}


/* ====================================================================
   5. BACKGROUND CANVAS PARTICLES (HEARTS, STARS, FLOATING DOTS)
   ==================================================================== */
const bgCanvas = document.getElementById('bgCanvas');
const bgCtx = bgCanvas.getContext('2d');
let particles = [];

function resizeBgCanvas() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}

class RomanticParticle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * bgCanvas.width;
    this.y = bgCanvas.height + Math.random() * 50;
    this.size = Math.random() * 8 + 4;
    this.speedY = Math.random() * 0.8 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.type = Math.random() > 0.4 ? 'heart' : 'sparkle';
    this.color = ['#ff8da1', '#fda4af', '#f472b6', '#fed7aa', '#fbcfe8'][Math.floor(Math.random() * 5)];
    this.rot = Math.random() * Math.PI;
    this.rotSpeed = (Math.random() - 0.5) * 0.02;
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
    this.rot += this.rotSpeed;
    if (this.y < -30) {
      this.reset();
    }
  }

  draw() {
    bgCtx.save();
    bgCtx.translate(this.x, this.y);
    bgCtx.rotate(this.rot);
    bgCtx.globalAlpha = this.opacity;
    bgCtx.fillStyle = this.color;

    if (this.type === 'heart') {
      const s = this.size * 0.5;
      bgCtx.beginPath();
      bgCtx.moveTo(0, s * 0.3);
      bgCtx.bezierCurveTo(-s, -s * 0.6, -s * 1.3, s * 0.4, 0, s * 1.4);
      bgCtx.bezierCurveTo(s * 1.3, s * 0.4, s, -s * 0.6, 0, s * 0.3);
      bgCtx.fill();
    } else {
      bgCtx.beginPath();
      bgCtx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
      bgCtx.fill();
    }
    bgCtx.restore();
  }
}

function initParticles() {
  resizeBgCanvas();
  particles = [];
  const count = Math.min(Math.floor(window.innerWidth / 14), 45);
  for (let i = 0; i < count; i++) {
    const p = new RomanticParticle();
    p.y = Math.random() * bgCanvas.height;
    particles.push(p);
  }
}

function animateParticles() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}


/* ====================================================================
   6. CONFETTI BURST & RAIN ENGINE
   ==================================================================== */
const confettiCanvas = document.getElementById('confettiCanvas');
const cCtx = confettiCanvas.getContext('2d');
let confettiPieces = [];
let isConfettiActive = false;

function resizeConfettiCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

class ConfettiPiece {
  constructor(x, y, isExplosion = true) {
    this.x = x || confettiCanvas.width / 2;
    this.y = y || confettiCanvas.height / 2;
    this.size = Math.random() * 8 + 6;
    this.color = ['#ff4b72', '#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6', '#fbbf24', '#f43f5e'][Math.floor(Math.random() * 8)];
    this.isHeart = Math.random() > 0.6;
    
    if (isExplosion) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - 4;
    } else {
      this.vx = (Math.random() - 0.5) * 4;
      this.vy = Math.random() * 3 + 2;
    }
    
    this.gravity = 0.28;
    this.friction = 0.98;
    this.rotation = Math.random() * 360;
    this.rotSpeed = (Math.random() - 0.5) * 12;
    this.opacity = 1;
    this.life = Math.random() * 60 + 60;
  }

  update() {
    this.vx *= this.friction;
    this.vy = this.vy * this.friction + this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotSpeed;
    this.life--;
    if (this.life < 20) {
      this.opacity = this.life / 20;
    }
  }

  draw() {
    cCtx.save();
    cCtx.translate(this.x, this.y);
    cCtx.rotate((this.rotation * Math.PI) / 180);
    cCtx.globalAlpha = Math.max(0, this.opacity);
    cCtx.fillStyle = this.color;

    if (this.isHeart) {
      const s = this.size * 0.6;
      cCtx.beginPath();
      cCtx.moveTo(0, s * 0.3);
      cCtx.bezierCurveTo(-s, -s * 0.6, -s * 1.3, s * 0.4, 0, s * 1.4);
      cCtx.bezierCurveTo(s * 1.3, s * 0.4, s, -s * 0.6, 0, s * 0.3);
      cCtx.fill();
    } else {
      cCtx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
    }
    cCtx.restore();
  }
}

function shootConfetti(count = 70, x, y) {
  resizeConfettiCanvas();
  for (let i = 0; i < count; i++) {
    confettiPieces.push(new ConfettiPiece(x, y, true));
  }
  if (!isConfettiActive) {
    isConfettiActive = true;
    requestAnimationFrame(renderConfetti);
  }
}

function rainConfetti(durationMs = 2500) {
  resizeConfettiCanvas();
  const startTime = Date.now();
  const interval = setInterval(() => {
    if (Date.now() - startTime > durationMs) {
      clearInterval(interval);
      return;
    }
    for (let i = 0; i < 6; i++) {
      const p = new ConfettiPiece(Math.random() * confettiCanvas.width, -10, false);
      confettiPieces.push(p);
    }
    if (!isConfettiActive) {
      isConfettiActive = true;
      requestAnimationFrame(renderConfetti);
    }
  }, 80);
}

function renderConfetti() {
  cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces = confettiPieces.filter(p => p.life > 0 && p.y < confettiCanvas.height + 50);
  confettiPieces.forEach(p => {
    p.update();
    p.draw();
  });
  if (confettiPieces.length > 0) {
    requestAnimationFrame(renderConfetti);
  } else {
    isConfettiActive = false;
  }
}


/* ====================================================================
   7. STATE MANAGEMENT & SCENE NAVIGATION (8 SCENES)
   ==================================================================== */
let currentScene = 1;
const totalScenes = 8;

function updateStepIndicators() {
  const dots = document.querySelectorAll('.step-dot');
  dots.forEach((dot, idx) => {
    const stepNum = idx + 1;
    dot.classList.remove('active', 'completed');
    if (stepNum === currentScene) {
      dot.classList.add('active');
    } else if (stepNum < currentScene) {
      dot.classList.add('completed');
    }
  });
}

function goToScene(sceneNumber) {
  if (sceneNumber < 1 || sceneNumber > totalScenes) return;

  const currentEl = document.getElementById(`scene-${currentScene}`);
  const targetEl = document.getElementById(`scene-${sceneNumber}`);

  if (currentEl) {
    currentEl.classList.remove('active');
  }

  currentScene = sceneNumber;
  updateStepIndicators();

  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    if (targetEl) {
      targetEl.classList.add('active');
      onSceneEntered(sceneNumber);
    }
  }, 200);
}

function nextScene() {
  SoundFX.click();
  goToScene(currentScene + 1);
}

function prevScene() {
  SoundFX.click();
  goToScene(currentScene - 1);
}

function showToast(message) {
  const toast = document.getElementById('floatingToast');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// Handler khusus saat masuk ke scene tertentu
function onSceneEntered(sceneNum) {
  switch (sceneNum) {
    case 1:
      animateWelcomeBubbles();
      break;
    case 2:
      shootConfetti(60);
      SoundFX.chime();
      break;
    case 3:
      resetRunawayButton();
      break;
    case 4:
      renderMessageCard(currentMsgIndex);
      break;
    case 5:
      renderGallery();
      break;
    case 6:
      resetQuiz();
      break;
    case 7:
      resetGiftBox();
      break;
    case 8:
      startTypewriterEffect();
      shootConfetti(80);
      SoundFX.victory();
      break;
  }
}


/* ====================================================================
   8. HALAMAN 1 — WELCOME / RAHASIA BESAR 🎉
   ==================================================================== */
function animateWelcomeBubbles() {
  const bubbles = document.querySelectorAll('#scene-1 .bubble');
  bubbles.forEach((b, idx) => {
    b.classList.remove('show');
    setTimeout(() => {
      b.classList.add('show');
    }, (idx + 1) * 600);
  });
}

function onWelcomeClick(e) {
  const btn = e.currentTarget;
  btn.classList.add('shake-anim');
  
  if (navigator.vibrate) {
    navigator.vibrate([80, 50, 100]);
  }

  SoundFX.pop();
  shootConfetti(80, window.innerWidth / 2, window.innerHeight * 0.6);

  // Jika musik belum menyala, langsung mulai otomatis saat klik pertama
  if (!isMusicPlaying) {
    toggleMusic(true);
  }

  setTimeout(() => {
    goToScene(2);
    btn.classList.remove('shake-anim');
  }, 500);
}


/* ====================================================================
   9. HALAMAN 2 — SELAMAT ULANG TAHUN 🎂 (TIUP LILIN)
   ==================================================================== */
let isCandleBlown = false;

function blowCandle() {
  if (isCandleBlown) return;
  isCandleBlown = true;

  SoundFX.blow();
  const flame = document.getElementById('candleFlame');
  const smoke = document.getElementById('smokePuff');
  const blowBtn = document.getElementById('blowCandleBtn');
  const wishText = document.getElementById('cakeWishResult');
  const nextBtn = document.getElementById('cakeNextBtn');

  if (flame) flame.classList.add('blown-out');
  if (smoke) smoke.classList.add('rise');
  if (blowBtn) blowBtn.style.display = 'none';

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 150]);
  }

  setTimeout(() => {
    SoundFX.chime();
    shootConfetti(100);
    rainConfetti(3000);
    if (wishText) wishText.style.display = 'block';
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }, 400);
}


/* ====================================================================
   10. HALAMAN 3 — TOMBOL JAHIL 😂 ("BIASA AJA" RUNAWAY BUTTON)
   ==================================================================== */
let runawayTries = 0;
const funnyTexts = [
  "Eits... jangan pilih itu dong 😂",
  "Yakin nih? Coba pilih yang satunya 😜",
  "Tombol ini lagi malu-malu 🤭",
  "Gak boleh biasa aja hari ini! Harus senang! 😆",
  "Wleee gak kena 😝 Senang kan? Ayo dong!"
];

function moveRunawayButton(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('btnBiasaAja');
  const zone = document.getElementById('playfulZone');
  const toastText = document.getElementById('funnyResponseText');
  if (!btn || !zone) return;

  runawayTries++;
  SoundFX.pop();

  if (navigator.vibrate) {
    navigator.vibrate(40);
  }

  // Tampilkan teks lucu bergantian
  if (toastText) {
    const textIdx = (runawayTries - 1) % funnyTexts.length;
    toastText.innerText = funnyTexts[textIdx];
  }

  // Setelah 4 kali jahil, tombol akhirnya menyerah
  if (runawayTries >= 4) {
    btn.classList.add('relented');
    btn.innerHTML = "😂 OKE DEH, SENANG JUGA!";
    btn.style.position = "static";
    btn.style.transform = "none";
    if (toastText) {
      toastText.innerText = "Hahaha akhirnya ngaku juga! Senang kan? ❤️";
    }
    return;
  }

  // Hitung posisi aman dalam playful zone
  const zoneRect = zone.getBoundingClientRect();
  const maxX = zoneRect.width - btn.offsetWidth - 20;
  const maxY = zoneRect.height - btn.offsetHeight - 20;

  const randomX = Math.max(10, Math.floor(Math.random() * maxX));
  const randomY = Math.max(10, Math.floor(Math.random() * maxY));
  const randomRotate = (Math.random() - 0.5) * 30;
  const scale = 0.95 - (runawayTries * 0.05);

  btn.style.position = 'absolute';
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
  btn.style.transform = `scale(${scale}) rotate(${randomRotate}deg)`;
}

function onSenangBangetClick() {
  SoundFX.victory();
  shootConfetti(90);
  showToast("Yeay! Hari ini harus jadi hari paling bahagia untukmu! 🥰");
  setTimeout(() => {
    goToScene(4);
  }, 600);
}

function resetRunawayButton() {
  runawayTries = 0;
  const btn = document.getElementById('btnBiasaAja');
  const toastText = document.getElementById('funnyResponseText');
  if (btn) {
    btn.classList.remove('relented');
    btn.innerHTML = "😒 BIASA AJA";
    btn.style.position = 'static';
    btn.style.transform = 'none';
  }
  if (toastText) {
    toastText.innerText = "Pilih yang jujur ya sayang 😜";
  }
}


/* ====================================================================
   11. HALAMAN 4 — PESAN MANIS SATU PER SATU 💌
   ==================================================================== */
let currentMsgIndex = 0;

function renderMessageCard(index) {
  const container = document.getElementById('sweetMessageContainer');
  const dotsContainer = document.getElementById('msgDotsContainer');
  const btn = document.getElementById('btnNextMessage');
  if (!container || !sweetMessages[index]) return;

  const msg = sweetMessages[index];

  container.style.opacity = '0';
  container.style.transform = 'translateY(15px) scale(0.95)';

  setTimeout(() => {
    container.innerHTML = `
      <div class="message-card">
        <div class="msg-icon-badge">${msg.icon}</div>
        <div class="msg-number">${msg.number}</div>
        <div class="msg-quote">"${msg.text}"</div>
      </div>
    `;
    container.style.opacity = '1';
    container.style.transform = 'translateY(0) scale(1)';
  }, 200);

  // Update dots
  if (dotsContainer) {
    dotsContainer.innerHTML = sweetMessages.map((_, i) => `
      <div class="msg-dot ${i === index ? 'active' : ''}"></div>
    `).join('');
  }

  // Update button text
  if (btn) {
    if (index < sweetMessages.length - 1) {
      btn.innerHTML = `Buka Pesan Berikutnya (${index + 2}/${sweetMessages.length}) 💖`;
    } else {
      btn.innerHTML = `Lanjut Ke Galeri Kenangan 📸✨`;
    }
  }
}

function handleNextSweetMessage() {
  SoundFX.pop();
  if (currentMsgIndex < sweetMessages.length - 1) {
    currentMsgIndex++;
    renderMessageCard(currentMsgIndex);
    shootConfetti(25);
  } else {
    // Selesai pesan manis, lanjut ke Galeri
    currentMsgIndex = 0;
    goToScene(5);
  }
}


/* ====================================================================
   12. HALAMAN 5 — GALERI MOMEN KITA 📸 (SWIPE & CAROUSEL)
   ==================================================================== */
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function renderGallery() {
  const track = document.getElementById('galleryTrack');
  const pagination = document.getElementById('galleryPagination');
  if (!track) return;

  track.innerHTML = photos.map((item, idx) => {
    const formattedUrl = formatGoogleDriveUrl(item.image);
    const driveId = extractGoogleDriveId(item.image);
    return `
      <div class="gallery-slide" id="gallerySlide${idx}">
        <div class="photo-container" onclick="openLightbox(${idx})" title="Ketuk untuk melihat ukuran penuh">
          <!-- Background blur adaptif -->
          <div class="photo-blur-bg" style="background-image: url('${formattedUrl}');"></div>
          <!-- Gambar utama dengan ukuran asli proporsional (object-fit: contain) -->
          <img src="${formattedUrl}" 
               alt="Kenangan Bersama Arifia Maulida" 
               class="gallery-img"
               loading="lazy"
               data-drive-id="${driveId || ''}"
               data-original="${item.image}"
               onerror="handleImageFallback(this)" />
          <div class="photo-badge-zoom">🔍 Perbesar</div>
        </div>
        <div class="photo-caption">
          <p class="photo-caption-text">${item.caption}</p>
        </div>
      </div>
    `;
  }).join('');

  updateCarouselPosition();

  // Attach touch swipe
  const viewport = document.querySelector('.carousel-viewport');
  if (viewport) {
    viewport.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
}

function handleSwipe() {
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 45) {
    if (diff > 0) {
      slideGallery(1); // Swipe kiri -> next
    } else {
      slideGallery(-1); // Swipe kanan -> prev
    }
  }
}

function slideGallery(direction) {
  SoundFX.click();
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = photos.length - 1;
  if (currentSlide >= photos.length) currentSlide = 0;
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const track = document.getElementById('galleryTrack');
  const pagination = document.getElementById('galleryPagination');
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  if (pagination) {
    pagination.innerText = `${currentSlide + 1} / ${photos.length}`;
  }
}

function openLightbox(index) {
  SoundFX.pop();
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  if (!modal || !photos[index]) return;

  const formattedUrl = formatGoogleDriveUrl(photos[index].image);
  const driveId = extractGoogleDriveId(photos[index].image);
  
  img.setAttribute('data-drive-id', driveId || '');
  img.setAttribute('data-attempt', '0');
  img.src = formattedUrl;
  img.onerror = function() { handleImageFallback(this); };
  
  caption.innerText = photos[index].caption;
  modal.classList.add('open');
  modal.classList.add('active');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('open');
    modal.classList.remove('active');
  }
}


/* ====================================================================
   13. HALAMAN 6 — GAME MINI: PILIH HAL YANG PALING AKU SUKA DARI KAMU 🥰
   ==================================================================== */
function checkQuizAnswer(choice) {
  const respBox = document.getElementById('quizResponse');
  const nextBtn = document.getElementById('quizNextBtn');
  if (!respBox) return;

  respBox.style.display = 'block';

  if (choice === 'all') {
    SoundFX.victory();
    shootConfetti(100);
    rainConfetti(2500);
    if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 150]);

    respBox.style.background = '#dcfce7';
    respBox.style.borderColor = '#86efac';
    respBox.style.color = '#14532d';
    respBox.innerHTML = `
      <strong>YESSS! Jawaban yang paling benar! 🎉😂</strong><br>
      Karena ternyata memang susah banget kalau cuma disuruh milih satu hal dari kamu... Kamu itu paket lengkap dan paling sempurna untukku! ❤️
    `;
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  } else {
    SoundFX.pop();
    respBox.style.background = '#fff0f3';
    respBox.style.borderColor = '#fecdd3';
    respBox.style.color = '#9f1239';
    respBox.innerHTML = `
      <strong>Benar sekali... 🥰</strong><br>
      Tapi masih ada pilihan yang jauh lebih lengkap dan komplit lho! Coba cari lagi 😜
    `;
  }
}

function resetQuiz() {
  const respBox = document.getElementById('quizResponse');
  const nextBtn = document.getElementById('quizNextBtn');
  if (respBox) respBox.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';
}


/* ====================================================================
   14. HALAMAN 7 — KOTAK KEJUTAN 🎁
   ==================================================================== */
let isGiftOpened = false;

function openGiftBox() {
  if (isGiftOpened) return;
  isGiftOpened = true;

  SoundFX.pop();
  const giftStage = document.getElementById('giftStage');
  const letter = document.getElementById('surpriseLetter');
  const nextBtn = document.getElementById('giftNextBtn');
  const openBtn = document.getElementById('btnOpenGift');

  if (giftStage) giftStage.classList.add('opened');
  if (openBtn) openBtn.style.display = 'none';

  if (navigator.vibrate) {
    navigator.vibrate([150, 80, 200]);
  }

  setTimeout(() => {
    SoundFX.chime();
    shootConfetti(120);
    if (letter) letter.style.display = 'block';
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }, 500);
}

function resetGiftBox() {
  isGiftOpened = false;
  const giftStage = document.getElementById('giftStage');
  const letter = document.getElementById('surpriseLetter');
  const nextBtn = document.getElementById('giftNextBtn');
  const openBtn = document.getElementById('btnOpenGift');

  if (giftStage) giftStage.classList.remove('opened');
  if (letter) letter.style.display = 'none';
  if (nextBtn) nextBtn.style.display = 'none';
  if (openBtn) openBtn.style.display = 'inline-flex';
}


/* ====================================================================
   15. HALAMAN 8 — MOMEN ROMANTIS TERAKHIR 🥰❤️ (TYPEWRITER)
   ==================================================================== */
let typewriterTimeout = null;

function startTypewriterEffect() {
  const target = document.getElementById('typewriterText');
  if (!target) return;

  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
  }

  target.innerHTML = '';
  let charIndex = 0;

  function typeChar() {
    if (charIndex < finalRomanticText.length) {
      const char = finalRomanticText.charAt(charIndex);
      target.innerHTML += char === '\n' ? '<br>' : char;
      charIndex++;
      typewriterTimeout = setTimeout(typeChar, 28);
    }
  }

  typeChar();
}

function restartSurprise() {
  SoundFX.chime();
  shootConfetti(80);
  isCandleBlown = false;
  isGiftOpened = false;
  currentMsgIndex = 0;
  goToScene(1);
}

// WhatsApp Reply Button Helper
function openWhatsAppReply() {
  const msg = encodeURIComponent("Makasih banyak suamiku sayang! Surprise website ulang tahunnya lucu, manis, dan romantis banget ❤️🥰 Aku terharu banget... Love you so much!");
  window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
}


/* ====================================================================
   16. EKSPOR FILE HTML TUNGGAL (SIAP DIKIRIM KE HP ISTRI)
   ==================================================================== */
function downloadSingleHtml() {
  showToast("Menyiapkan file HTML kejutan...");
  
  // Clone dokumen saat ini
  const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Spesial Ulang Tahun Arifia Maulida 💖</title>
  <style>
${document.querySelector('link[href*="style.css"]') ? '/* Embedded CSS */' : ''}
  </style>
</head>
<body>
  ${document.body.innerHTML}
</body>
</html>`;
  
  const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `Surprise_Ulang_Tahun_Arifia_Maulida.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("✅ Berhasil mendownload file HTML!");
}


/* ====================================================================
   17. INITIALIZATION ON DOM READY
   ==================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Setup Background Canvas
  initParticles();
  window.addEventListener('resize', () => {
    resizeBgCanvas();
    resizeConfettiCanvas();
  });

  // Start Particle Loop
  animateParticles();

  // Initial Scene
  goToScene(1);

  // Hilangkan loading screen singkat
  const loader = document.getElementById('initialLoader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }, 800);
  }

  // Load YouTube IFrame API Script jika belum ada
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
});
