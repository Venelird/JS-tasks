const stake = function() {
	const click = document.querySelector('.game-button-label-container').click();
    const allStakes = document.querySelector('.list-container');
    const stakesInArray = [];
    const nodes = allStakes.children;

    let firstInArray = 0;
    let lastInArray = 0;
    let stakeNumbers = 0;
    let maxStake = 0;
    let minStake = 0;

    for (let i = 0; i < nodes.length; i++) {
        const atStake = Number((nodes[i].innerText.replace(/[^0-9.-]+/g,"")));
        stakesInArray.push(atStake);

        minStake = Math.min(...stakesInArray);
        maxStake = Math.max(...stakesInArray);

        stakeNumbers = i;
      
        firstInArray = Number(stakesInArray[0]);
        lastInArray = Number(stakesInArray[stakesInArray.length - 1]);
        
        if (minStake >= stakesInArray[stakeNumbers]) {
            minStake = stakesInArray[stakeNumbers];
            if (firstInArray === minStake) {
                console.log(`The lowest value is ${firstInArray}`);
            }
        } 
    }

        if (maxStake === stakesInArray[stakeNumbers]) {
            maxStake = stakesInArray[stakeNumbers];
            if (lastInArray === maxStake) {
                console.log(`The highest value is ${lastInArray}`);
            }
        }
}