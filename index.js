// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    const distanceDifference = Math.abs(hqLocation -someValue);
    return distanceDifference;
  }

  function distanceFromHqInFeet(someValue) {
    const walkinDistance = distanceFromHqInBlocks(someValue) * 264;
    return walkinDistance;
  }

  function distanceTravelledInFeet(start, destination) {
    const distanceTravelled = Math.abs(destination - start);
    const distanceWalking = distanceTravelled * 264;
    return distanceWalking;
  }

  function calculatesFarePrice(start, destination){
    const discount = 400;
    const distance = Math.abs(destination - start) *264;
    if(distance <= 400){
        return 0;
    }
    else if( distance > discount && distance < 2000){
        const fare = 0.02;        
        const calculateFare = (distance-400) * fare;
        return calculateFare;
    }
    else if (distance > 2000 && distance <2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
  }