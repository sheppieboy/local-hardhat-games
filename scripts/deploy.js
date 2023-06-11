async function main() {
  for (let i = 1; i <= 5; i++) {
    let contractName = `Game${i}`;
    const Game = await hre.ethers.getContractFactory(contractName);
    const game = await Game.deploy();
    console.log(`${contractName} deployed to address: ${game.address}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
