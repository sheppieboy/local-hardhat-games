const gameAddr = '0x0165878A594ca255338adfa4d48449f69242Eb8F';
const contractName = 'Game5';

async function main() {
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  await game.giveMeAllowance(20000);
  await game.mint(15000);
  const tx = await game.win();

  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
