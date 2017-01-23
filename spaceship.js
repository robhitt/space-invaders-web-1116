class Spaceship {
  constructor (name, crewMemberArray, phasers, shields) {
    this.name = name
    this.crewMemberArray = crewMemberArray
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    if (crewMemberArray.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }


    for (let crewMemberIndex in crewMemberArray) {
      crewMemberArray[crewMemberIndex].currentShip = this
    }

    // crewMemberArray.forEach(function(crewMember, index, array) {
    //
    //   crewMember.currentShip = this
    // })
  }
}
