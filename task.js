const promptSync = require('prompt-sync')();
const bands = require('./bands.json');

//1
const bandCreations = bands.map(band => ({
    bandName: band.bandName,
    songs: band.tracks.map(track => track.name)
  }));
  console.log(bandCreations);

//5
const trackDuration = bands.map(band => {
  const totalDurationMinutes = band.tracks.reduce((sum, track) => sum + track.duration, 0) / 60;
  return {
    bandName: band.bandName,
    totalDurationMinutes: totalDurationMinutes.toFixed(0),
    nameTrack: band.tracks.nameTrack
  }});
  trackDuration.forEach(band => {
    console.log("============");
    console.log("Name band: " + band.bandName);
    console.log(" \nDuration of all songs - " + band.totalDurationMinutes);
  })