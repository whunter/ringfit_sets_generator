class Sets {
  constructor() {
    this.entries = [
      "Abs",
      "Aerobic",
      "Back",
      "Chest",
      "Core",
      "Flexibility",
      "Glutes",
      "Legs",
      "Lower Body",
      "Posture",
      "Shoulders",
      "Stamina",
      "Trapezius",
      "Upper Arms",
      "Waist"
    ];
    this.numSelect = document.getElementById("num-sets-select");
    this.submitButton = document.getElementById("submit");
    this.setsDisplay = document.getElementById("sets-display");
    this.populateSelect(this.numSelect);
    this.setSubmitListener();
  };

  populateSelect(select) {
    this.entries.map((val, idx) => {
      idx = idx + 1;
      const option = document.createElement("option")
      option.setAttribute("value", idx);
      option.innerHTML = idx;
      select.append(option);
      select.value = 1;
    });
  };

  setSubmitListener() {
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.handleSubmit(this.numSelect.value);
    })
  };

  handleSubmit(numSets) {
    const sets = this.generateSets(numSets)
    this.populateDisplay(sets);
  };

  generateSets(numSets) {
    const sets = [];
    let idx = null;
    for(let i = 0; i < numSets; i++) {
      do {
        idx = Math.max(Math.floor(Math.random() * this.entries.length),0);
      } while(sets.indexOf(this.entries[idx]) !== -1 && sets.length < this.entries.length);
      sets.push(this.entries[idx]);
    }
    return sets;
  };

  populateDisplay(sets){
    this.clearDisplay();
    sets.map((item) => {
      const imgSrc = `images/${item.toLowerCase().replace(" ", "_")}.png`;
      const img = document.createElement("img");
      img.setAttribute("src", imgSrc);
      this.setsDisplay.append(img);
    });
  };

  clearDisplay() {
    while(this.setsDisplay.firstChild) {
      this.setsDisplay.removeChild(this.setsDisplay.firstChild);
    }
  }
}