const gameAddr = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';
const contractName = 'Game4';

async function main() {
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  const tx = await game.win(56);

  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
