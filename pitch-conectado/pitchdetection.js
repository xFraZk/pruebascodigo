class pitchDetection {
    constructor() {
        this.model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
        this.pitch;

    }

startPitch() {
  this.pitch = ml5.pitchDetection(this.model_url, audioContext , mic.stream, this.modelLoaded);
}

modelLoaded() {
  this.getPitch();
}

getPitch() {
  this.pitch.getPitch(function(err, frequency) {

    if (frequency && haySonido) { 
      gestorPitch.actualizar(frequency);
      console.log(frequency);
    } else {

      gestorPitch.actualizar(FREC_MIN); 
    }
    
  
    this.setTimeout(this.pitch.getPitch); 
  });
}

}