new Vue({
  el: "#app",
  data() {
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
  
    const tracks = [
        
        {
          artist: "In The Meantime",
          name: "Spacehog",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/20.mp3",
          url: "https://youtu.be/PCsGRCf8T9Y",
          favorited: false
        },
         {
          artist: "Life is a Highway",
          name: "Rascal Flatts",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/11.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/28.mp3",
          url: "https://youtu.be/5tXh_MfrMe0",
          favorited: false
        },
        {
          artist: "On Our way",
          name: "The Royal Concept",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/29.mp3",
          url: "https://youtu.be/nWyhUoxAbYI",
          favorited: false
        },
         {
          artist: "Play Hard",
          name: "David Guetta , Ne-Yo , Akon",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/19.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/30.mp3",
          url: "https://youtu.be/5dbEhBKGOtY",
          favorited: false
        },
        {
          artist: "I Took A Pill In Ibiza (Seeb Remix)",
          name: "Mike Ponser",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/14.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/31.mp3",
          url: "https://youtu.be/foE1mO2yM04",
          favorited: false
        },
        {
        artist: "OnlyFans",
       name: "PRAYER , Yung Trench",
       cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/9.jpg",
       source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/24.mp3",
       url: "https://youtu.be/rvkJjKll-zE",
       favorited: false
       },
        {
          artist: "Harleys In Hawai",
          name: "katy Perry",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/32.mp3",
          url: "https://youtu.be/sQEgklEwhSo",
          favorited: false
        },
        {
          artist: "Con La Birsa",
          name: "Foudeqush , Ludwig Göransson",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/18.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/22.mp3",
          url: "https://youtu.be/FSXcA0FPpbM",
          favorited: false
        },
        {
          artist: "Payphone",
          name: "Maroon 5 , Wiz Khalifa",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/7.mp3",
          url: "https://youtu.be/KRaWnd3LJfs",
          favorited: false
        },
        
        {
          artist: "Circo Loco",
          name: "Drake",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/12.mp3",
          url: "https://youtu.be/jxILuhLm6hs",
          favorited: false
        },
        
        
        {
          artist: "Burn Out",
          name: "Martin Garrix",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/2.mp3",
          url: "https://youtu.be/DylzGXE_ibU",
          favorited: false
        },
       
        {
          artist: "Scared To Be Lonely",
          name: "Martin Garrix , Dua Lipa",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/5.mp3",
          url: "https://youtu.be/e2vBLd5Egnk",
          favorited: false
        },
        {
          artist: "Rain Over Me",
          name: "Pitbull , Marc Anthony",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/5.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/6.mp3",
          url: "https://youtu.be/SmM0653YvXU",
          favorited: false
        },
        
        {
           artist: " Unforgettable",
          name: "French Montana",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/15.mp3",
          url: "https://youtu.be/CTFtOOh47oo",
          favorited: false
        },
        {
           artist: "Rich Flex",
          name: "Drake, 21 Savage ",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/13.mp3",
          url: "https://youtu.be/gOvNACDVXzI",
          favorited: false
        },
        {
           artist: "Mekanın Sahibi",
          name: "Norm Ender",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
           artist: "Toosie Slide",
          name: "Drake",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/19.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/14.mp3",
          url: "https://youtu.be/xWggTb45brM",
          favorited: false
        },
        {
           artist: "Under The Influence",
          name: "Chris Brown",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/10.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/16.mp3",
          url: "https://youtu.be/LPnDCTqW7zw",
          favorited: false
        },
        {
          artist: "Echo",
          name: "Maroon 5 ",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/11.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/21.mp3",
          url: "https://youtu.be/cOwlU2W3WiM",
          favorited: false
        },
        {
          artist: "Nothing Breaks like a Heart",
         name: "Mark Ronson, Miley Cyrus",
         cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/8.jpg",
         source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/23.mp3",
         url: "https://youtu.be/A9hcJgtnm6Q",
         favorited: false
       },
        {
           artist: "Goosebump",
          name: "Travis Scott , Kendrick Lamar",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/12.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/18.mp3",
          url: "https://youtu.be/Dst9gZkq1a8",
          favorited: false
        },
        {
           artist: "Animals",
          name: "Maroon 5",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/13.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/17.mp3",
          url: "https://youtu.be/qpgTC9MDx1o",
          favorited: false
        },
        {
           artist: "Party Monster",
          name: "Weeknd",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/14.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/8.mp3",
          url: "https://youtu.be/diW6jXhLE0E",
          favorited: false
        },
        {
          artist: "Gimme More",
         name: "Britney Spears",
         cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/11.jpg",
         source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/26.mp3",
         url: "https://youtu.be/elueA2rofoo",
         favorited: false
       },
        {
           artist: "To Ü",
          name: "Shrillex & Diplo",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/15.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/9.mp3",
          url: "https://youtu.be/9NwZdxiLvGo",
          favorited: false
        },
        
         {
           artist: "Right Night Feeling",
          name: "Atthar",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/16.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/10.mp3",
          url: "https://youtu.be/P8uqtTOXoYE",
          favorited: false
        },
        {
        artist: "One Last Time",
       name: "Daft Punk",
       cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/10.jpg",
       source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/25.mp3",
       url: "https://youtu.be/FGBhQbmPwH8",
       favorited: false
      },
      {
        artist: "Plane Jane",
       name: "A$AP Ferg , Nicki Minaj",
       cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/19.jpg",
       source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/27.mp3",
       url: "https://youtu.be/XDMGmtpvBjs",
       favorited: false
      },
        {
           artist: "Blow your Mind",
          name: "Dua Lipa",
          cover: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/img/17.jpg",
          source: "https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/11.mp3",
          url: "https://youtu.be/1nydxbGhgv8",
          favorited: false
        },
        
       
      ];

      const shuffledTracks = [...tracks];
      shuffleArray(shuffledTracks);
    
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: shuffledTracks,
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    
    
    
    
    
    
    
    
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

async function setSleepTime() {
  var audio = new Audio("https://raw.githubusercontent.com/R1SH4BH81/music.player/master/mp3/Notification.mp3");
  audio.volume = 0.5;
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    await playPromise;
  }
  var sleepTimeSelect = document.getElementById("sleep-time");
  var selectedValue = sleepTimeSelect.value;
  // Use selectedValue to set the sleep timer

  // Stop the song after the selected sleep time
  setTimeout(function() {
    location.reload();
    console.log("Song stopped after " + selectedValue + " mins");
  }, selectedValue * 60 * 1000); // Convert selectedValue from minutes to milliseconds

  alert("A Sleep timer has been set for " + selectedValue + " minutes");
}

// Check the initial mode from the user's preferences
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark-mode');
  document.getElementById('toggle').checked = true;
}

// Toggle mode when the switch is clicked
document.getElementById('toggle').addEventListener('change', function() {
  if (this.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
  } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
  }
});
// Get the toggle button element and status element
var toggleButton = document.getElementById('toggle');
var statusElement = document.getElementById('status');

// Function to handle the toggle event
