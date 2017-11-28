
var musicSpecials = [

{
    "date": moment("2017-10-06 09:30"),
    "show": "(TESTING) Morning Sound Alternative",
    "url": "https://kgnu.org/msa",
    "description": "Billy Bragg Special"
},
{
    "date": moment("2017-10-11 09:30"),
    "show": "Morning Sound Alternative",
    "url": "https://kgnu.org/msa",
    "description": "Billy Bragg Special"
},
{
    "date": moment("2017-10-11 12:00"),
    "show": "Afternoon Sound Alternative",
    "url": "https://kgnu.org/asa",
    "description": "Radiohead Special"
},
{

    "date": moment("2017-10-12 09:30"),
    "show": "Morning Sound Alternative",
    "url": "https://kgnu.org/msa",
    "description": "The Mourning Dead Show"
},
{
    "date": moment("2017-10-12 20:00"),
    "show": "Ragtime",
    "url": "http://afterfm.com/ragtime",
    "description": "Syncopated Tunes"
},
{
    "date": moment("2017-10-12 21:00-0600"),
    "show": "Swing Shift",
    "url": "http://afterfm.com/swing",
    "description": "George Gershwin Special"
},
{
    "date": moment("2017-10-12 22:00"),
    "show": "Jazz Lives",
    "url": "http://www.afterfm.com/traditionaljazz",
    "description": "GNU at KGNU"
},
{
    "date": moment("2017-10-13 09:30"),
    "show": "Morning Sound Alternative",
    "url": "https://kgnu.org/msa",
    "description": "Sonny Landreth Special"
},
{
    "date": moment("2017-10-13 12:00-0600"),
    "show": "Afternoon Sound Alternative",
    "url": "http://www.afterfm.com/afternoonsound",
    "description": "50th Anniversary 1967"
},
{
    "date": moment("2017-10-13 21:00-0600"),
    "show": "Dusty Grooves",
    "url": "http://afterfm.com/funk",
    "description": "Stax/Muscle Shoals Salute"
},
{
    "date": moment("2017-10-14 19:00-0600"),
    "show": "Sound Lab",
    "url": "http://www.afterfm.com/evening",
    "description": "Live Local Music"
},
{
    "date": moment("2017-10-15 07:00-0600"),
    "show": "Gospel Chime",
    "url": "http://www.afterfm.com/gospel",
    "description": "The Gospel Trifecta Al Green, Sam Cooke, and Aretha Franklin"
},
{
    "date": moment("2017-10-15 22:00-0600"),
    "show": "Dub Palace",
    "url": "http://www.afterfm.com/dub",
    "description": "Planet Dub"
},
{
    "date": moment("2017-10-16 12:00-0600"),
    "show": "Afternoon Sound Alternative",
    "url": "http://www.afterfm.com/afternoonsound",
    "description": "Townes Van Zandt Special"
},
{
    "date": moment("2017-10-17 09:30-0600"),
    "show": "Morning Sound Alternative",
    "url": "https://kgnu.org/msa",
    "description": "Collaborations and Covers"
},
{
    "date": moment("2017-10-17 12:00-0600"),
    "show": "Afternoon Sound Alternative",
    "url": "http://www.afterfm.com/afternoonsound",
    "description": "David Lynch Special"
},

{
    "date": moment("2017-10-18 09:00-0600"),
    "show": "Morning Sound Alternative",
    "url": "https://kgnu.org/msa",
    "description": "Surf & Spaghetti Westerns"
},

{
    "date": moment("2017-10-18 12:00-0600"),
    "show": "Afternoon Sound Alternative",
    "url": "http://www.afterfm.com/afternoonsound",
    "description": "Allman Brothers Special"
},

{
    "date": moment("2017-10-18 19:00-0600"),
    "show": "Seolta Gael",
    "url": "http://www.afterfm.com/celtic",
    "description": "Ghosts of the Gaels"
},
{
    "date": moment("2017-10-18 22:00-0600"),
    "show": "Reggae Transfusion",
    "url": "http://www.afterfm.com/morereggae",
    "description": "Bootlegged Bob"
},
{
    "date": moment("2017-10-19 09:30-0600"),
    "show": "Morning Sound Alternative",
    "url": "https://kgnu.org/msa",
    "description": "Joni Mitchell Inspirations - Songs for and by Joni"
},
{
    "date": moment("2017-10-19 22:00-0600"),
    "show": "Jazz Lives",
    "url": "http://www.afterfm.com/traditionaljazz",
    "description": "Jazz in Autumn"
},
{
    "date": moment("2017-10-17 19:00-0600"),
    "show": "Kabaret",
    "url": "http://www.kgnu.org/kabaret",
    "description": "Musical guests: Roka Hueka and Planina"
},
{
    "date": moment("2017-10-05 22:00-0600"),
    "show": "(TESTING) Jazz Lives",
    "url": "http://www.afterfm.com/traditionaljazz",
    "description": "Jazz in Autumn"
},
{
    "date": moment("2017-10-21 09:00-0600"),
    "show": "Old Grass Gnu Grass",
    "url": "http://www.afterfm.com/bluegrass",
    "description": "Transportations and Destinations"
},
{
    "date": moment("2017-10-21 16:00-0600"),
    "show": "African Roots",
    "url": "http://www.afterfm.com/africanroots",
    "description": "Afrobeat"
},
{
    "date": moment("2017-10-18 20:00-0600"),
    "show": "Musica Mundi",
    "url": "http://www.kgnu.org/musica",
    "description": "Interview with Kutandara"
}

]

musicSpecials.sort(function(a, b) {
        return a.date - b.date;
    });


// for (show of musicSpecials) {
//     console.log( show.date.calendar(), show.show, show.description);
// }


var appShows = new Vue({
  el: '#shows',
  data: {
    specials: musicSpecials
  },
  computed: {
    upcoming: () =>{
        var shortlist = [];
        var now = moment();
        for (show of musicSpecials) {
            if ( show.date > now) {
                shortlist.push(show);
            }
        }
        return shortlist.slice(0, 8);
    }
  }
})
