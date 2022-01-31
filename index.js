const hQ = 42

function distanceFromHqInBlocks(input) {
  return Math.abs(input - hQ);
}

function distanceFromHqInFeet(sum){
  return distanceFromHqInBlocks(sum) * 264
};

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264;
};

function calculatesFarePrice(start, destination){
  const dT = distanceTravelledInFeet(start, destination)
  const distanceCharged = dT - 400
  if (dT <= 400) return 0
  if (dT >= 400 && dT <= 2000 ){
    return distanceCharged * .02;
  } if (dT >= 2000 && dT <= 2500){
    return 25
  } if (dT > 2500){
    return 'cannot travel that far'
  }
  
};






/*function distanceFromHqInFeet(somevalue) {
  return distanceFromHqInBlocks(somevalue) * 264
}

function distanceTravelledInFeet(start, destination) {
  const distanceTravelled = Math.abs(destination - start)
  return distanceTravelled * 264

}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination)

  if (distanceTravelled <= 400) return 0

  if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    const distanceCharged = distanceTravelled - 400
    return distanceCharged * .02
  }
  if (distanceTravelled > 2000 && distanceTravelled <= 2500 ) {
    return 25
  }
  if (distanceTravelled > 2500) {
    return "cannot travel that far"
  }


}

  //calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.*/