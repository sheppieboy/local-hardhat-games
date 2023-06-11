const gameAddr = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const contractName = 'Game2';

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  //set x
  await game.setX(25);

  //set y
  await game.setY(25);

  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
